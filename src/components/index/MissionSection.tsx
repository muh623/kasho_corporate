export function MissionSection() {
  return (
    <section id="mission" className="mx-auto mt-32 max-w-[1080px] px-6">
      <div className="grid gap-12 rounded-[32px] bg-white p-12 shadow-soft shadow-black/5 md:grid-cols-[1fr,0.9fr]">
        <div className="space-y-6">
          <p className="text-xs tracking-[0.32em] text-brand-green">OUR MISSION</p>
          <h2 className="text-3xl font-semibold leading-relaxed text-brand-navy">
            本と人の幸福な出会いをデザインし、<br className="hidden md:block" />
            出版ビジネスの未来を切り拓きます。
          </h2>
          <p className="leading-8 text-neutral-600">
            小学館パブリッシング・サービスは、書店様と出版社・読者の価値を最適なかたちでつなぎ、
            出版の循環を支える専門家集団です。全国の売場を熟知した営業力と、データ分析に基づく販促企画、
            そして現場に寄り添うきめ細やかなサポートで、書籍との出会いをさらに豊かに広げていきます。
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-brand-navy">
            {[
              "全国1,200書店への流通ネットワーク",
              "年間3,000本を超える販促施策",
              "デジタル×リアルの融合支援",
            ].map((pill) => (
              <span key={pill} className="rounded-full border border-brand-green/30 bg-brand-green/5 px-4 py-2">
                {pill}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-4 rounded-[28px] bg-gradient-to-br from-brand-green/20 via-brand-yellow/10 to-white" />
          <div className="relative h-full rounded-[28px] border border-white/60 bg-[url('/sample.webp')] bg-cover bg-center shadow-[0_25px_80px_rgba(15,123,92,0.15)]" />
        </div>
      </div>
    </section>
  );
}
