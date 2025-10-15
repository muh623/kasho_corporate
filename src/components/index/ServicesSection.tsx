import Image from "next/image";

const services = [
  {
    title: "全国営業ネットワーク",
    description:
      "全国の書店様へ直接伺い、売場ごとの課題に応じた棚づくりや販促施策をご提案します。出版社様の思いを確実に届けるための情報連携もワンストップで対応。",
    icon: "globe.svg",
  },
  {
    title: "プロモーション企画",
    description:
      "フェア・キャンペーン・POP制作など、リアルとデジタルを掛け合わせた企画を多数展開。読者に届く導線を丁寧にデザインし、売上最大化を支援します。",
    icon: "window.svg",
  },
  {
    title: "受託出版・制作",
    description:
      "出版物の企画立案から編集・制作・製造までを一気通貫でサポート。小学館グループの知見とクオリティで、ブランド価値を高めるコンテンツを共創します。",
    icon: "file.svg",
  },
];

function ServiceIcon({ icon }: { icon: string }) {
  return (
    <span className="relative h-12 w-12">
      <Image src={`/${icon}`} alt="" fill sizes="48px" className="object-contain" />
    </span>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto mt-32 max-w-[1080px] px-6">
      <div className="flex items-baseline justify-between gap-6">
        <div>
          <p className="text-xs tracking-[0.32em] text-brand-green">SERVICE</p>
          <h2 className="mt-4 text-3xl font-semibold text-brand-navy">書店と読者を近づける多様なソリューション</h2>
        </div>
        <a
          href="#contact"
          className="hidden rounded-full border border-brand-green px-6 py-2 text-sm font-medium text-brand-green transition hover:bg-brand-green hover:text-white md:inline-flex"
        >
          事例資料をみる
        </a>
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="group flex flex-col rounded-[28px] bg-white p-8 shadow-lg shadow-brand-green/5 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
              <ServiceIcon icon={service.icon} />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-brand-navy">{service.title}</h3>
            <p className="mt-4 flex-1 text-sm leading-7 text-neutral-600">{service.description}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-green">
              もっと詳しく
              <span aria-hidden>→</span>
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
