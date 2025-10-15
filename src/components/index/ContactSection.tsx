export function ContactSection() {
  return (
    <section id="contact" className="mx-auto mt-32 max-w-[1080px] px-6 pb-32">
      <div className="relative overflow-hidden rounded-[32px] bg-white px-10 py-16 shadow-soft">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-green/10" aria-hidden />
        <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-brand-yellow/20" aria-hidden />
        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-6">
            <p className="text-xs tracking-[0.32em] text-brand-green">CONTACT</p>
            <h2 className="text-3xl font-semibold text-brand-navy">書店・出版社の皆さまへ</h2>
            <p className="text-sm leading-7 text-neutral-600">
              施策のご相談、協業のご提案、採用に関するお問い合わせなど、お気軽にお寄せください。
              専任スタッフが丁寧にヒアリングし、最適なソリューションをご案内します。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:info@sho-ps.co.jp"
              className="group flex flex-col gap-2 rounded-2xl border border-brand-green/30 bg-brand-green/5 px-6 py-5 text-brand-navy transition hover:border-brand-green hover:bg-brand-green/10"
            >
              <span className="text-xs tracking-[0.3em] text-brand-green/80">FOR BUSINESS</span>
              <span className="text-lg font-semibold">法人のお客様</span>
              <span className="text-sm text-neutral-600 group-hover:text-brand-green">info@sho-ps.co.jp</span>
            </a>
            <a
              href="mailto:recruit@sho-ps.co.jp"
              className="group flex flex-col gap-2 rounded-2xl border border-brand-green/30 bg-brand-green/5 px-6 py-5 text-brand-navy transition hover:border-brand-green hover:bg-brand-green/10"
            >
              <span className="text-xs tracking-[0.3em] text-brand-green/80">FOR RECRUIT</span>
              <span className="text-lg font-semibold">採用について</span>
              <span className="text-sm text-neutral-600 group-hover:text-brand-green">recruit@sho-ps.co.jp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
