const cases = [
  {
    client: "紀伊國屋書店様",
    title: "大型旗艦店での児童書フェアをトータルプロデュース",
    result: "前年比+135%の売上を達成",
    description:
      "フェアテーマ設計から販促物制作、SNS施策まで一貫してサポート。現場スタッフとの綿密な連携で来店体験を高めました。",
  },
  {
    client: "出版社A社様",
    title: "創刊50周年記念キャンペーンの全国展開",
    result: "全国500店舗での横断展開を実現",
    description:
      "特設什器やノベルティ施策、オンライン施策を組み合わせ、周年の世界観を統一的に訴求。ブランド価値向上に寄与しました。",
  },
];

export function CasesSection() {
  return (
    <section id="cases" className="mx-auto mt-32 max-w-[1080px] px-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs tracking-[0.32em] text-brand-green">CASE STUDY</p>
          <h2 className="mt-4 text-3xl font-semibold text-brand-navy">信頼と成果で築くパートナーシップ</h2>
        </div>
        <a href="#contact" className="text-sm font-semibold text-brand-green">すべての事例を見る →</a>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {cases.map((item) => (
          <article key={item.title} className="flex h-full flex-col overflow-hidden rounded-[32px] bg-white shadow-soft">
            <div className="h-48 bg-gradient-to-r from-brand-green/20 via-brand-yellow/10 to-transparent" />
            <div className="flex flex-1 flex-col gap-4 p-8">
              <p className="text-xs tracking-[0.3em] text-neutral-400">{item.client}</p>
              <h3 className="text-xl font-semibold text-brand-navy">{item.title}</h3>
              <p className="text-sm font-semibold text-brand-green">{item.result}</p>
              <p className="flex-1 text-sm leading-7 text-neutral-600">{item.description}</p>
              <button className="self-start text-sm font-semibold text-brand-green">詳しく見る</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
