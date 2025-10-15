'use client'

import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

/** ===== レイアウト定数（px） ===== */
const CONTAINER_W = 1320 // PC基準の全体幅
const SIDE_W = 260 // 左サイド幅（002/003比で最適化）
const RIGHT_W = 120 // 右カラム幅（縦コピー）
const GAP = 28 // カラム間の余白
const ROW_GAP = 20 // 上段メインと下段サムネの余白
const HERO_H = 620 // メイン画像高さ

const THUMB_W = 164
const THUMB_H = 96
const THUMB_GAP = 20

type Slide = {
  key: string
  title: string
  sub1: string
  sub2: string
  image: string
  imageSp: string
}

const SLIDES: Slide[] = [
  {
    key: 'tell',
    title: '伝える',
    sub1: '書店様と',
    sub2: '作り手の架け橋として',
    image: '/assets/images/top/slide_tell.webp',
    imageSp: '/assets/images/top/slide_tell_sp.webp',
  },
  {
    key: 'create',
    title: '考える',
    sub1: '本と売り場に',
    sub2: '最適な提案を',
    image: '/assets/images/top/slide_create.webp',
    imageSp: '/assets/images/top/slide_create_sp.webp',
  },
  {
    key: 'lineup',
    title: '繋げる',
    sub1: '本の魅力が',
    sub2: '輝くように',
    image: '/assets/images/top/slide_line-up.webp',
    imageSp: '/assets/images/top/slide_line-up_sp.webp',
  },
  {
    key: 'deliver',
    title: '届ける',
    sub1: '本をお客様に',
    sub2: '書店様に想いを',
    image: '/assets/images/top/slide_deliver.webp',
    imageSp: '/assets/images/top/slide_deliver_sp.webp',
  },
  {
    key: 'visit',
    title: '訪ねる',
    sub1: '信頼関係と',
    sub2: '新たな発見のために',
    image: '/assets/images/top/slide_visit.webp',
    imageSp: '/assets/images/top/slide_visit_sp.webp',
  },
  {
    key: 'invest',
    title: '調べる',
    sub1: '最大限の効果を',
    sub2: '生むために',
    image: '/assets/images/top/slide_investigate.webp',
    imageSp: '/assets/images/top/slide_investigate_sp.webp',
  },
  {
    key: 'find',
    title: '見出す',
    sub1: '声に耳を傾け',
    sub2: '確かな知見で',
    image: '/assets/images/top/slide_find.webp',
    imageSp: '/assets/images/top/slide_find_sp.webp',
  },
]

// 002/003の見え方に合わせたサムネの左右割り
const LEFT_THUMBS = ['deliver', 'visit', 'invest'] as const
const RIGHT_THUMBS = ['find', 'tell', 'create'] as const

function ArrowDot() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white">›</span>
  )
}

function Thumb({
  label,
  src,
  active,
  onClick,
}: {
  label: string
  src: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button onClick={onClick} className="group text-left" style={{ width: THUMB_W }} aria-pressed={active}>
      <div
        className={`relative overflow-hidden rounded-md ring-1 ring-black/5 ${
          active ? '' : 'opacity-90 group-hover:opacity-100'
        }`}
        style={{ height: THUMB_H }}
      >
        <img src={src} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="mt-2 text-center text-[12px] text-neutral-500 group-hover:text-neutral-700">{label}</div>
    </button>
  )
}

export default function HeroHeader() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(true)

  const goKey = (key: string) => {
    const idx = SLIDES.findIndex((s) => s.key === key)
    if (idx >= 0) swiperRef.current?.slideToLoop(idx)
  }
  const togglePlay = () => {
    if (!swiperRef.current) return
    if (playing) swiperRef.current.autoplay?.stop()
    else swiperRef.current.autoplay?.start()
    setPlaying((p) => !p)
  }

  return (
    <section className="mx-auto px-6" style={{ maxWidth: CONTAINER_W }}>
      {/* グリッド：3カラム × 2行（上：本体 / 下：サムネは中央カラムにのみ配置） */}
      <div
        className="grid"
        style={{
          gridTemplateColumns: `${SIDE_W}px 1fr ${RIGHT_W}px`,
          columnGap: GAP,
          rowGap: ROW_GAP,
        }}
      >
        {/* ===== 上段：左サイド ===== */}
        <aside className="pt-4">
          <div className="text-[28px] leading-[1.5]">
            <div>小学館</div>
            <div>パブリッシング・</div>
            <div>サービス</div>
          </div>
          <div className="mt-3 text-[11px] tracking-[0.24em] text-neutral-500">SHOGAKUKAN&nbsp;P.S</div>
          <div className="relative mt-4 h-4 w-48">
            <div className="absolute inset-x-0 top-0 h-[6px] rounded-full bg-[#F38B1A]" />
            <div className="absolute left-1/2 top-[6px] h-[10px] w-28 -translate-x-1/2 rounded-b-[14px] bg-[#1FAA7B]" />
          </div>
          <nav className="mt-8 space-y-4 text-[15px]">
            {[
              ['トップ', '/'],
              ['事業紹介', '/business/'],
              ['会社情報', '/company/'],
              ['採用情報', '/recruit/'],
            ].map(([label, href]) => (
              <div key={href} className="flex items-center justify-between">
                <a href={href} className="hover:opacity-80">
                  {label}
                </a>
                <ArrowDot />
              </div>
            ))}
            <div className="mt-4 space-y-2 text-[14px]">
              <div className="flex items-center gap-2">
                <span className="inline-block h-[14px] w-[18px] rounded bg-neutral-900" aria-hidden />
                <a href="/news/" className="underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-800">
                  お知らせ
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative inline-block h-[14px] w-[18px] rounded bg-neutral-900" aria-hidden>
                  <span className="absolute left-[2px] top-[4px] h-[1.4px] w-[14px] bg-white" />
                </span>
                <a href="/contact/" className="underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-800">
                  お問い合わせ
                </a>
              </div>
            </div>
          </nav>
        </aside>

        {/* ===== 上段：中央（メインカード） ===== */}
        <div className="pt-4">
          <div className="overflow-hidden rounded-[22px] ring-1 ring-neutral-200">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              autoplay={{ delay: 2800, disableOnInteraction: false }}
              loop
              onSwiper={(s) => (swiperRef.current = s)}
              onSlideChange={(s) => setActive(s.realIndex)}
              className="h-[620px] w-full"
              allowTouchMove={false}
            >
              {SLIDES.map((s) => (
                <SwiperSlide key={s.key}>
                  <div className="relative h-[620px] w-full">
                    <picture>
                      <source media="(max-width: 768px)" srcSet={s.imageSp} />
                      <img src={s.image} alt="" className="h-full w-full object-cover" />
                    </picture>

                    {/* 左上の白札×2 + 黒ラベル（縦書き） */}
                    <div className="absolute left-10 top-8 flex items-start gap-2">
                      <div className="flex gap-2">
                        <span className="rounded bg-white/95 px-2 py-1 text-[13px] text-neutral-900 shadow-sm [writing-mode:vertical-rl] [text-orientation:mixed]">
                          {s.sub1}
                        </span>
                        <span className="rounded bg-white/95 px-2 py-1 text-[13px] text-neutral-900 shadow-sm [writing-mode:vertical-rl] [text-orientation:mixed]">
                          {s.sub2}
                        </span>
                      </div>
                      <span className="rounded bg-neutral-900 px-2 py-1 text-[18px] font-medium text-white [writing-mode:vertical-rl] [text-orientation:mixed]">
                        {s.title}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* ===== 上段：右（縦コピー & 再生/停止） ===== */}
        <div className="relative pt-4" style={{ minHeight: HERO_H }}>
          <h1 className="mt-1 text-[44px] font-medium leading-[1.25] tracking-[0.02em] [writing-mode:vertical-rl] [text-orientation:mixed]">
            <span>人と本</span>
            <span className="mt-4 inline-block">出逢う瞬間を</span>
            <span className="mt-4 inline-block text-emerald-600">共に創る。</span>
          </h1>
          <div className="absolute bottom-5 right-0">
            <button
              onClick={togglePlay}
              className="flex items-center gap-2 rounded-md bg-white px-3 py-2 text-[13px] shadow ring-1 ring-neutral-200 hover:bg-white/90"
            >
              <span className="inline-block w-3 text-center">{playing ? '‖' : '▶'}</span>
              <span>{playing ? '一時停止' : '再生'}</span>
            </button>
          </div>
        </div>

        {/* ===== 下段：サムネ用コンテナ（※中央カラムのみを占有） ===== */}
        <div className="relative col-start-2 col-end-3">
          {/* 左3枚 */}
          <div className="absolute bottom-0 left-0 flex" style={{ gap: THUMB_GAP }}>
            {LEFT_THUMBS.map((key) => {
              const i = SLIDES.findIndex((s) => s.key === key)
              const s = SLIDES[i]
              return (
                <Thumb key={key} label={s.title} src={s.image} active={active === i} onClick={() => goKey(key)} />
              )
            })}
          </div>
          {/* 右3枚 */}
          <div className="absolute bottom-0 right-0 flex" style={{ gap: THUMB_GAP }}>
            {RIGHT_THUMBS.map((key) => {
              const i = SLIDES.findIndex((s) => s.key === key)
              const s = SLIDES[i]
              return (
                <Thumb key={key} label={s.title} src={s.image} active={active === i} onClick={() => goKey(key)} />
              )
            })}
          </div>
          {/* 高さ確保（行の高さ＝サムネ高＋ラベル余白） */}
          <div style={{ height: THUMB_H + 24 }} />
        </div>
      </div>
    </section>
  )
}
