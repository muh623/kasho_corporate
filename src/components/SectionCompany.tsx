import Link from 'next/link'

const DATA = [
  {
    label: '設立',
    value: '1970年10月',
  },
  {
    label: '従業員数',
    value: '約240名',
  },
  {
    label: '主要取引先',
    value: '全国主要書店・各出版社・流通会社',
  },
]

const SERVICES = [
  '小学館刊行物の販促・営業支援',
  '雑誌・書籍の増刷調整および売上分析',
  '店頭イベント・フェアの企画運営',
  '販促物・SPツールの制作',
]

export default function SectionCompany() {
  return (
    <section className="bg-neutral-900 py-24 text-white">
      <div className="mx-auto grid max-w-[var(--content-w)] grid-cols-[260px_1fr] gap-16 px-6">
        <header>
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">COMPANY</p>
          <h2 className="mt-6 text-[36px] font-semibold leading-tight">
            小学館グループの総合力で、
            <br />出版流通を支えます。
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-white/70">
            事業領域や会社概要、沿革などの詳細情報は会社情報ページからご覧いただけます。社外のパートナー企業と連携した幅広いソリューションを提供しています。
          </p>
          <Link
            href="/company/"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-sm font-semibold transition hover:border-white hover:bg-white hover:text-neutral-900"
          >
            会社情報を詳しく見る
            <span aria-hidden>›</span>
          </Link>
        </header>

        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-4 rounded-[22px] ring-1 ring-neutral-200 bg-white/10 p-8 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white">会社概要</h3>
            <dl className="space-y-4 text-sm text-white/80">
              {DATA.map((item) => (
                <div key={item.label} className="flex items-baseline justify-between gap-4">
                  <dt className="text-white/60">{item.label}</dt>
                  <dd className="text-right text-base font-semibold text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col gap-4 rounded-[22px] ring-1 ring-neutral-200 bg-white/10 p-8 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white">主なサービス</h3>
            <ul className="space-y-3 text-sm text-white/80">
              {SERVICES.map((service) => (
                <li key={service} className="flex items-center gap-3">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[#F38B1A]" aria-hidden />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
