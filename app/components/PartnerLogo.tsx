"use client";

export default function PartnerLogo({
  name,
  logoPath,
}: {
  name: string;
  logoPath: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-stone-200 bg-stone-50 px-3 py-2">
      <img
        src={logoPath}
        alt=""
        className="h-6 w-16 object-contain"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <span className="text-xs font-medium text-stone-700">{name}</span>
    </div>
  );
}
