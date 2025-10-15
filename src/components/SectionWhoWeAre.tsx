const VALUES = [
  {
    title: '書店様とのパートナーシップ',
    body: '全国の書店様と密接に連携し、現場の声を丁寧に受け止めながら売り場の最適化を図ります。地域や店舗ごとの課題に合わせた提案で、本が届く瞬間を支えています。',
  },
  {
    title: 'コンテンツの価値を高める編集力',
    body: '小学館グループの豊富なコンテンツを起点に、販促施策やイベント企画を一貫して実行。読者に寄り添った体験を設計し、作品の魅力を最大限に引き出します。',
  },
  {
    title: 'データドリブンな提案力',
    body: '市場動向や販売データを横断的に分析し、書籍の届け方を常にアップデート。確かな知見をもとに、次のヒットを生み出す打ち手をともに考えます。',
  },
]

export default function SectionWhoWeAre() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto flex max-w-[var(--content-w)] items-start gap-16 px-6">
        <header className="w-[260px] pt-4">
          <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">WHO WE ARE</p>
          <h2 className="mt-6 text-[36px] font-semibold leading-tight text-neutral-900">
            私たちは、本と読者の未来を<br />
            つなぐコミュニケーションを<br />
            デザインしています。
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-neutral-600">
            小学館パブリッシング・サービスは、書店様と出版社をつなぐ専門チームです。現場に寄り添いながら販促・営業・編集機能を統合し、本が読者に届くまでの体験を設計しています。
          </p>
        </header>
        <div className="grid flex-1 grid-cols-3 gap-6">
          {VALUES.map((item) => (
            <article key={item.title} className="card flex flex-col gap-4 p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
