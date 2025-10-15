const news = [
  {
    date: "2025.03.18",
    title: "ゴールデンウィーク期間の物流体制について",
  },
  {
    date: "2025.02.05",
    title: "児童書棚づくりセミナー@東京を開催しました",
  },
  {
    date: "2025.01.24",
    title: "『春の学習応援フェア』参画書店を募集",
  },
];

const recruitPoints = [
  "書店の課題を解決するプランニング力",
  "デジタルツールと現場をつなぐDX推進",
  "想いを届ける提案営業・クリエイティブ",
];

export function NewsRecruitSection() {
  return (
    <section id="news" className="mx-auto mt-32 max-w-[1080px] px-6">
      <div className="grid gap-10 lg:grid-cols-[1.15fr,0.85fr]">
        <div className="rounded-[28px] bg-white p-10 shadow-lg shadow-black/5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs tracking-[0.32em] text-brand-green">NEWS</p>
              <h2 className="mt-4 text-2xl font-semibold text-brand-navy">お知らせ</h2>
            </div>
            <a href="#" className="text-sm font-semibold text-brand-green">一覧を見る →</a>
          </div>
          <ul className="mt-8 space-y-6">
            {news.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <span className="text-xs font-semibold tracking-[0.28em] text-neutral-400">{item.date}</span>
                <a className="flex-1 text-sm leading-7 text-brand-navy transition hover:text-brand-green" href="#">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div id="recruit" className="flex flex-col justify-between rounded-[28px] bg-gradient-to-br from-brand-green via-brand-green/90 to-brand-navy p-10 text-white">
          <div>
            <p className="text-xs tracking-[0.32em] text-brand-yellow/80">RECRUIT</p>
            <h2 className="mt-4 text-2xl font-semibold">仲間と共に出版の未来を拓く</h2>
            <p className="mt-6 text-sm leading-7 text-white/80">
              書店・出版社・読者を結ぶハブとして、出版業界の新しい挑戦に取り組む仲間を募集しています。
              全国各地の現場で培った知見を活かし、チームで成果を創出しましょう。
            </p>
          </div>
          <ul className="mt-6 space-y-3 text-sm">
            {recruitPoints.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-brand-yellow" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-green transition hover:bg-brand-yellow hover:text-brand-navy"
          >
            採用情報をみる
          </a>
        </div>
      </div>
    </section>
  );
}
