"use client";

import { MapContainer, GeoJSON, Marker, Popup, useMap } from "react-leaflet";
import L, { PathOptions } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useMemo, useRef, useState } from "react";

// Blue marker icon matching brand
const blueMarkerIcon = L.icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const COUNTRIES_WORKED = [
  "Ghana",
  "Kenya",
  "Tanzania",
  "Uganda",
  "Rwanda",
  "Burundi",
  "Malawi",
  "Zambia",
  "Democratic Republic of the Congo",
];

// GeoJSON names for countries we work in (some differ from display names)
// GeoJSON names for countries we work in (GeoJSON uses "DR Congo", not full name)
const GEO_NAMES_HIGHLIGHTED = new Set([
  "Ghana", "Kenya", "Tanzania", "Uganda", "Rwanda", "Burundi", "Malawi", "Zambia",
  "DR Congo", "Democratic Republic of the Congo",
]);

const createCountryStyle = (feature: GeoJSON.Feature | undefined): PathOptions => {
  const name = ((feature as GeoJSON.Feature)?.properties?.name || "") as string;
  const nameLower = name.toLowerCase();
  const isHighlighted =
    GEO_NAMES_HIGHLIGHTED.has(name) ||
    COUNTRIES_WORKED.some((c) => {
      const cLower = c.toLowerCase().replace(" democratic republic of the congo", "").trim();
      return nameLower.includes(cLower) || (nameLower.includes("democratic republic") && nameLower.includes("congo"));
    });

  return {
    fillColor: isHighlighted ? "#3D66F4" : "#e0e7ff",
    weight: 1,
    opacity: 1,
    color: "#fff",
    fillOpacity: isHighlighted ? 0.7 : 0.4,
  };
};

// Map label names to GeoJSON feature names
const LABEL_TO_GEOJSON: Record<string, string> = {
  Ghana: "Ghana",
  Kenya: "Kenya",
  Tanzania: "Tanzania",
  Uganda: "Uganda",
  Rwanda: "Rwanda",
  Burundi: "Burundi",
  Malawi: "Malawi",
  Zambia: "Zambia",
  "D.R. Congo": "DR Congo",
};

// Map GeoJSON names to button/label names (for map click)
const GEOJSON_TO_LABEL: Record<string, string> = {
  Ghana: "Ghana",
  Kenya: "Kenya",
  Tanzania: "Tanzania",
  Uganda: "Uganda",
  Rwanda: "Rwanda",
  Burundi: "Burundi",
  Malawi: "Malawi",
  Zambia: "Zambia",
  "DR Congo": "D.R. Congo",
  "Democratic Republic of the Congo": "D.R. Congo",
};

// East Africa region for default view (excludes Ghana so map is not too zoomed out)
const EAST_AFRICA_GEO_NAMES = new Set([
  "Kenya", "Tanzania", "Uganda", "Rwanda", "Burundi", "Malawi", "Zambia", "DR Congo",
  "Democratic Republic of the Congo",
]);

function getCountryCenter(
  geoJsonData: GeoJSON.FeatureCollection,
  labelName: string
): L.LatLng | null {
  const geoName = LABEL_TO_GEOJSON[labelName];
  if (!geoName) return null;
  const feature = geoJsonData.features.find((f) => {
    const name = (f.properties?.name || "") as string;
    return name === geoName || name.toLowerCase().includes(geoName.toLowerCase());
  });
  if (!feature?.geometry) return null;
  try {
    const layer = L.geoJSON({ type: "FeatureCollection", features: [feature] } as GeoJSON.GeoJSON);
    const bounds = layer.getBounds();
    return bounds.isValid() ? bounds.getCenter() : null;
  } catch {
    return null;
  }
}

function LocationMarker({
  position,
  label,
  icon,
}: {
  position: [number, number];
  label: string;
  icon: L.Icon;
}) {
  return (
    <Marker
      position={position}
      icon={icon}
      eventHandlers={{
        add: (e) => {
          setTimeout(() => e.target.openPopup(), 100);
        },
      }}
    >
      <Popup>{label}</Popup>
    </Marker>
  );
}

function FitBounds({ geoJsonData, selectedCountry }: { geoJsonData: GeoJSON.FeatureCollection; selectedCountry: string | null }) {
  const map = useMap();
  const hasFlownToCountry = useRef(false);

  // Initial view: fit East Africa region (so map is "covered" by default, not full Africa or zoomed to one country)
  useEffect(() => {
    if (!geoJsonData?.features?.length) return;
    try {
      const eastAfricaFeatures = geoJsonData.features.filter((f) => {
        const name = (f.properties?.name || "") as string;
        return EAST_AFRICA_GEO_NAMES.has(name) || name === "Democratic Republic of the Congo";
      });
      if (eastAfricaFeatures.length > 0) {
        const layer = L.geoJSON({ type: "FeatureCollection", features: eastAfricaFeatures } as GeoJSON.GeoJSON);
        const bounds = layer.getBounds();
        if (bounds.isValid()) {
          map.fitBounds(bounds, { padding: [120, 120], maxZoom: 5 });
        } else {
          map.setView([-6, 35], 4);
        }
      } else {
        map.setView([-6, 35], 4);
      }
    } catch {
      map.setView([-6, 35], 4);
    }
  }, [geoJsonData, map]);

  // Fly to selected country only when user clicks a label (skip initial load so default view stays)
  useEffect(() => {
    if (!selectedCountry || !geoJsonData?.features?.length) return;
    if (!hasFlownToCountry.current) {
      hasFlownToCountry.current = true;
      return;
    }
    const geoName = LABEL_TO_GEOJSON[selectedCountry];
    if (!geoName) return;
    const feature = geoJsonData.features.find((f) => {
      const name = (f.properties?.name || "") as string;
      return name === geoName || name.toLowerCase().includes(geoName.toLowerCase());
    });
    if (feature?.geometry) {
      try {
        const layer = L.geoJSON({ type: "FeatureCollection", features: [feature] } as GeoJSON.GeoJSON);
        const bounds = layer.getBounds();
        if (bounds.isValid()) {
          map.flyToBounds(bounds, { padding: [80, 80], maxZoom: 10, duration: 1.25 });
        }
      } catch {
        map.flyTo([-8, 25], 8, { duration: 1 });
      }
    }
  }, [selectedCountry, geoJsonData, map]);
  return null;
}

function geoJsonNameToLabel(geoName: string): string | null {
  if (GEOJSON_TO_LABEL[geoName]) return GEOJSON_TO_LABEL[geoName];
  const lower = geoName.toLowerCase();
  if (lower.includes("democratic republic") && lower.includes("congo")) return "D.R. Congo";
  if (EAST_AFRICA_GEO_NAMES.has(geoName) || COUNTRIES_WORKED.some((c) => c.toLowerCase() === geoName.toLowerCase()))
    return geoName;
  return null;
}

export default function AfricaMap({
  selectedCountry = null,
  compact = false,
  onCountrySelect,
}: {
  selectedCountry?: string | null;
  compact?: boolean;
  onCountrySelect?: (country: string) => void;
}) {
  const [geoJsonData, setGeoJsonData] = useState<GeoJSON.FeatureCollection | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGeoJSON = async () => {
      try {
        const response = await fetch("/data/africa.geojson");
        const data = (await response.json()) as GeoJSON.FeatureCollection;
        const flatFeatures: GeoJSON.Feature[] = [];
        for (const f of data.features || []) {
          const geom = f.geometry as GeoJSON.Geometry | undefined;
          if (geom?.type === "GeometryCollection" && "geometries" in geom) {
            for (const g of geom.geometries) {
              if (g && (g.type === "Polygon" || g.type === "MultiPolygon")) {
                flatFeatures.push({ ...f, geometry: g as GeoJSON.Polygon | GeoJSON.MultiPolygon });
              }
            }
          } else if (geom && (geom.type === "Polygon" || geom.type === "MultiPolygon")) {
            flatFeatures.push(f);
          }
        }
        setGeoJsonData(
          flatFeatures.length > 0 ? { type: "FeatureCollection", features: flatFeatures } : data
        );
      } catch (error) {
        console.error("Error loading GeoJSON:", error);
      } finally {
        setLoading(false);
      }
    };

    if (typeof window !== "undefined") {
      loadGeoJSON();
    }
  }, []);

  const markerPosition = useMemo(() => {
    if (!selectedCountry || !geoJsonData) return null;
    return getCountryCenter(geoJsonData, selectedCountry);
  }, [selectedCountry, geoJsonData]);

  if (typeof window === "undefined") {
    return <div className="h-[1600px] w-full bg-stone-50" />;
  }

  if (loading) {
    return (
      <div className="flex h-[1600px] w-full items-center justify-center bg-stone-50">
        <span className="text-stone-500">Loading map...</span>
      </div>
    );
  }

  if (!geoJsonData?.features?.length) {
    return (
      <div className="flex h-[1600px] w-full items-center justify-center bg-stone-50">
        <span className="text-stone-500">Map data unavailable</span>
      </div>
    );
  }

  const mapHeight = compact ? 900 : 1600;

  return (
    <div
      className={`relative w-full ${compact ? "africa-map-compact" : "africa-map-wrapper"}`}
      style={{ height: mapHeight }}
    >
      <MapContainer
        center={[-8, 25]}
        zoom={8}
        scrollWheelZoom={false}
        zoomControl={false}
        attributionControl={false}
        style={{
          height: mapHeight,
          width: "100%",
          backgroundColor: "#fafaf9",
          overflow: "hidden",
        }}
      >
        <FitBounds geoJsonData={geoJsonData} selectedCountry={selectedCountry} />

        {geoJsonData.features.length > 0 && (
          <GeoJSON
            key="africa"
            data={geoJsonData}
            style={createCountryStyle}
            onEachFeature={(feature, layer) => {
              const name = (feature.properties?.name || "") as string;
              const label = geoJsonNameToLabel(name) || name;
              layer.bindPopup(label, {
                className: "africa-map-popup",
                closeButton: true,
              });
              layer.on("click", () => {
                onCountrySelect?.(label);
              });
            }}
          />
        )}

        {markerPosition && selectedCountry && (
          <LocationMarker
            position={[markerPosition.lat, markerPosition.lng]}
            label={selectedCountry}
            icon={blueMarkerIcon}
          />
        )}
      </MapContainer>
    </div>
  );
}
