import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Як влаштована EASA Ukraine",
  description:
    "Національні контакти, ГО EASA Ukraine, використання бренду та принципи роботи спільноти.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black font-body">
      <div className="max-w-2xl mx-auto px-8 py-16">
        <h1 className="text-2xl font-medium mb-16 tracking-tight">
          Як влаштована EASA Ukraine
        </h1>

        <section className="mb-12">
          <h2 className="text-xs tracking-widest uppercase text-gray-400 mb-4">
            Національні контакти (NCs)
          </h2>
          <p className="text-sm leading-relaxed">
            У кожній країні-членині EASA є Національні контакти (або Національні
            представники). Зазвичай їх двоє. Кожні 1–2 роки відбувається
            передача повноважень — неформально, за особистою ініціативою або
            пропозицією попереднього представника. Про це повідомляють у
            загальній міжнародній групі EASA — і все.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xs tracking-widest uppercase text-gray-400 mb-4">
            Обовʼязки представників (NCs)
          </h2>
          <ul className="text-sm leading-relaxed space-y-3 list-none">
            <li className="pl-4 border-l border-gray-200">
              Інформувати студентів-архітекторів в Україні про міжнародні події
              EASA та умови участі в них, в якості учасників, хелперів,
              тʼюторів, організаторів тощо
            </li>
            <li className="pl-4 border-l border-gray-200">
              Організовувати національний відбір на головну подію EASA — від
              кожної країни зазвичай може їхати не більше 8 учасників
            </li>
            <li className="pl-4 border-l border-gray-200">
              Бути присутніми на щорічному Зʼїзді національних представників —
              INCM, де через дебати та конкурс обирається країна, яка наступною
              прийматиме головну подію EASA, і де оголошується можливість
              проведення менших подій — SESAM
            </li>
            <li className="pl-4 border-l border-gray-200">
              Залучати національних архітекторів, митців та тʼюторів до участі в
              EASA Tutor Meetings.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xs tracking-widest uppercase text-gray-400 mb-4">
            ГО EASA Ukraine
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            Більшість національних спільнот EASA у світі не мають зареєстрованої
            юридичної особи — це переважно неформальний рух. Потреба в ній
            виникає, коли країна береться за організацію SESAM або перемагає в
            конкурсі на проведення головної EASA — щоб залучати гранти та
            офіційно збирати внески учасників.
          </p>
          <p className="text-sm leading-relaxed">
            ГО EASA Ukraine було зареєстровано в 2019 році для організації
            першої великої події — SESAM 2021 Poliklinika. Це інституційний
            капітал, який варто зберігати та розвивати.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xs tracking-widest uppercase text-gray-400 mb-4">
            Використання бренду
          </h2>
          <p className="text-sm leading-relaxed">
            Право погоджувати використання бренду та імені EASA Ukraine належить
            виключно Національним контактам. Будь-яка ініціатива, що
            використовує це імʼя, має щонайменше бути погоджена з ними.
            Національні контакти мають доступ до{" "}
            <a
              href="https://www.instagram.com/easa_ukraine/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              Instagram
            </a>
            ,{" "}
            <a
              href="https://www.facebook.com/EasaUkraine"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              Facebook
            </a>{" "}
            та пошти{" "}
            <a
              href="mailto:easaukraine@gmail.com"
              className="underline hover:no-underline"
            >
              easaukraine@gmail.com
            </a>
            . Звʼязатися з ними можна в будь-який час через сторінки EASA
            Ukraine в соцмережах або поштою.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-xs tracking-widest uppercase text-gray-400 mb-4">
            Спільнота
          </h2>
          <p className="text-sm leading-relaxed">
            Команда та спільнота EASA Ukraine не є формалізованими. Вони
            відкриті для всіх (здебільшого студентів архітекторів), хто хоче
            долучатися.
          </p>
        </section>

        <div className="border-t border-gray-100 pt-8">
          <a
            href="/"
            className="text-xs tracking-widest uppercase text-gray-400 hover:text-black transition-colors"
          >
            ← Головна
          </a>
        </div>
      </div>
    </main>
  );
}
