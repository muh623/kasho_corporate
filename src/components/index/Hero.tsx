"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

const CONTAINER_MAX_W = 1320;
const SIDE_W = 260;
const RIGHT_W = 120;
const GAP = 28;
const HERO_IMG_H = 520;
const HERO_TOTAL_H = HERO_IMG_H + 160;
const AUTOPLAY_MS = 3600;

type Slide = {
  key: string;
  title: string;
  caption: string;
  badge: string;
  tagline: string;
  highlight: string;
  image: string;
  thumbnail: string;
};

const SLIDES: Slide[] = [
  {
    key: "sales-1",
    title: "営業一課",
    caption: "営業一課／鈴木",
    badge: "取引先と共に",
    tagline: "現場に寄り添う提案力",
    highlight: "営業の力",
    image: "/images/hero/slide-01.jpg",
    thumbnail: "/images/hero/thumb-01.jpg",
  },
  {
    key: "sales-2",
    title: "営業二課",
    caption: "営業二課／佐藤",
    badge: "本と読者を繋ぐ",
    tagline: "新たな出逢いをつくる",
    highlight: "連携の力",
    image: "/images/hero/slide-02.jpg",
    thumbnail: "/images/hero/thumb-02.jpg",
  },
  {
    key: "marketing",
    title: "販促企画",
    caption: "販促企画／高橋",
    badge: "街に届ける",
    tagline: "魅力を最前線へ",
    highlight: "企画の力",
    image: "/images/hero/slide-03.jpg",
    thumbnail: "/images/hero/thumb-03.jpg",
  },
  {
    key: "digital",
    title: "デジタル推進",
    caption: "デジタル推進／伊藤",
    badge: "データで支える",
    tagline: "次の一手を見抜く",
    highlight: "分析の力",
    image: "/images/hero/slide-04.jpg",
    thumbnail: "/images/hero/thumb-04.jpg",
  },
  {
    key: "logistics",
    title: "物流管理",
    caption: "物流管理／中村",
    badge: "全国の書店へ",
    tagline: "確かな届け方で",
    highlight: "物流の力",
    image: "/images/hero/slide-05.jpg",
    thumbnail: "/images/hero/thumb-05.jpg",
  },
  {
    key: "support",
    title: "管理部門",
    caption: "管理部門／小林",
    badge: "挑戦を支える",
    tagline: "働きやすさを磨く",
    highlight: "サポートの力",
    image: "/images/hero/slide-06.jpg",
    thumbnail: "/images/hero/thumb-06.jpg",
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
  caption,
  index,
  active,
  onClick,
  image,
}: {
  label: string;
  caption: string;
  index: number;
  active: boolean;
  onClick: () => void;
  image: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`group flex w-full flex-col items-center text-left transition ${active ? "opacity-100" : "opacity-80 hover:opacity-100"}`}
      aria-pressed={active}
      type="button"
    >
      <div className={`relative h-[84px] w-full overflow-hidden rounded-[14px] ring-1 ${active ? "ring-brand-green" : "ring-neutral-200"}`}>
        <Image
          src={image}
          alt=""
          fill
          sizes="120px"
          className="object-cover"
        />
      </div>
      <div className="mt-3 flex flex-col items-center gap-1 text-center">
        <span className={`text-[11px] font-semibold tracking-[0.32em] ${active ? "text-brand-green" : "text-neutral-400"}`}>
          {index < 9 ? `0${index + 1}` : index + 1}
        </span>
        <span className={`text-[13px] font-medium tracking-[0.08em] ${active ? "text-neutral-900" : "text-neutral-600"}`}>
          {label}
        </span>
        <span className="text-[11px] text-neutral-400">{caption}</span>
      </div>
    </button>
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const swiperRef = useRef<SwiperClass>();

  useEffect(() => {
    const instance = swiperRef.current;
    if (!instance) return;
    if (playing) {
      instance.autoplay.start();
    } else {
      instance.autoplay.stop();
    }
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
          <div className="relative w-full overflow-hidden rounded-[24px] bg-white shadow-[0px_30px_50px_rgba(20,20,20,0.08)] ring-1 ring-neutral-200/80">
            <div className="relative overflow-hidden" style={{ height: HERO_IMG_H }}>
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop
                autoplay={{ delay: AUTOPLAY_MS, disableOnInteraction: false }}
                onSwiper={(instance) => {
                  swiperRef.current = instance;
                }}
                onSlideChange={(instance) => {
                  setIndex(instance.realIndex);
                }}
                className="h-full"
              >
                {SLIDES.map((slide) => (
                  <SwiperSlide key={slide.key}>
                    <div className="relative h-full w-full">
                      <Image
                        src={slide.image}
                        alt=""
                        fill
                        sizes="(min-width:1280px) 820px, 100vw"
                        priority={slide.key === SLIDES[0].key}
                        className="object-cover"
                      />
                      <div className="absolute left-8 top-8 flex items-start gap-3">
                        <div className="flex gap-2">
                          <span className="inline-block rounded-[6px] bg-neutral-900/95 px-2 py-2 text-[13px] font-medium leading-none text-white shadow-sm [writing-mode:vertical-rl] [text-orientation:mixed]">
                            {slide.badge}
                          </span>
                          <span className="inline-block rounded-[6px] bg-white/90 px-2 py-2 text-[13px] leading-tight text-neutral-900 shadow-sm [writing-mode:vertical-rl] [text-orientation:mixed]">
                            {slide.tagline}
                          </span>
                        </div>
                        <span className="inline-block rounded-[6px] bg-brand-green/95 px-2 py-2 text-[18px] font-medium leading-none text-white shadow-sm [writing-mode:vertical-rl] [text-orientation:mixed]">
                          {slide.highlight}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="border-t border-neutral-200 bg-white px-6 py-6">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                {SLIDES.map((slide, idx) => (
                  <Thumb
                    key={slide.key}
                    label={slide.title}
                    caption={slide.caption}
                    index={idx}
                    active={index === idx}
                    onClick={() => swiperRef.current?.slideToLoop(idx)}
                    image={slide.thumbnail}
                  />
                ))}
              </div>
            </div>

            <span className="sr-only" aria-live="polite">
              {`${current.title}、${current.badge}、${current.tagline}`}
            </span>
          </div>
        </div>

        <div className="relative pt-8" style={{ minHeight: HERO_TOTAL_H }}>
          <div className="text-[44px] font-medium leading-[1.25] tracking-[0.04em] text-neutral-900 [writing-mode:vertical-rl] [text-orientation:mixed]">
            <span>人と本</span>
            <span className="mt-4 inline-block">出逢う瞬間を</span>
            <span className="mt-4 inline-block text-brand-green">共に創る。</span>
          </div>

          <div className="absolute bottom-5 right-0 flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 [writing-mode:vertical-rl] [text-orientation:mixed]">
              <span className="rounded-full bg-neutral-900 px-3 py-2 text-[12px] font-medium leading-none text-white">最新情報を届ける</span>
              <span className="rounded-full bg-white px-3 py-2 text-[12px] leading-none text-neutral-700 shadow ring-1 ring-neutral-200">現場の声から</span>
            </div>
            <button
              onClick={() => setPlaying((p) => !p)}
              className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] shadow ring-1 ring-neutral-200 transition hover:bg-white/90"
              aria-pressed={!playing}
              type="button"
            >
              <span className="inline-block w-4 text-center">{playing ? "‖" : "▶"}</span>
              <span>{playing ? "一時停止" : "再生"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
