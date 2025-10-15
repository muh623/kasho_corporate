function SectionWhoWeAre() {
  return (
    <section className="mt-24">
      <div className="mx-auto max-w-[var(--content-w)] px-6">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-7">
            <span className="block text-2xl tracking-[0.2em] text-neutral-400" aria-hidden>
              WHO WE ARE
            </span>
            <p className="mt-6 text-xl leading-relaxed">
              小学館が本に込めている想いを
              <br />
              書店や読者の皆様に伝え
              <br />
              人と本の出会いを創り出します。
            </p>
            <p className="mt-6 space-y-6 text-[15px] leading-8 text-neutral-700">
              <span className="block">
                私たちの仕事は、小学館の本と未来の読者になるであろう方々との接点を創ることです。
                <br />
                そのための手法はさまざまで、編集部や書店様、ときには読者の方々とコミュニケーションを取り、それぞれの想いを汲み取りながら試行錯誤しています。
              </span>
              <span className="block">
                ただ売場に本を並べるだけではなく、
                <br />
                その本と関連のあるグッズも一緒に並べて相乗効果を狙ったり水族館や美術館にも営業をかけて売り場を設けたりと、
                <br />
                ひらめいたアイデアを現実のものに変え、新たな出会いの場を創り出しています。
              </span>
            </p>
          </div>
          <div className="col-span-5">
            <div className="card p-6">
              <header>
                <p className="text-sm tracking-[.25em] text-neutral-500" aria-hidden>
                  INTERVIEW
                </p>
                <h3 className="mt-2 text-xl font-semibold">代表の2人が想いを語ります。</h3>
              </header>
              <p className="mt-4 text-[15px] leading-7 text-neutral-700">
                小学館グループにおける小学館パブリッシング・サービスの役割や未来に向けての想いを代表取締役社長 井手と代表取締役 相賀が語ります。
              </p>
              <a
                href="/interview/"
                className="mt-4 inline-flex items-center gap-2 text-emerald-700 underline decoration-emerald-300 underline-offset-4 hover:decoration-emerald-700"
              >
                代表対談はこちら <span aria-hidden className="inline-block rotate-180">➜</span>
              </a>
              <div className="mt-6">
                <picture>
                  <source media="(max-width: 768px)" srcSet="/assets/images/top/img_whoweare_dialogue_rectangle.webp" />
                  <img
                    src="/assets/images/top/img_whoweare_dialogue_square.webp"
                    alt=""
                    className="h-auto w-[300px] rounded-md"
                    loading="lazy"
                    width={300}
                    height={200}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

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
              <p className="text-xs tracking-[.25em]" aria-hidden>
                OUR BUSINESS
              </p>
              <h2 className="text-2xl font-semibold">事業紹介</h2>
            </header>
            <p className="absolute bottom-6 left-6 text-xl text-white drop-shadow">
              <span className="block">人と本の出会いを</span>
              <span className="block">創り出す</span>
            </p>
            <span aria-hidden className="absolute bottom-6 right-6 text-white transition-transform group-hover:translate-x-1">
              ➜
            </span>
          </a>

          <a href="/policy/" className="group relative block overflow-hidden rounded-[22px]">
            <picture>
              <source media="(max-width: 768px)" srcSet="/assets/images/top/img_branch_policy_sp.webp" />
              <img src="/assets/images/top/img_branch_policy.webp" alt="" className="h-auto w-full object-cover" />
            </picture>
            <header className="absolute left-6 top-6 text-white drop-shadow">
              <p className="text-xs tracking-[.25em]" aria-hidden>
                OUR POLICY
              </p>
              <h2 className="text-2xl font-semibold">
                私たちが
                <br />
                大切にしていること
              </h2>
            </header>
            <p className="absolute bottom-6 left-6 text-xl text-white drop-shadow">
              <span className="block">あらゆる物事を通じて、</span>
              <span className="block">出版物の魅力を伝える</span>
            </p>
            <span aria-hidden className="absolute bottom-6 right-6 text-white transition-transform group-hover:translate-x-1">
              ➜
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

function SectionCompany() {
  return (
    <section className="mt-24">
      <div className="mx-auto max-w-[var(--content-w)] items-center gap-10 px-6 md:grid md:grid-cols-2">
        <div>
          <header>
            <p className="text-xs tracking-[.25em] text-neutral-500" aria-hidden>
              COMPANY
            </p>
            <h2 className="mt-1 text-2xl font-semibold">企業情報</h2>
          </header>
          <div className="mt-6 space-y-4">
            <a
              href="/message/"
              className="group flex items-center justify-between rounded-xl border border-neutral-200 p-5 hover:bg-neutral-50"
            >
              <div>
                <h3 className="text-lg font-medium">メッセージ</h3>
                <p className="mt-1 text-[15px] text-neutral-700">
                  代表取締役社長 井手/代表取締役 相賀からのメッセージをご覧いただけます。
                </p>
              </div>
              <span aria-hidden className="text-neutral-400 transition-transform group-hover:translate-x-1">➜</span>
            </a>
            <a
              href="/company/"
              className="group flex items-center justify-between rounded-xl border border-neutral-200 p-5 hover:bg-neutral-50"
            >
              <div>
                <h3 className="text-lg font-medium">会社概要</h3>
                <p className="mt-1 text-[15px] text-neutral-700">
                  小学館P.Sの会社概要・アクセスマップ・沿革をご紹介します。
                </p>
              </div>
              <span aria-hidden className="text-neutral-400 transition-transform group-hover:translate-x-1">➜</span>
            </a>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <picture>
            <source media="(max-width: 768px)" srcSet="/assets/images/top/img_company_slide1_sp.webp" />
            <img
              src="/assets/images/top/img_company_slide1.webp"
              alt=""
              className="h-auto w-[450px] rounded-xl"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </section>
  )
}

const RECRUIT_LINKS = [
  ['/assets/images/top/icon_recruit_works.svg', '仕事内容/部署紹介', '/recruit/workstyle/'],
  ['/assets/images/top/icon_recruit_welfare.svg', '福利厚生', '/recruit/welfare/'],
  ['/assets/images/top/icon_recruit_number.svg', '数字で見る', '/recruit/data/'],
] as const

function SectionRecruit() {
  return (
    <section className="mt-24">
      <div className="mx-auto max-w-[var(--content-w)] px-0">
        <div className="px-6">
          <span className="block px-6 text-2xl tracking-[.2em] text-neutral-400" aria-hidden>
            RECRUIT
          </span>
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
            <a
              href="/recruit/"
              className="mt-4 inline-flex items-center gap-2 text-emerald-700 underline decoration-emerald-300 underline-offset-4 hover:decoration-emerald-700"
            >
              採用トップ <span aria-hidden className="inline-block rotate-180">➜</span>
            </a>
          </div>
          <div className="col-span-7">
            <div className="grid grid-cols-3 gap-4">
              {RECRUIT_LINKS.map(([src, label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="group flex items-center justify-between rounded-xl border border-neutral-200 p-5 hover:bg-neutral-50"
                >
                  <div className="flex items-center gap-3">
                    <img src={src} alt="" width={25} height={25} />
                    <h3 className="text-[15px]">{label}</h3>
                  </div>
                  <span aria-hidden className="text-neutral-400 transition-transform group-hover:translate-x-1">➜</span>
                </a>
              ))}
            </div>
            <a
              href="/recruit/faq/"
              className="mt-4 inline-flex items-center gap-2 text-emerald-700 underline decoration-emerald-300 underline-offset-4 hover:decoration-emerald-700"
            >
              よくある質問 <span aria-hidden className="inline-block rotate-180">➜</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const NEWS = [
  {
    href: 'https://www.sho-ps.co.jp/news/recruit-2025-06-ended/',
    thumb: 'https://www.sho-ps.co.jp/news/wp-content/uploads/2025/06/thumbnail_common.webp',
    category: 'お知らせ',
    date: '2025.06.13',
    title: 'パートタイム勤務者募集を終了しました',
  },
  {
    href: 'https://www.sho-ps.co.jp/news/recruit-2025-06/',
    thumb: 'https://www.sho-ps.co.jp/news/wp-content/uploads/2024/08/img_recruit_banner-scaled.webp',
    category: 'お知らせ',
    date: '2025.06.02',
    title: 'パートタイム勤務者募集を開始しました',
  },
  {
    href: 'https://www.sho-ps.co.jp/news/recruit-2025-ended/',
    thumb: '/assets/images/news/thumbnail_common.webp',
    category: 'お知らせ',
    date: '2025.05.02',
    title: '2025年度 採用募集終了しました',
  },
] as const

function SectionNews() {
  return (
    <section className="mt-24">
      <div className="mx-auto max-w-[var(--content-w)] px-6">
        <header>
          <p className="text-xs tracking-[.25em] text-neutral-500" aria-hidden>
            NEWS
          </p>
          <h2 className="mt-1 text-2xl font-semibold">最新のお知らせ</h2>
        </header>
        <div className="mt-6 grid grid-cols-3 gap-6">
          {NEWS.map((n) => (
            <article key={n.href} className="card">
              <a href={n.href} className="block">
                <div className="flex items-start justify-between p-4">
                  <figure className="shrink-0">
                    <img
                      src={n.thumb}
                      alt=""
                      width={312}
                      height={208}
                      className="h-[124px] w-[186px] rounded-md object-cover"
                    />
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
        <a
          href="/news/"
          className="mt-6 inline-flex items-center gap-2 text-emerald-700 underline decoration-emerald-300 underline-offset-4 hover:decoration-emerald-700"
        >
          全てのニュース <span aria-hidden className="inline-block rotate-180">➜</span>
        </a>
      </div>
    </section>
  )
}

export default function ShoPSHome() {
  return (
    <>
      <SectionWhoWeAre />
      <SectionBranch />
      <SectionCompany />
      <SectionRecruit />
      <SectionNews />
    </>
  )
}
