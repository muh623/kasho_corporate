const steps = [
  {
    title: "分析",
    detail: "POSデータやエリア特性をもとに売場課題を可視化し、最適な商品構成と販促軸を設定。",
  },
  {
    title: "提案",
    detail: "書店様と出版社様双方の目的を叶えるプランを設計。施策ごとのKPIまでご提案します。",
  },
  {
    title: "実行",
    detail: "販促物制作、フェア展開、SNS連動など現場実行をリード。店舗スタッフ研修もサポート。",
  },
  {
    title: "検証",
    detail: "施策効果を数値で振り返り、PDCAを高速に回して次の成長へつなげます。",
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="relative mt-32 bg-brand-navy/95 py-24 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent" aria-hidden />
      <div className="mx-auto flex max-w-[1080px] flex-col gap-16 px-6 lg:flex-row">
        <div className="lg:w-2/5">
          <p className="text-xs tracking-[0.32em] text-brand-yellow/80">VALUE CHAIN</p>
          <h2 className="mt-6 text-3xl font-semibold leading-relaxed">
            書籍の価値を最大化する
            <span className="block text-brand-yellow">エンドツーエンドの支援体制</span>
          </h2>
          <p className="mt-6 text-sm leading-7 text-white/80">
            出版社様の商品開発段階から関わり、プロモーション、物流、販売状況のフィードバックまで一貫して伴走。
            横断的なデータと現場の声をつなぐことで、次のヒットづくりまでを見据えたサイクルを実現します。
          </p>
        </div>
        <div className="grid flex-1 gap-6 sm:grid-cols-2">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm font-semibold tracking-[0.4em] text-brand-yellow/80">STEP {index + 1}</div>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/80">{step.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
