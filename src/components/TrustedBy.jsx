const logos = [
  "/clients/logo1.png",
  "/clients/logo2.png",
  "/clients/logo3.png",
  "/clients/logo4.png",
  "/clients/logo5.png",
  "/clients/logo6.png",
  "/clients/logo7.webp",
  "/clients/logo8.png",
  "/clients/logo9.png",
  "/clients/logo10.png",
  "/clients/logo11.png",
  "/clients/logo12.webp",
  "/clients/logo13.webp",
  "/clients/logo14.webp",
  "/clients/logo15.png",
  "/clients/logo16.png",
  "/clients/logo17.webp",
  "/clients/logo18.png",
  "/clients/logo19.png",
  "/clients/logo20.png",
  "/clients/logo21.png",
  "/clients/logo22.png",
  "/clients/logo23.png",
  "/clients/logo24.png",


];

export default function TrustedBy() {
  return (
    <section id = "worked" className="py-16 bg-slate-50 overflow-hidden">
      <h3 className="text-center text-xl font-semibold text-gray-800 mb-10">
        Trusted by
      </h3>

      <div className="overflow-hidden">
        {/* Moving track */}
        <div className="flex w-max gap-16 animate-marquee hover:[animation-play-state:paused]">
          {/* Duplicate logos for smooth infinite scroll */}
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client logo ${index + 1}`}
              className="h-11 w-auto object-contain opacity-70 transition hover:opacity-100 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
