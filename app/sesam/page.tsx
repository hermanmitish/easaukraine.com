import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SESAM 2021 Poliklinika",
  description:
    "SESAM 2021 Poliklinika — this summer, around 100 architecture students and young professionals from Europe will come to Slavutych, Northern Ukraine.",
};

const photos = [
  { src: "/images/sesam/poliklinika-columns.jpg", alt: "Poliklinika building exterior" },
  { src: "/images/sesam/slavutych-arch.jpg", alt: "Slavutych architecture" },
  { src: "/images/sesam/slavutych-mosaic.jpg", alt: "Slavutych building mosaic" },
  { src: "/images/sesam/slavutych-relief.jpg", alt: "Slavutych ornamental relief" },
  { src: "/images/sesam/poliklinika-entrance.jpg", alt: "Poliklinika entrance" },
  { src: "/images/sesam/poliklinika-exterior.jpg", alt: "Poliklinika exterior" },
  { src: "/images/sesam/poliklinika-aerial.jpg", alt: "Poliklinika aerial view" },
  { src: "/images/sesam/poliklinika-interior.jpg", alt: "Poliklinika interior" },
];

const supporters = [
  { src: "/images/sesam/ukrainian-cultural-foundation.jpg", alt: "Ukrainian Cultural Foundation", width: 120 },
  { src: "/images/sesam/slavutych-capital-logo.jpg", alt: "Slavutych — Small Cultural Capital 2021", width: 100 },
  { src: "/images/sesam/slavutych-city-council.jpg", alt: "Slavutych City Council", width: 130 },
  { src: "/images/sesam/easa-ukraine-logo.jpg", alt: "EASA Ukraine", width: 110 },
];

const mediaPartners = [
  { src: "/images/sesam/archdaily.jpg", alt: "ArchDaily", width: 110 },
  { src: "/images/sesam/canactions.jpg", alt: "CANactions", width: 70 },
  { src: "/images/sesam/kontextur.png", alt: "Kontextur", width: 90 },
  { src: "/images/sesam/kreatura.png", alt: "Kreatura", width: 70 },
  { src: "/images/sesam/phoeinus.jpg", alt: "Phoeinus", width: 75 },
  { src: "/images/sesam/platforma-ostriv.jpg", alt: "Платформа Острів", width: 80 },
];

export default function SesamPage() {
  return (
    <main className="min-h-screen bg-white text-black font-body">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-4 text-xs tracking-widest uppercase border-b border-gray-100">
        <div className="flex gap-8">
          <a href="#about" className="hover:opacity-50 transition-opacity">about us</a>
          <a href="#program" className="hover:opacity-50 transition-opacity">program</a>
          <a href="#faq" className="hover:opacity-50 transition-opacity">FAQ</a>
          <a href="#covid" className="hover:opacity-50 transition-opacity">COVID-19</a>
          <a href="#contact" className="hover:opacity-50 transition-opacity">#поліклаsom</a>
        </div>
        <a href="#contact" className="hover:opacity-50 transition-opacity">contact</a>
      </nav>

      <div className="max-w-5xl mx-auto px-8 py-12">

        {/* Hero: title + intro + photos */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Left */}
          <div>
            <Image
              src="/images/sesam/sesam-title.png"
              alt="SESAM 2021 POLIKLINIKA"
              width={900}
              height={310}
              className="w-full mb-8"
              priority
            />
            <div className="text-sm leading-relaxed space-y-4">
              <p>
                This summer, around 100 architecture students and young
                professionals from Europe (and beyond) will come to Slavutych,
                Northern Ukraine, to participate in SESAM 2021 — Poliklinika.
                After postponing the event for a year due to the global
                pandemic, and putting in place a series of Covid-compliant
                measures to ensure the safety of everyone involved, the event
                will take place over three separate cycles with a reduced number
                of participants.
              </p>
              <p>
                The dates for the new cycles are:<br />
                2–10 August 2021 / 12–20 August 2021 / 22–30 August 2021.
              </p>
              <p>
                Each cycle will consist of six{" "}
                <strong>WORKSHOPS</strong>, run by architectural students and
                young professionals under the umbrella theme &lsquo;Poliklinika&rsquo;
                (polyclinic in English), focusing on healthcare and its relation
                to architecture. The workshops cover a wide spectrum of
                practices in architecture, from design and construction to
                theoretic research and conceptual art.
              </p>
            </div>
          </div>

          {/* Right: photo grid */}
          <div className="grid grid-cols-2 gap-2">
            {photos.slice(0, 4).map((p) => (
              <div key={p.src} className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Slavutych section */}
        <section id="program" className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="text-sm leading-relaxed space-y-4">
            <p>
              The location for SESAM 2021 Poliklinika is the city of{" "}
              <strong>SLAVUTYCH</strong>, a city built to rehouse the workers of
              the Chornobyl Nuclear Power Plant (CNPP) and their families, after
              being evacuated from Prypiat, following the explosion of the fourth
              reactor in 1986 — the worst nuclear catastrophe in history. The new
              city would not only provide dwellings to those who had been evicted
              from Prypiat, but also to heal them from the trauma they had
              experienced.
            </p>
            <p>
              As opposed to Prypiat, built to represent the quintessential
              &lsquo;atomic town&rsquo;, a nuclear energy centred city with a strong focus
              on industrialization, building technology, and densification,
              Slavutych was planned as an exemplary human-centered town nestled
              in the middle of the woods.
            </p>
            <p>
              The town was built in just 18 months through the collaboration of
              eight Soviet republics, each of which was responsible for erecting
              a district that then bore the name of its capital: Tallinn, Riga,
              Vilnius, Leningrad, Moscow, Tbilisi, Baku, Yerevan, Kyiv.
              Architects, masons, engineers, and designers from each of the
              republics came to build their respective districts, often with
              clear references to their own &lsquo;vernacular&rsquo; styles. Prefabricated
              concrete panels, wall paper, and window frames were also imported.
              It resulted in a beautiful mixture of different late-modernist
              styles, human scales, pedestrian friendly avenues, and the first
              cycling paths in the USSR.
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {photos.slice(4).map((p) => (
                <div key={p.src} className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <Image
              src="/images/sesam/map.png"
              alt="Map showing Slavutych, Chernobyl, Prypiat and Kyiv"
              width={460}
              height={600}
              className="w-full mt-4"
            />
          </div>
        </section>

        {/* Poliklinika theme */}
        <section id="faq" className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 border-t border-gray-200 pt-12">
          <div className="text-sm leading-relaxed space-y-4">
            <p>
              The theme for this year&apos;s SESAM,{" "}
              <strong>POLIKLINIKA</strong>, is focusing on healthcare, and its
              relation to architecture at the physical, methodological, and
              metaphorical levels. The theme aims to question the methods used in
              architectural practice to diagnose and prognose a &lsquo;problem&rsquo;. We
              propose three anatomic planes through which healthcare — maintenance
              or improvement of health — will be addressed during Poliklinika
              through workshops and other discursive exchanges: prophylaxis,
              diagnosis and therapy.
            </p>
            <p>
              SESAM 2021 Poliklinika is a part of Slavutych — Small Ukrainian
              Capital of Culture 2021 and is supported by the Ukrainian Cultural
              Foundation.
            </p>
          </div>
          <div className="flex items-start justify-center">
            <img
              src="/images/sesam/poster.gif"
              alt="SESAM 2021 Poliklinika poster"
              className="max-w-xs w-full"
            />
          </div>
        </section>

        {/* Supporters */}
        <section id="covid" className="mb-20 border-t border-gray-200 pt-12">
          <p className="text-xs tracking-widest uppercase mb-8 text-gray-500">Supported by</p>
          <div className="flex flex-wrap items-center gap-10 mb-12">
            {supporters.map((s) => (
              <img
                key={s.src}
                src={s.src}
                alt={s.alt}
                style={{ width: s.width }}
                className="object-contain opacity-90"
              />
            ))}
          </div>

          <p className="text-xs tracking-widest uppercase mb-8 text-gray-500">Media partners</p>
          <div className="flex flex-wrap items-center gap-10">
            {mediaPartners.map((p) => (
              <img
                key={p.src}
                src={p.src}
                alt={p.alt}
                style={{ width: p.width }}
                className="object-contain opacity-90"
              />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-gray-200 pt-12 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Image
                src="/images/sesam/easa-ukraine-logo.jpg"
                alt="EASA Ukraine"
                width={160}
                height={60}
                className="mb-6"
              />
              <div className="text-sm leading-relaxed space-y-2">
                <p className="font-medium">EASA Ukraine NGO</p>
                <p>01033 Kyiv, Ukraine</p>
                <p>easaukraine[at]gmail.com</p>
              </div>
            </div>
            <div className="text-sm leading-relaxed text-gray-700">
              <p>
                EASA Ukraine is a non-profit independent organization that
                promotes informal peer-to-peer education in the field of
                architecture and urban planning and is a national chamber of the
                global community of the European Architectural Student Assembly.
                EASA Ukraine was registered as an NGO in 2019 to organize the
                first major event — SESAM 2021 Poliklinika.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
