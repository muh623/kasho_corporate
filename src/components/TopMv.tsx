'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'

type SplideInstance = {
  go: (index: number) => void
  Components: {
    Autoplay?: {
      play: () => void
      pause: () => void
    }
  }
}

const CONTAINER_MAX_W = 1320
const SIDE_W = 260
const RIGHT_W = 120
const GAP = 28
const HERO_IMG_H = 520
const BOTTOM_BAR_H = 120
const HERO_TOTAL_H = HERO_IMG_H + BOTTOM_BAR_H
const AUTOPLAY_MS = 3200

const SLIDES = [
  {
    key: 'think',
    title: '考える',
    sub1: '最適な提案を',
    sub2: '本と売り場に',
    image: '/assets/images/top/mv_think.jpg',
    thumb: '/assets/images/top/thumb_think.jpg',
  },
  {
    key: 'link',
    title: '繋げる',
    sub1: '輝くように',
    sub2: '本の魅力が',
    image: '/assets/images/top/mv_link.jpg',
    thumb: '/assets/images/top/thumb_link.jpg',
  },
  {
    key: 'deliver',
    title: '届ける',
    sub1: '本をお客様に',
    sub2: '書店様に想いを',
    image: '/assets/images/top/mv_deliver.jpg',
    thumb: '/assets/images/top/thumb_deliver.jpg',
  },
  {
    key: 'visit',
    title: '訪ねる',
    sub1: '信頼関係と',
    sub2: '新たな発見のために',
    image: '/assets/images/top/mv_visit.jpg',
    thumb: '/assets/images/top/thumb_visit.jpg',
  },
  {
    key: 'research',
    title: '調べる',
    sub1: '最大限の効果を',
    sub2: '生むために',
    image: '/assets/images/top/mv_research.jpg',
    thumb: '/assets/images/top/thumb_research.jpg',
  },
  {
    key: 'find',
    title: '見出す',
    sub1: '声に耳を傾け',
    sub2: '確かな知見で',
    image: '/assets/images/top/mv_find.jpg',
    thumb: '/assets/images/top/thumb_find.jpg',
  },
  {
    key: 'tell',
    title: '伝える',
    sub1: '書店様と',
    sub2: '作り手の架け橋として',
    image: '/assets/images/top/mv_tell.jpg',
    thumb: '/assets/images/top/thumb_tell.jpg',
  },
] as const

type Slide = (typeof SLIDES)[number]

function ArrowDot({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-xs text-white ${className ?? ''}`}
      aria-hidden
    >
      ›
    </span>
  )
}

function Thumb({ slide, active, onClick }: { slide: Slide; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group w-[120px] text-left transition-opacity ${active ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
      aria-pressed={active}
    >
      <div className="relative h-[72px] overflow-hidden rounded-md ring-1 ring-black/10">
        <Image
          src={slide.thumb}
          alt={slide.title}
          fill
          sizes="120px"
          className="object-cover"
        />
      </div>
      <div className="mt-2 text-center text-xs text-neutral-600 group-hover:text-neutral-800">{slide.title}</div>
    </button>
  )
}

export default function TopMv() {
  const [activeIndex, setActiveIndex] = useState(2)
  const [splide, setSplide] = useState<SplideInstance | null>(null)
  const [playing, setPlaying] = useState(true)

  const current = useMemo(() => SLIDES[activeIndex], [activeIndex])

  useEffect(() => {
    if (!splide) return
    if (playing) {
      splide.Components.Autoplay?.play()
    } else {
      splide.Components.Autoplay?.pause()
    }
  }, [playing, splide])

  useEffect(() => {
    if (!splide) return
    splide.go(activeIndex)
  }, [activeIndex, splide])

  return (
    <section className="mx-auto px-6" style={{ maxWidth: CONTAINER_MAX_W }}>
      <div
        className="grid"
        style={{ gridTemplateColumns: `${SIDE_W}px 1fr ${RIGHT_W}px`, columnGap: GAP }}
      >
        <aside className="pt-8">
          <div className="text-[24px] leading-[1.4] tracking-[0.02em] text-neutral-900">
            <div>小学館</div>
            <div>パブリッシング・</div>
            <div>サービス</div>
          </div>
          <div className="mt-3 text-[11px] tracking-[0.24em] text-neutral-500">SHOGAKUKAN&nbsp;P.S</div>
          <div className="relative mt-3 h-4 w-44">
            <div className="absolute inset-x-0 top-0 h-[6px] rounded-full bg-[#F38B1A]" />
            <div className="absolute left-1/2 top-[6px] h-[10px] w-24 -translate-x-1/2 rounded-b-[14px] bg-[#1FAA7B]" />
          </div>

          <nav aria-label="サイドナビ" className="mt-7">
            <ul className="space-y-3 text-[15px]">
              <li className="flex items-center justify-between">
                <Link className="hover:opacity-80" href="/">
                  トップ
                </Link>
                <ArrowDot />
              </li>
              <li className="flex items-center justify-between">
                <Link className="hover:opacity-80" href="/business/">
                  事業紹介
                </Link>
                <ArrowDot />
              </li>
              <li className="flex items-center justify-between">
                <Link className="hover:opacity-80" href="/company/">
                  会社情報
                </Link>
                <ArrowDot />
              </li>
              <li className="flex items-center justify-between">
                <Link className="hover:opacity-80" href="/recruit/">
                  採用情報
                </Link>
                <ArrowDot />
              </li>
            </ul>

            <ul className="mt-6 space-y-2 text-[14px]">
              <li className="flex items-center gap-2">
                <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden>
                  <rect x="1" y="1" width="16" height="12" rx="2" fill="#111" />
                </svg>
                <Link
                  className="underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-800"
                  href="/news/"
                >
                  お知らせ
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden>
                  <rect x="1" y="1" width="16" height="12" rx="2" fill="#111" />
                  <path d="M2 3l7 5 7-5" stroke="#fff" strokeWidth="1.4" fill="none" />
                </svg>
                <Link
                  className="underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-800"
                  href="/contact/"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        <div className="pt-8">
          <div className="relative w-full rounded-[22px] bg-white ring-1 ring-neutral-200">
            <div className="relative overflow-hidden rounded-t-[22px]" style={{ height: HERO_IMG_H }}>
              <Splide
                options={{
                  type: 'loop',
                  arrows: false,
                  pagination: false,
                  autoplay: true,
                  interval: AUTOPLAY_MS,
                  pauseOnHover: true,
                  pauseOnFocus: true,
                  drag: true,
                }}
                onMounted={(instance) => {
                  setSplide(instance)
                  instance.go(activeIndex)
                }}
                onMoved={(_, newIndex) => {
                  const normalized = ((newIndex % SLIDES.length) + SLIDES.length) % SLIDES.length
                  setActiveIndex(normalized)
                }}
                className="h-full"
              >
                {SLIDES.map((slide) => (
                  <SplideSlide key={slide.key} className="h-full">
                    <div className="relative h-full w-full">
                      <Image src={slide.image} alt={slide.title} fill sizes="(min-width: 1280px) 820px, 100vw" className="object-cover" />
                      <div className="absolute left-8 top-8 flex items-start gap-2">
                        <div className="flex gap-2">
                          <span className="inline-block rounded bg-white/95 px-2 py-1 text-[13px] leading-none text-neutral-900 shadow-sm v-rl">
                            {slide.sub1}
                          </span>
                          <span className="inline-block rounded bg-white/95 px-2 py-1 text-[13px] leading-none text-neutral-900 shadow-sm v-rl">
                            {slide.sub2}
                          </span>
                        </div>
                        <span className="inline-block rounded bg-neutral-900 px-2 py-1 text-[18px] font-medium leading-none text-white v-rl">
                          {slide.title}
                        </span>
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>

            <div className="flex items-end justify-between px-6 py-5" style={{ minHeight: BOTTOM_BAR_H }}>
              <div className="flex gap-4">
                {[6, 0, 1].map((idx) => (
                  <Thumb key={SLIDES[idx].key} slide={SLIDES[idx]} active={activeIndex === idx} onClick={() => setActiveIndex(idx)} />
                ))}
              </div>
              <div className="flex gap-4">
                {[3, 4, 5].map((idx) => (
                  <Thumb key={SLIDES[idx].key} slide={SLIDES[idx]} active={activeIndex === idx} onClick={() => setActiveIndex(idx)} />
                ))}
              </div>
            </div>

            <span className="sr-only" aria-live="polite">
              {current.title}、{current.sub1}、{current.sub2}
            </span>
          </div>
        </div>

        <div className="relative pt-8" style={{ minHeight: HERO_TOTAL_H }}>
          <div className="text-[44px] font-medium leading-[1.25] tracking-[0.04em] text-neutral-900 v-rl">
            <span>人と本</span>
            <span className="mt-4 inline-block">出逢う瞬間を</span>
            <span className="mt-4 inline-block text-[#1FAA7B]">共に創る。</span>
          </div>

          <div className="absolute bottom-5 right-0">
            <button
              type="button"
              onClick={() => setPlaying((prev) => !prev)}
              className="flex items-center gap-2 rounded-md bg-white px-3 py-2 text-[13px] shadow ring-1 ring-neutral-200 hover:bg-white/90"
              aria-pressed={!playing}
            >
              <span className="inline-block w-3 text-center">{playing ? '‖' : '▶'}</span>
              <span>{playing ? '一時停止' : '再生'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
