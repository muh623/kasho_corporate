import Image from 'next/image'
import Link from 'next/link'

const BRANCHES = [
  {
    name: '東京本社',
    description: '全国展開をリードする企画・営業拠点。出版社、書店様、流通を結び付け、スピード感のある提案を実現します。',
    address: '〒101-8001 東京都千代田区一ツ橋2-3-1',
    image: '/assets/images/top/branch_tokyo.jpg',
  },
  {
    name: '大阪支社',
    description: '関西エリアの書店様と密に連携し、地域特性に合わせた売り場づくりとイベントを推進します。',
    address: '〒540-0001 大阪府大阪市中央区城見1-3-7',
    image: '/assets/images/top/branch_osaka.jpg',
  },
  {
    name: '名古屋支社',
    description: '中部圏の市場動向を捉えたプロモーションを展開。新たな読者層との接点を開拓しています。',
    address: '〒450-0002 愛知県名古屋市中村区名駅4-4-10',
    image: '/assets/images/top/branch_nagoya.jpg',
  },
]

export default function SectionBranch() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[var(--content-w)] px-6">
        <header className="flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">BRANCH</p>
            <h2 className="mt-4 text-[36px] font-semibold leading-snug text-neutral-900">全国の拠点とともに、<br />書店の現場へ。</h2>
          </div>
          <Link
            href="/company/#office"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1FAA7B] underline decoration-[#F38B1A]/60 underline-offset-4 hover:decoration-[#F38B1A]"
          >
            拠点一覧を見る
            <span aria-hidden>›</span>
          </Link>
        </header>

        <div className="mt-12 grid grid-cols-3 gap-6">
          {BRANCHES.map((branch) => (
            <article
              key={branch.name}
              className="overflow-hidden rounded-[22px] ring-1 ring-neutral-200 bg-white shadow-soft"
            >
              <div className="relative h-48 w-full">
                <Image src={branch.image} alt={branch.name} fill sizes="(min-width: 1280px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="space-y-3 px-6 py-6">
                <h3 className="text-xl font-semibold text-neutral-900">{branch.name}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{branch.description}</p>
                <p className="text-xs text-neutral-400">{branch.address}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
