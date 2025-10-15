"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const CONTAINER_MAX_W = 1320;
const SIDE_W = 260;
const RIGHT_W = 120;
const GAP = 28;
const HERO_IMG_H = 520;
const BOTTOM_BAR_H = 120;
const HERO_TOTAL_H = HERO_IMG_H + BOTTOM_BAR_H;
const AUTOPLAY_MS = 3600;

type Slide = {
  key: string;
  title: string;
  sub1: string;
  sub2: string;
  image: string;
};

const SLIDES: Slide[] = [
  {
    key: "think",
    title: "考える",
    sub1: "最適な提案を",
    sub2: "本と売り場に",
    image: "/hero-think.svg",
  },
  {
    key: "link",
    title: "繋げる",
    sub1: "輝くように",
    sub2: "本の魅力が",
    image: "/hero-link.svg",
  },
  {
    key: "deliver",
    title: "届ける",
    sub1: "本をお客様に",
    sub2: "書店様に想いを",
    image: "/hero-deliver.svg",
  },
  {
    key: "visit",
    title: "訪ねる",
    sub1: "信頼関係と",
    sub2: "新たな発見のために",
    image: "/hero-visit.svg",
  },
  {
    key: "research",
    title: "調べる",
    sub1: "最大限の効果を",
    sub2: "生むために",
    image: "/hero-research.svg",
  },
  {
    key: "find",
    title: "見出す",
    sub1: "声に耳を傾け",
    sub2: "確かな知見で",
    image: "/hero-find.svg",
  },
  {
    key: "tell",
    title: "伝える",
    sub1: "書店様と",
    sub2: "作り手の架け橋として",
    image: "/hero-tell.svg",
  },
];

function ArrowDot({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-green text-white text-[12px] leading-none ${className}`}
      aria-hidden
    >
      ›
    </span>
  );
}

function Thumb({
  label,
  active,
  onClick,
  image,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  image: string;
}) {
  return (
    <button
      onClick={onClick}
      className="group w-[120px] text-left"
      aria-pressed={active}
      type="button"
    >
      <div className="relative h-[72px] overflow-hidden rounded-md ring-1 ring-black/5">
        <Image
          src={image}
          alt=""
          fill
          sizes="120px"
          className={`object-cover transition-opacity duration-300 ${active ? "" : "opacity-90 group-hover:opacity-100"}`}
        />
      </div>
      <div className={`mt-2 text-center text-[12px] transition ${active ? "text-brand-green" : "text-neutral-500 group-hover:text-neutral-700"}`}>
        {label}
      </div>
    </button>
  );
}

export default function Hero() {
  const [index, setIndex] = useState(2);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [playing]);

  const current = useMemo(() => SLIDES[index], [index]);

  return (
    <section className="relative mx-auto w-full px-6 pt-32" style={{ maxWidth: CONTAINER_MAX_W }}>
      <div
        className="grid"
        style={{
          gridTemplateColumns: `${SIDE_W}px 1fr ${RIGHT_W}px`,
          columnGap: GAP,
        }}
      >
        <aside className="pt-8">
          <div className="text-[24px] leading-[1.5] tracking-[0.02em] text-neutral-900">
            <div>小学館</div>
            <div>パブリッシング・</div>
            <div>サービス</div>
          </div>
          <div className="mt-2 text-[11px] tracking-[0.24em] text-neutral-500">SHOGAKUKAN P.S</div>
          <div className="relative mt-4 h-4 w-44">
            <div className="absolute inset-x-0 top-0 h-[6px] rounded-full bg-brand-orange" />
            <div className="absolute left-1/2 top-[6px] h-[10px] w-24 -translate-x-1/2 rounded-b-[14px] bg-brand-green" />
          </div>

          <nav aria-label="サイドナビ" className="mt-8 text-[15px]">
            <ul className="space-y-3">
              <li className="flex items-center justify-between">
                <a className="hover:opacity-80" href="#">トップ</a>
                <ArrowDot />
              </li>
              <li className="flex items-center justify-between">
                <a className="hover:opacity-80" href="#services">事業紹介</a>
                <ArrowDot />
              </li>
              <li className="flex items-center justify-between">
                <a className="hover:opacity-80" href="#solutions">会社情報</a>
                <ArrowDot />
              </li>
              <li className="flex items-center justify-between">
                <a className="hover:opacity-80" href="#recruit">採用情報</a>
                <ArrowDot />
              </li>
            </ul>

            <ul className="mt-6 space-y-2 text-[14px]">
              <li className="flex items-center gap-2">
                <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden>
                  <rect x="1" y="1" width="16" height="12" rx="2" fill="#111" />
                </svg>
                <a className="underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-800" href="#news">
                  お知らせ
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden>
                  <rect x="1" y="1" width="16" height="12" rx="2" fill="#111" />
                  <path d="M2 3l7 5 7-5" stroke="#fff" strokeWidth="1.4" fill="none" />
                </svg>
                <a className="underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-800" href="#contact">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <div className="pt-8">
          <div className="relative w-full rounded-[22px] bg-white ring-1 ring-neutral-200">
            <div className="relative overflow-hidden rounded-t-[22px]" style={{ height: HERO_IMG_H }}>
              {SLIDES.map((slide, i) => (
                <div
                  key={slide.key}
                  className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
                  aria-hidden={i !== index}
                >
                  <Image
                    src={slide.image}
                    alt=""
                    fill
                    sizes="(min-width:1280px) 820px, 100vw"
                    priority={i === 2}
                    className="object-cover"
                  />

                  <div className="absolute left-8 top-8 flex items-start gap-2">
                    <div className="flex gap-2">
                      <span className="inline-block rounded-[4px] bg-white/95 px-2 py-1 text-[13px] leading-none text-neutral-900 shadow-sm [writing-mode:vertical-rl] [text-orientation:mixed]">
                        {slide.sub1}
                      </span>
                      <span className="inline-block rounded-[4px] bg-white/95 px-2 py-1 text-[13px] leading-none text-neutral-900 shadow-sm [writing-mode:vertical-rl] [text-orientation:mixed]">
                        {slide.sub2}
                      </span>
                    </div>
                    <span className="inline-block rounded-[4px] bg-neutral-900 px-2 py-1 text-[18px] font-medium leading-none text-white [writing-mode:vertical-rl] [text-orientation:mixed]">
                      {slide.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-end justify-between px-6 py-5" style={{ minHeight: BOTTOM_BAR_H }}>
              <div className="flex gap-4">
                {([6, 0, 1] as const).map((idx) => (
                  <Thumb
                    key={SLIDES[idx].key}
                    label={SLIDES[idx].title}
                    active={index === idx}
                    onClick={() => setIndex(idx)}
                    image={SLIDES[idx].image}
                  />
                ))}
              </div>
              <div className="flex gap-4">
                {([3, 4, 5] as const).map((idx) => (
                  <Thumb
                    key={SLIDES[idx].key}
                    label={SLIDES[idx].title}
                    active={index === idx}
                    onClick={() => setIndex(idx)}
                    image={SLIDES[idx].image}
                  />
                ))}
              </div>
            </div>

            <span className="sr-only" aria-live="polite">
              {current.title}、{current.sub1}、{current.sub2}
            </span>
          </div>
        </div>

        <div className="relative pt-8" style={{ minHeight: HERO_TOTAL_H }}>
          <div className="text-[44px] font-medium leading-[1.25] tracking-[0.04em] text-neutral-900 [writing-mode:vertical-rl] [text-orientation:mixed]">
            <span>人と本</span>
            <span className="mt-4 inline-block">出逢う瞬間を</span>
            <span className="mt-4 inline-block text-brand-green">共に創る。</span>
          </div>

          <div className="absolute bottom-5 right-0">
            <button
              onClick={() => setPlaying((p) => !p)}
              className="flex items-center gap-2 rounded-md bg-white px-3 py-2 text-[13px] shadow ring-1 ring-neutral-200 transition hover:bg-white/90"
              aria-pressed={!playing}
              type="button"
            >
              <span className="inline-block w-3 text-center">{playing ? "‖" : "▶"}</span>
              <span>{playing ? "一時停止" : "再生"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
