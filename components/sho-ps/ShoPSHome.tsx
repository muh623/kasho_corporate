'use client'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import { useRef, useState } from 'react'

type Slide = {
  key: string
  title: string
  sub1: string
  sub2: string
  image: string
  imageSp: string
  thumb: string
}

const SLIDES: Slide[] = [
  { key: 'create',   title: '考える', sub1: '本と売り場に', sub2: '最適な提案を',        image: '/assets/images/top/slide_create.webp',      imageSp: '/assets/images/top/slide_create_sp.webp',      thumb: '/assets/images/top/slide_create.webp' },
  { key: 'lineup',   title: '繋げる', sub1: '本の魅力が',   sub2: '輝くように',          image: '/assets/images/top/slide_line-up.webp',     imageSp: '/assets/images/top/slide_line-up_sp.webp',     thumb: '/assets/images/top/slide_line-up.webp' },
  { key: 'deliver',  title: '届ける', sub1: '本をお客様に', sub2: '書店様に想いを',       image: '/assets/images/top/slide_deliver.webp',     imageSp: '/assets/images/top/slide_deliver_sp.webp',     thumb: '/assets/images/top/slide_deliver.webp' },
  { key: 'visit',    title: '訪ねる', sub1: '信頼関係と',   sub2: '新たな発見のために',   image: '/assets/images/top/slide_visit.webp',       imageSp: '/assets/images/top/slide_visit_sp.webp',       thumb: '/assets/images/top/slide_visit.webp' },
  { key: 'invest',   title: '調べる', sub1: '最大限の効果を', sub2: '生むために',        image: '/assets/images/top/slide_investigate.webp', imageSp: '/assets/images/top/slide_investigate_sp.webp', thumb: '/assets/images/top/slide_investigate.webp' },
  { key: 'find',     title: '見出す', sub1: '声に耳を傾け', sub2: '確かな知見で',        image: '/assets/images/top/slide_find.webp',        imageSp: '/assets/images/top/slide_find_sp.webp',        thumb: '/assets/images/top/slide_find.webp' },
  { key: 'tell',     title: '伝える', sub1: '書店様と',     sub2: '作り手の架け橋として', image: '/assets/images/top/slide_tell.webp',        imageSp: '/assets/images/top/slide_tell_sp.webp',        thumb: '/assets/images/top/slide_tell.webp' }
]

// サムネの左右グループ（PC）
const LEFT_THUMBS  = ['tell', 'create', 'lineup'] as const
const RIGHT_THUMBS = ['visit', 'invest', 'find'] as const

/** ===== TOP MV ===== */
function TopMv() {
  const [playing, setPlaying] = useState(true)
  const mainRef = useRef<any>(null)

  const go = (key: string) => {
    const idx = SLIDES.findIndex((x) => x.key === key)
    mainRef.current?.splide?.go(idx)
  }
  const toggle = () => {
    const s = mainRef.current?.splide
    if (!s) return
    playing ? s.pause() : s.play()
    setPlaying(!playing)
  }

  return (
    <section className="mx-auto mt-8 max-w-[var(--content-w)] px-6">
      <div className="grid" style={{ gridTemplateColumns: '260px 1fr 120px', columnGap: 28 }}>
        {/* 左：縦サイド */}
        <aside className="pt-2">
          <div className="text-[24px] leading-[1.4]">
            <div>小学館</div>
            <div>パブリッシング・</div>
            <div>サービス</div>
          </div>
          <div className="mt-2 text-[11px] tracking-[0.24em] text-neutral-500">SHOGAKUKAN&nbsp;P.S</div>
          <div className="relative mt-3 h-4 w-44">
            <div className="absolute inset-x-0 top-0 h-[6px] rounded-full bg-brand-orange" />
            <div className="absolute left-1/2 top-[6px] h-[10px] w-24 -translate-x-1/2 rounded-b-[14px] bg-brand-green" />
          </div>

          <nav className="mt-6 space-y-3 text-[15px]">
            {[
              ['トップ','/'],
              ['事業紹介','/business/'],
              ['会社情報','/company/'],
              ['採用情報','/recruit/']
            ].map(([label, href]) => (
              <div key={href} className="flex items-center justify-between">
                <a href={href} className="hover:opacity-80">{label}</a>
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white">›</span>
              </div>
            ))}
            <div className="mt-4 space-y-2 text-[14px]">
              <div className="flex items-center gap-2">
                <span className="inline-block h-[14px] w-[18px] rounded bg-neutral-900" aria-hidden />
                <a href="/news/" className="underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-800">お知らせ</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative inline-block h-[14px] w-[18px] rounded bg-neutral-900" aria-hidden>
                  <span className="absolute left-[2px] top-[4px] h-[1.4px] w-[14px] bg-white" />
                </span>
                <a href="/contact/" className="underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-800">お問い合わせ</a>
              </div>
            </div>
          </nav>
        </aside>

        {/* 中央：赤枠（上：メイン画像 / 下：サムネ行） */}
        <div>
          <div className="card">
            {/* 上段：メイン Splide */}
            <div className="relative overflow-hidden rounded-t-[22px]">
              <Splide
                ref={mainRef}
                options={{ type: 'loop', autoplay: true, interval: 2800, pauseOnHover: true, arrows: false, pagination: false }}
                className="h-[520px]"
                aria-label="メインスライド"
              >
                {SLIDES.map((s) => (
                  <SplideSlide key={s.key}>
                    <div className="relative h-[520px] w-full">
                      <picture>
                        <source media="(max-width: 768px)" srcSet={s.imageSp} />
                        <img src={s.image} alt="" className="h-full w-full object-cover" />
                      </picture>

                      {/* 左上：白札×2（横並び）＋黒ラベル */}
                      <div className="absolute left-8 top-8 flex items-start gap-2">
                        <div className="flex gap-2">
                          <span className="v-rl rounded bg-white/95 px-2 py-1 text-[13px] shadow">{s.sub1}</span>
                          <span className="v-rl rounded bg-white/95 px-2 py-1 text-[13px] shadow">{s.sub2}</span>
                        </div>
                        <span className="v-rl rounded bg-neutral-900 px-2 py-1 text-[18px] font-medium text-white">{s.title}</span>
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>

            {/* 下段：サムネ行（左右3枚ずつ） */}
            <div className="flex items-end justify-between px-6 py-5">
              <div className="flex gap-4">
                {LEFT_THUMBS.map((k) => {
                  const s = SLIDES.find((x) => x.key === k)!
                  return (
                    <button key={k} className="group w-[120px] text-left" onClick={() => go(k)}>
                      <div className="relative h-[72px] overflow-hidden rounded-md ring-1 ring-black/5">
                        <img src={s.thumb} alt="" className="h-full w-full object-cover transition-opacity group-hover:opacity-100" />
                      </div>
                      <div className="mt-2 text-center text-[12px] text-neutral-500 group-hover:text-neutral-700">{s.title}</div>
                    </button>
                  )
                })}
              </div>
              <div className="flex gap-4">
                {RIGHT_THUMBS.map((k) => {
                  const s = SLIDES.find((x) => x.key === k)!
                  return (
                    <button key={k} className="group w-[120px] text-left" onClick={() => go(k)}>
                      <div className="relative h-[72px] overflow-hidden rounded-md ring-1 ring-black/5">
                        <img src={s.thumb} alt="" className="h-full w-full object-cover transition-opacity group-hover:opacity-100" />
                      </div>
                      <div className="mt-2 text-center text-[12px] text-neutral-500 group-hover:text-neutral-700">{s.title}</div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 右：縦書きコピー＋再生/一時停止（赤枠の外） */}
        <div className="relative">
          <h1 className="v-rl mt-2 text-[44px] font-medium leading-[1.25]">
            <span>人と本</span>
            <span className="mt-4 inline-block">出逢う瞬間を</span>
            <span className="mt-4 inline-block text-emerald-600">共に創る。</span>
          </h1>
          <div className="absolute bottom-5 right-0">
            <button onClick={toggle} className="flex items-center gap-2 rounded-md bg-white px-3 py-2 text-[13px] shadow ring-1 ring-neutral-200 hover:bg-white/90">
              <span className="inline-block w-3 text-center">{playing ? '‖' : '▶'}</span>
              <span>{playing ? '一時停止' : '再生'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/** ===== WHO WE ARE ===== */
function SectionWhoWeAre() {
  return (
    <section className="mt-24">
      <div className="mx-auto max-w-[var(--content-w)] px-6">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-7">
            <span className="block text-2xl tracking-[0.2em] text-neutral-400" aria-hidden>WHO WE ARE</span>
            <p className="mt-6 text-xl leading-relaxed">
              小学館が本に込めている想いを<br />書店や読者の皆様に伝え<br />人と本の出会いを創り出します。
            </p>
            <p className="mt-6 space-y-6 text-[15px] leading-8 text-neutral-700">
              <span className="block">
                私たちの仕事は、小学館の本と未来の読者になるであろう方々との接点を創ることです。<br />
                そのための手法はさまざまで、編集部や書店様、ときには読者の方々とコミュニケーションを取り、それぞれの想いを汲み取りながら試行錯誤しています。
              </span>
              <span className="block">
                ただ売場に本を並べるだけではなく、<br />
                その本と関連のあるグッズも一緒に並べて相乗効果を狙ったり水族館や美術館にも営業をかけて売り場を設けたりと、<br />
                ひらめいたアイデアを現実のものに変え、新たな出会いの場を創り出しています。
              </span>
            </p>
          </div>
          <div className="col-span-5">
            <div className="card p-6">
              <header>
                <p className="text-sm tracking-[.25em] text-neutral-500" aria-hidden>INTERVIEW</p>
                <h3 className="mt-2 text-xl font-semibold">代表の2人が想いを語ります。</h3>
              </header>
              <p className="mt-4 text-[15px] leading-7 text-neutral-700">
                小学館グループにおける小学館パブリッシング・サービスの役割や未来に向けての想いを代表取締役社長 井手と代表取締役 相賀が語ります。
              </p>
              <a href="/interview/" className="mt-4 inline-flex items-center gap-2 text-emerald-700 underline decoration-emerald-300 underline-offset-4 hover:decoration-emerald-700">
                代表対談はこちら <span aria-hidden className="inline-block rotate-180">➜</span>
              </a>
              <div className="mt-6">
                <picture>
                  <source media="(max-width: 768px)" srcSet="/assets/images/top/img_whoweare_dialogue_rectangle.webp" />
                  <img src="/assets/images/top/img_whoweare_dialogue_square.webp" alt="" className="h-auto w-[300px] rounded-md" loading="lazy" width={300} height={200} />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** ===== BUSINESS / POLICY ===== */
function SectionBranch() {
  return (
    <section className="mt-24">
      <div className="mx-auto max-w-[var(--content-w)] px-6">
        <div className="grid grid-cols-2 gap-8">
          <a href="/business/" className="group relative block overflow-hidden rounded-[22px]">
            <picture>
              <source media="(max-width: 768px)" srcSet="/assets/images/top/img_branch_business_sp.webp" />
              <img src="/assets/images/top/img_branch_business.webp" alt="" className="h-auto w-full object-cover" />
            </picture>
            <header className="absolute left-6 top-6 text-white drop-shadow">
              <p className="text-xs tracking-[.25em]" aria-hidden>OUR BUSINESS</p>
              <h2 className="text-2xl font-semibold">事業紹介</h2>
            </header>
            <p className="absolute bottom-6 left-6 text-xl text-white drop-shadow">
              <span className="block">人と本の出会いを</span><span className="block">創り出す</span>
            </p>
            <span aria-hidden className="absolute bottom-6 right-6 text-white transition-transform group-hover:translate-x-1">➜</span>
          </a>

          <a href="/policy/" className="group relative block overflow-hidden rounded-[22px]">
            <picture>
              <source media="(max-width: 768px)" srcSet="/assets/images/top/img_branch_policy_sp.webp" />
              <img src="/assets/images/top/img_branch_policy.webp" alt="" className="h-auto w-full object-cover" />
            </picture>
            <header className="absolute left-6 top-6 text-white drop-shadow">
              <p className="text-xs tracking-[.25em]" aria-hidden>OUR POLICY</p>
              <h2 className="text-2xl font-semibold">私たちが<br />大切にしていること</h2>
            </header>
            <p className="absolute bottom-6 left-6 text-xl text-white drop-shadow">
              <span className="block">あらゆる物事を通じて、</span><span className="block">出版物の魅力を伝える</span>
            </p>
            <span aria-hidden className="absolute bottom-6 right-6 text-white transition-transform group-hover:translate-x-1">➜</span>
          </a>
        </div>
      </div>
    </section>
  )
}

/** ===== COMPANY ===== */
function SectionCompany() {
  return (
    <section className="mt-24">
      <div className="mx-auto max-w-[var(--content-w)] items-center gap-10 px-6 md:grid md:grid-cols-2">
        <div>
          <header>
            <p className="text-xs tracking-[.25em] text-neutral-500" aria-hidden>COMPANY</p>
            <h2 className="mt-1 text-2xl font-semibold">企業情報</h2>
          </header>
          <div className="mt-6 space-y-4">
            <a href="/message/" className="group flex items-center justify-between rounded-xl border border-neutral-200 p-5 hover:bg-neutral-50">
              <div>
                <h3 className="text-lg font-medium">メッセージ</h3>
                <p className="mt-1 text-[15px] text-neutral-700">代表取締役社長 井手/代表取締役 相賀からのメッセージをご覧いただけます。</p>
              </div>
              <span aria-hidden className="text-neutral-400 transition-transform group-hover:translate-x-1">➜</span>
            </a>
            <a href="/company/" className="group flex items-center justify-between rounded-xl border border-neutral-200 p-5 hover:bg-neutral-50">
              <div>
                <h3 className="text-lg font-medium">会社概要</h3>
                <p className="mt-1 text-[15px] text-neutral-700">小学館P.Sの会社概要・アクセスマップ・沿革をご紹介します。</p>
              </div>
              <span aria-hidden className="text-neutral-400 transition-transform group-hover:translate-x-1">➜</span>
            </a>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <picture>
            <source media="(max-width: 768px)" srcSet="/assets/images/top/img_company_slide1_sp.webp" />
            <img src="/assets/images/top/img_company_slide1.webp" alt="" className="h-auto w-[450px] rounded-xl" loading="lazy" />
          </picture>
        </div>
      </div>
    </section>
  )
}

/** ===== RECRUIT ===== */
function SectionRecruit() {
  return (
    <section className="mt-24">
      <div className="mx-auto max-w-[var(--content-w)] px-0">
        <div className="px-6">
          <span className="block px-6 text-2xl tracking-[.2em] text-neutral-400" aria-hidden>RECRUIT</span>
        </div>
        <figure className="mt-6">
          <picture>
            <source media="(max-width: 768px)" srcSet="/assets/images/top/img_recruit_banner_sp.webp" />
            <img src="/assets/images/top/img_recruit_banner.webp" alt="" className="h-auto w-full" loading="lazy" />
          </picture>
        </figure>

        <div className="mx-auto mt-10 grid max-w-[var(--content-w)] grid-cols-12 gap-8 px-6">
          <div className="col-span-5">
            <h2 className="text-2xl font-semibold">採用情報</h2>
            <p className="mt-3 text-[15px] leading-8 text-neutral-700">
              小学館パブリッシング・サービスでは働きやすい環境で、一緒に本と人との出会いを創る、新しい仲間を募集しています。
            </p>
            <a href="/recruit/" className="mt-4 inline-flex items-center gap-2 text-emerald-700 underline decoration-emerald-300 underline-offset-4 hover:decoration-emerald-700">
              採用トップ <span aria-hidden className="inline-block rotate-180">➜</span>
            </a>
          </div>
          <div className="col-span-7">
            <div className="grid grid-cols-3 gap-4">
              {[
                ['/assets/images/top/icon_recruit_works.svg','仕事内容/部署紹介','/recruit/workstyle/'],
                ['/assets/images/top/icon_recruit_welfare.svg','福利厚生','/recruit/welfare/'],
                ['/assets/images/top/icon_recruit_number.svg','数字で見る','/recruit/data/']
              ].map(([src, label, href]) => (
                <a key={href} href={href!} className="group flex items-center justify-between rounded-xl border border-neutral-200 p-5 hover:bg-neutral-50">
                  <div className="flex items-center gap-3">
                    <img src={src!} alt="" width={25} height={25} />
                    <h3 className="text-[15px]">{label}</h3>
                  </div>
                  <span aria-hidden className="text-neutral-400 transition-transform group-hover:translate-x-1">➜</span>
                </a>
              ))}
            </div>
            <a href="/recruit/faq/" className="mt-4 inline-flex items-center gap-2 text-emerald-700 underline decoration-emerald-300 underline-offset-4 hover:decoration-emerald-700">
              よくある質問 <span aria-hidden className="inline-block rotate-180">➜</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/** ===== NEWS ===== */
const NEWS = [
  {
    href: 'https://www.sho-ps.co.jp/news/recruit-2025-06-ended/',
    thumb: 'https://www.sho-ps.co.jp/news/wp-content/uploads/2025/06/thumbnail_common.webp',
    category: 'お知らせ',
    date: '2025.06.13',
    title: 'パートタイム勤務者募集を終了しました'
  },
  {
    href: 'https://www.sho-ps.co.jp/news/recruit-2025-06/',
    thumb: 'https://www.sho-ps.co.jp/news/wp-content/uploads/2024/08/img_recruit_banner-scaled.webp',
    category: 'お知らせ',
    date: '2025.06.02',
    title: 'パートタイム勤務者募集を開始しました'
  },
  {
    href: 'https://www.sho-ps.co.jp/news/recruit-2025-ended/',
    thumb: '/assets/images/news/thumbnail_common.webp',
    category: 'お知らせ',
    date: '2025.05.02',
    title: '2025年度 採用募集終了しました'
  }
]

function SectionNews() {
  return (
    <section className="mt-24">
      <div className="mx-auto max-w-[var(--content-w)] px-6">
        <header>
          <p className="text-xs tracking-[.25em] text-neutral-500" aria-hidden>NEWS</p>
          <h2 className="mt-1 text-2xl font-semibold">最新のお知らせ</h2>
        </header>
        <div className="mt-6 grid grid-cols-3 gap-6">
          {NEWS.map((n) => (
            <article key={n.href} className="card">
              <a href={n.href} className="block">
                <div className="flex items-start justify-between p-4">
                  <figure className="shrink-0">
                    <img src={n.thumb} alt="" width={312} height={208} className="h-[124px] w-[186px] rounded-md object-cover" />
                  </figure>
                  <header className="ml-4 mt-1 text-right">
                    <p className="text-sm text-neutral-600">{n.category}</p>
                    <p className="text-xs text-neutral-500">{n.date}</p>
                  </header>
                </div>
                <h3 className="px-4 pb-4 text-[16px] leading-7">{n.title}</h3>
              </a>
            </article>
          ))}
        </div>
        <a href="/news/" className="mt-6 inline-flex items-center gap-2 text-emerald-700 underline decoration-emerald-300 underline-offset-4 hover:decoration-emerald-700">
          全てのニュース <span aria-hidden className="inline-block rotate-180">➜</span>
        </a>
      </div>
    </section>
  )
}

export default function ShoPSHome() {
  return (
    <>
      <TopMv />
      <SectionWhoWeAre />
      <SectionBranch />
      <SectionCompany />
      <SectionRecruit />
      <SectionNews />
    </>
  )
}
