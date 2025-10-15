'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

/** ===== 調整用（px） ===== */
const CONTAINER_MAX_W = 1320  // 全体横幅（PC）
const SIDE_W = 260            // 左サイド幅
const RIGHT_W = 120           // 右カラム幅（縦コピー+ボタン）
const GAP = 28                // カラム間余白

// 赤枠の二段構成：上がメイン画像、下がサムネ行
const HERO_IMG_H = 520        // 上段：メイン画像の高さ（重なりなし）
const BOTTOM_BAR_H = 120      // 下段：サムネ行の高さ（パディング含む目安）
const HERO_TOTAL_H = HERO_IMG_H + BOTTOM_BAR_H

const AUTOPLAY_MS = 2800

type Slide = { key: string; title: string; sub1: string; sub2: string }
const SLIDES: Slide[] = [
  { key: 'think',   title: '考える', sub1: '最適な提案を',   sub2: '本と売り場に' },
  { key: 'link',    title: '繋げる', sub1: '輝くように',     sub2: '本の魅力が' }, // ←縦書き順に合わせて語順調整
  { key: 'deliver', title: '届ける', sub1: '本をお客様に',   sub2: '書店様に想いを' },
  { key: 'visit',   title: '訪ねる', sub1: '信頼関係と',     sub2: '新たな発見のために' },
  { key: 'research',title: '調べる', sub1: '最大限の効果を', sub2: '生むために' },
  { key: 'find',    title: '見出す', sub1: '声に耳を傾け',   sub2: '確かな知見で' },
  { key: 'tell',    title: '伝える', sub1: '書店様と',       sub2: '作り手の架け橋として' },
]

/** 小さな緑丸（>） */
function ArrowDot({ className = '' }: { className?: string }) {
  return (
    <span
      className={
        'inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-[12px] leading-none ' +
        className
      }
      aria-hidden
    >
      ›
    </span>
  )
}

/** サムネ（赤枠の“下段”に表示。メイン画像と非重なり） */
function Thumb({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button onClick={onClick} className="group w-[120px] text-left" aria-pressed={active}>
      <div className="relative h-[72px] overflow-hidden rounded-md ring-1 ring-black/5">
        <Image
          src="/sample.webp"
          alt=""
          fill
          sizes="120px"
          className={`object-cover transition-opacity ${active ? '' : 'opacity-90 group-hover:opacity-100'}`}
        />
      </div>
      <div className="mt-2 text-center text-[12px] text-neutral-500 group-hover:text-neutral-700">
        {label}
      </div>
    </button>
  )
}

export default function ShoPSFirstView() {
  // 例に合わせて「届ける」から開始
  const [index, setIndex] = useState(2)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    if (!playing) return
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [playing])

  const current = useMemo(() => SLIDES[index], [index])

  return (
    <section className="mx-auto px-6" style={{ maxWidth: CONTAINER_MAX_W }}>
      {/* ===== 3カラム（左サイド／中央：赤枠／右：縦コピー＋ボタン） ===== */}
      <div
        className="grid"
        style={{
          gridTemplateColumns: `${SIDE_W}px 1fr ${RIGHT_W}px`,
          columnGap: GAP,
        }}
      >
        {/* ---------- 左：縦型ヘッダー ---------- */}
        <aside className="pt-8">
          <div className="text-[24px] leading-[1.4] tracking-[0.02em] text-neutral-900">
            <div>小学館</div>
            <div>パブリッシング・</div>
            <div>サービス</div>
          </div>
          <div className="mt-3 text-[11px] tracking-[0.24em] text-neutral-500">
            SHOGAKUKAN&nbsp;P.S
          </div>
          <div className="relative mt-3 h-4 w-44">
            <div className="absolute inset-x-0 top-0 h-[6px] rounded-full bg-orange-500" />
            <div className="absolute left-1/2 top-[6px] h-[10px] w-24 -translate-x-1/2 rounded-b-[14px] bg-emerald-600" />
          </div>

          <nav aria-label="サイドナビ" className="mt-7">
            <ul className="space-y-3 text-[15px]">
              <li className="flex items-center justify-between">
                <a className="hover:opacity-80" href="/">トップ</a>
                <ArrowDot />
              </li>
              <li className="flex items-center justify-between">
                <a className="hover:opacity-80" href="/business/">事業紹介</a>
                <ArrowDot />
              </li>
              <li className="flex items-center justify-between">
                <a className="hover:opacity-80" href="/company/">会社情報</a>
                <ArrowDot />
              </li>
              <li className="flex items-center justify-between">
                <a className="hover:opacity-80" href="/recruit/">採用情報</a>
                <ArrowDot />
              </li>
            </ul>

            <ul className="mt-6 space-y-2 text-[14px]">
              <li className="flex items-center gap-2">
                <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden>
                  <rect x="1" y="1" width="16" height="12" rx="2" fill="#111" />
                </svg>
                <a className="underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-800" href="/news/">
                  お知らせ
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden>
                  <rect x="1" y="1" width="16" height="12" rx="2" fill="#111" />
                  <path d="M2 3l7 5 7-5" stroke="#fff" strokeWidth="1.4" fill="none" />
                </svg>
                <a className="underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-800" href="/contact/">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* ---------- 中央：赤枠（上：メイン画像 / 下：サムネ行） ---------- */}
        <div className="pt-8">
          <div className="relative w-full rounded-[22px] bg-white ring-1 ring-neutral-200">
            {/* 上段：メイン画像（ここにだけ縦札を重ねる） */}
            <div className="relative overflow-hidden rounded-t-[22px]" style={{ height: HERO_IMG_H }}>
              {SLIDES.map((s, i) => (
                <div
                  key={s.key}
                  className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
                  aria-hidden={i !== index}
                >
                  <Image
                    src="/sample.webp"
                    alt=""
                    fill
                    sizes="(min-width:1280px) 820px, 100vw"
                    priority={i === 2}
                    className="object-cover"
                  />

                  {/* 左上：白札×2（横並び）＋ 黒ラベル（右側） */}
                  <div className="absolute top-8 left-8 flex items-start gap-2">
                    {/* 白札（縦書き2枚：横並び） */}
                    <div className="flex gap-2">
                      <span className="inline-block rounded-[4px] bg-white/95 px-2 py-1 text-[13px] leading-none text-neutral-900 shadow-sm [writing-mode:vertical-rl] [text-orientation:mixed]">
                        {s.sub1}
                      </span>
                      <span className="inline-block rounded-[4px] bg-white/95 px-2 py-1 text-[13px] leading-none text-neutral-900 shadow-sm [writing-mode:vertical-rl] [text-orientation:mixed]">
                        {s.sub2}
                      </span>
                    </div>
                    {/* 黒ラベル */}
                    <span className="inline-block rounded-[4px] bg-neutral-900 px-2 py-1 text-[18px] font-medium leading-none text-white [writing-mode:vertical-rl] [text-orientation:mixed]">
                      {s.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* 下段：サムネ6枚（メイン画像とは非重なり、赤枠の中） */}
            <div
              className="flex items-end justify-between px-6 py-5"
              style={{ minHeight: BOTTOM_BAR_H }}
            >
              {/* 左3枚（伝える / 考える / 繋げる） */}
              <div className="flex gap-4">
                {([6, 0, 1] as const).map((idx) => (
                  <Thumb
                    key={SLIDES[idx].key}
                    label={SLIDES[idx].title}
                    active={index === idx}
                    onClick={() => setIndex(idx)}
                  />
                ))}
              </div>
              {/* 右3枚（訪ねる / 調べる / 見出す） */}
              <div className="flex gap-4">
                {([3, 4, 5] as const).map((idx) => (
                  <Thumb
                    key={SLIDES[idx].key}
                    label={SLIDES[idx].title}
                    active={index === idx}
                    onClick={() => setIndex(idx)}
                  />
                ))}
              </div>
            </div>

            {/* SR向け：現在スライド */}
            <span className="sr-only" aria-live="polite">
              {current.title}、{current.sub1}、{current.sub2}
            </span>
          </div>
        </div>

        {/* ---------- 右：縦コピー（上）＋ 再生/一時停止（下） ── 赤枠の外 ---------- */}
        <div className="relative pt-8" style={{ minHeight: HERO_TOTAL_H }}>
          <div className="text-[44px] font-medium leading-[1.25] tracking-[0.04em] text-neutral-900 [writing-mode:vertical-rl] [text-orientation:mixed]">
            <span>人と本</span>
            <span className="mt-4 inline-block">出逢う瞬間を</span>
            <span className="mt-4 inline-block text-emerald-600">共に創る。</span>
          </div>

          <div className="absolute bottom-5 right-0">
            <button
              onClick={() => setPlaying((p) => !p)}
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