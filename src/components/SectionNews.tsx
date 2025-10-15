import Link from 'next/link'

const NEWS = [
  {
    date: '2024.10.15',
    category: 'イベント',
    title: '「本の未来フェス2024」に出展しました',
  },
  {
    date: '2024.09.20',
    category: 'お知らせ',
    title: '年末年始の営業時間について',
  },
  {
    date: '2024.08.08',
    category: '採用',
    title: '2025年度 新卒採用エントリー受付開始',
  },
]

export default function SectionNews() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[var(--content-w)] px-6">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">NEWS</p>
            <h2 className="mt-4 text-[36px] font-semibold leading-snug text-neutral-900">最新情報</h2>
          </div>
          <Link
            href="/news/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1FAA7B] underline decoration-[#F38B1A]/60 underline-offset-4 hover:decoration-[#F38B1A]"
          >
            お知らせ一覧へ
            <span aria-hidden>›</span>
          </Link>
        </header>

        <div className="mt-10 space-y-4">
          {NEWS.map((item) => (
            <Link
              key={item.title}
              href="/news/"
              className="flex items-center justify-between rounded-[18px] bg-white px-6 py-5 shadow-soft ring-1 ring-neutral-200 transition hover:bg-neutral-50"
            >
              <div className="flex items-center gap-4">
                <div className="text-sm font-semibold text-neutral-900">{item.date}</div>
                <span className="inline-flex items-center rounded-full bg-[#1FAA7B]/10 px-3 py-1 text-xs font-semibold text-[#1FAA7B]">
                  {item.category}
                </span>
                <p className="text-sm text-neutral-700">{item.title}</p>
              </div>
              <span className="text-lg text-[#1FAA7B]" aria-hidden>
                ›
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
