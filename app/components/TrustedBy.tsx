import Image from "next/image";

const CLIENT_LOGOS = [
  { src: "/client/loughborough-univeristy-lboro-logo-1024x258.png", alt: "Loughborough University" },
  { src: "/client/mecslogo.png", alt: "UK International Development / MECS" },
  { src: "/client/15_karl-kuebel-stiftung.png", alt: "Karl Kübel Stiftung" },
  { src: "/client/CSSC-logo-bgless.png", alt: "Christian Social Services Commission" },
  { src: "/client/CcNLE7oh_400x400.jpg", alt: "Partner" },
  { src: "/client/afrifoodlinks-logo-mobile-full.c76c76-1024x434.png", alt: "AfriFOODlinks" },
  { src: "/client/iclei.png", alt: "ICLEI" },
  { src: "/client/rikolto.png", alt: "Rikolto" },
  { src: "/client/thefred.png", alt: "The Fred Hollows Foundation" },
  { src: "/client/hystra.png", alt: "Hystra" },
  { src: "/client/GDC%20Consulting.png", alt: "GDC Consulting" },
  { src: "/client/Logo.png", alt: "Client" },
];

export default function TrustedBy() {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
          {/* Left: "Trusted By" title + description */}
          <div className="shrink-0 lg:max-w-sm">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#3D66F4] sm:text-4xl md:text-5xl">
              Trusted
              <br />
              By
            </h2>
            <div className="mt-4" aria-hidden>
              <span className="block h-1 w-12 rounded-full bg-[#3D66F4]" />
            </div>
          </div>
          {/* Right: logo grid */}
          <div className="min-w-0 flex-1">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-5">
              {CLIENT_LOGOS.map(({ src, alt }) => (
                <div
                  key={src}
                  className="flex items-center justify-center p-3"
                >
                  <div className="relative h-16 w-full max-w-[170px] md:h-20 md:max-w-[200px]">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 640px) 150px, (max-width: 768px) 170px, 190px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
