import Image from "next/image";
import Slideshow from "./components/Slideshow";

const easa2021Slides = [
  {
    src: "/images/carousel-1/0-1.jpg",
    caption:
      "EASA Ukraine is bidding to host EASA 2020. INCM Vitosha 2018, Bulgaria",
  },
  {
    src: "/images/carousel-1/0-2.jpg",
    caption:
      "Presenting SESAM 2020 Poliklinika at architectural festival CANactions. 2020, Kyiv",
  },
  {
    src: "/images/carousel-1/0-3.jpg",
    caption:
      "EASA presentation at the Kharkiv school of Architecture. Kharkiv, 2019",
  },
  {
    src: "/images/carousel-1/0-4.jpg",
    caption:
      "Award for Youth competition by CANactions — reserved place in Ukrainian team at EASA. Kyiv, 2019",
  },
  { src: "/images/carousel-1/0-5.jpg" },
  {
    src: "/images/carousel-1/0-6.jpg",
    caption: "Presenting EASA Ukraine at the CANactions festival. Kyiv, 2016",
  },
  { src: "/images/carousel-1/0-7.jpg" },
  { src: "/images/carousel-1/0-8.jpg" },
  { src: "/images/carousel-1/0-9.jpg" },
  {
    src: "/images/carousel-1/0-10.jpg",
    caption: "Meeting with architectural students in KNUCA. 2019, Kyiv.",
  },
];

const easaAssemblySlides = [
  { src: "/images/carousel-2/1-1.jpg" },
  {
    src: "/images/carousel-2/1-2.jpg",
    caption: "EASA 2019 Tourist. Villars-sur-Ollon, Switzerland",
  },
  {
    src: "/images/carousel-2/1-3.jpg",
    caption: "EASA 2017 Hospitality. Fredericia, Denmark",
  },
  {
    src: "/images/carousel-2/1-4.jpg",
    caption: "EASA 2015 Links. Valetta, Malta",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-body">
      {/* Hero */}
      <section className="flex justify-center pt-12 pb-14">
        <Image
          src="/images/hero.jpg"
          alt="EASA Ukraine"
          width={400}
          height={400}
          priority
          className="block"
        />
      </section>

      {/* Main two-column section */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
          {/* LEFT: About */}
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              <strong>EASA Ukraine</strong> is a non-profit independent
              organization, that promotes informal peer-to-peer education in the
              field of architecture and urban planning. EASA Ukraine is a
              national chamber of the global community of the European
              Architecture Student Assembly (EASA).
            </p>
            <p>
              Ukraine participates in EASA events since 2006. Every year, we
              make an open call to form a national team to take part in the
              Summer assembly. We also organize meetings with architectural
              students, promote the EASA community at universities and
              architectural festivals in Ukraine.
            </p>
            <p>
              As a part of EASA family, we are happily sharing its values and
              promote independent education, all forms of mutual help and
              bottom-up organizations.
            </p>
            <p>
              EASA Ukraine was registered as an NGO (Registration number
              43119870) in 2019 to organize SESAM 2021 Poliklinika and other
              events.
            </p>
            <p>
              We are always looking for like-minded partners and sponsors. If
              you have any form of collaboration in mind, please contact us:
            </p>

            {/* Contact */}
            <div className="pt-2">
              <p>easaukraine[at]gmail.com</p>
              <p className="mt-2">Follow us on social media:</p>
              <div className="flex items-center gap-3 mt-2">
                <a
                  href="https://www.facebook.com/EasaUkraine/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                  aria-label="Facebook"
                >
                  <Image
                    src="/images/facebook.png"
                    alt="Facebook"
                    width={22}
                    height={22}
                  />
                </a>
                <a
                  href="https://www.instagram.com/easaukraine/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                  aria-label="Instagram"
                >
                  <Image
                    src="/images/instagram.png"
                    alt="Instagram"
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: SESAM 2021 */}
          <div>
            <a
              href="https://sesam2021ukraine.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-6 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/SESAM POLIKLINIKA.png"
                alt="SESAM 2021 POLIKLINIKA"
                width={987}
                height={340}
              />
            </a>

            <div className="flex flex-col items-start gap-4 mb-5">
              <a
                href="https://sesam2021ukraine.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/sesam-logo.gif"
                  alt="SESAM 2021"
                  width={89}
                  height={89}
                  unoptimized
                />
              </a>
              <div className="text-sm leading-relaxed space-y-3">
                <p>
                  This summer, around 100 architecture students and young
                  professionals from Europe (and beyond) will come to Slavutych,
                  Northern Ukraine, to participate in SESAM 2021 — Poliklinika.
                  After postponing the event for a year due to the global
                  pandemic, the event will take place over three separate cycles
                  with a reduced number of participants.
                </p>
                <p>
                  The dates for the new cycles are: <br />
                  2–10 August 2021 / 12–20 August 2021 / 22–30 August 2021.
                </p>
                <p>
                  Each cycle will consist of around five{" "}
                  <a
                    href="https://sesam2021ukraine.com/workshops/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:no-underline"
                  >
                    WORKSHOPS
                  </a>
                  , run by architectural students and young professionals under
                  the umbrella theme &lsquo;Poliklinika&rsquo; (polyclinic in
                  English), focusing on healthcare and its relation to
                  architecture.
                </p>
              </div>
            </div>

            <div className="text-sm leading-relaxed space-y-3">
              <p>
                <a
                  href="https://www.google.com/maps/place/Slavutych"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline hover:no-underline"
                >
                  SLAVUTYCH
                </a>{" "}
                was purposely built to rehouse workers of the Chornobyl Nuclear
                Power Plant (CNPP) after the explosion of the fourth reactor in
                1986 — the worst nuclear catastrophe in history. The town was
                built in 1987 in record time by eight Soviet republics, each
                responsible for building a district: Tallinn, Riga, Vilnius,
                Leningrad, Moscow, Tbilisi, Baku, Yerevan, Kyiv.
              </p>
              <p>
                The building of <strong>POLIKLINIKA</strong> (polyclinic in
                English) shut its doors in 2014. It is now an abandoned ruin in
                the heart of the city. Once a prime example of late modernist
                architecture, it was designed to heal the psychological and
                physical trauma of those affected by the radioactive cloud. We
                are going to use Poliklinika as a base of operations for SESAM
                2021.
              </p>
            </div>
          </div>
        </div>

        {/* Slideshows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 mt-14">
          <Slideshow slides={easa2021Slides} />
          <div className="flex flex-col justify-between gap-6">
            <div className="flex justify-center">
              <Image
                src="/images/easa-logo.gif"
                alt="EASA"
                width={185}
                height={155}
                unoptimized
                className="opacity-80"
              />
            </div>
            <Slideshow slides={easaAssemblySlides} />
          </div>
        </div>

        {/* Glossary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mt-14 border-t border-gray-200 pt-10">
          <div className="text-sm leading-relaxed space-y-3">
            <p>
              <strong>EASA</strong>: European Architecture Students Assembly
            </p>
            <p>
              EASA is an educational platform connecting students and
              professionals within the discipline of architectural construction
              and thought across Europe. Founded in 1981, it exists as a
              decentralized organisation ruled through its national
              representatives, who are all equal in rights and located
              throughout the continent. EASA is organised by students for
              students, creating a unique educational platform where
              participants get to live a novel cultural experience.
            </p>
            <p>
              <a
                href="http://easanetwork.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                easanetwork.org
              </a>
            </p>
          </div>

          <div className="text-sm leading-relaxed space-y-3">
            <p>
              <strong>SESAM</strong>: Small European Students of Architecture
              Meeting
            </p>
            <p>
              SESAM is an overall name for all meetings, seminars and events
              within the EASA platform.
            </p>
          </div>
        </div>

        {/* Video */}
        <div className="mt-14 mb-16">
          <div className="max-w-lg">
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.youtube.com/embed/dPvBSU2lOaA"
                title="EASA Ukraine video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
