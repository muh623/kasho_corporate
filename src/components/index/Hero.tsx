"use client";

import Image from "next/image";
import {
  CSSProperties,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type Slide = { id: number; src: string; alt: string; label?: string };

// /public/slides に配置。前半=左サムネ、後半=右サムネ。
const SLIDES: Slide[] = [
  { id: 1, src: "/slider/01.jpg", alt: "Slide 01", label: "調べる" },
  { id: 2, src: "/slider/06.jpg", alt: "Slide 02", label: "見出す" },
  { id: 3, src: "/slider/01.jpg", alt: "Slide 03", label: "伝える" },
  { id: 4, src: "/slider/06.jpg", alt: "Slide 04", label: "考える" },
  { id: 5, src: "/slider/01.jpg", alt: "Slide 05", label: "届ける" },
  { id: 6, src: "/slider/06.jpg", alt: "Slide 06", label: "創る" },
];

/* ----------------------------- 小さなユーティリティ ----------------------------- */

/** 自動再生（有効時のみ進める） */
function useAutoAdvance(
  enabled: boolean,
  total: number,
  setIndex: React.Dispatch<React.SetStateAction<number>>,
  ms = 6000
) {
  useEffect(() => {
    if (!enabled || total <= 1) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % total), ms);
    return () => clearInterval(t);
  }, [enabled, total, ms, setIndex]);
}

/**
 * 中央（②）の高さ=左スタック(①+④)の高さ。
 * 縦位置=左右スタック(①+④ / ③+⑤)の“中点”に中央が来るよう marginTop を算出。
 * ※ レスポンシブ判定は一切行わない（常に計測）。
 */
function useCenteredStyle(
  leftRef: React.RefObject<HTMLDivElement>,
  rightRef: React.RefObject<HTMLDivElement>,
  containerRef: React.RefObject<HTMLDivElement>
) {
  const [style, setStyle] = useState<CSSProperties | undefined>();

  const measure = useCallback(() => {
    const left = leftRef.current;
    const right = rightRef.current;
    const container = containerRef.current;
    if (!left || !right || !container) return;

    const L = left.getBoundingClientRect();
    const R = right.getBoundingClientRect();
    const C = container.getBoundingClientRect();

    const h = Math.round(L.height);
    const groupTop = Math.min(L.top, R.top);
    const groupBottom = Math.max(L.bottom, R.bottom);
    const mid = (groupTop + groupBottom) / 2;

    const desiredTop = mid - h / 2;
    const offset = Math.round(desiredTop - C.top);
    const maxOffset = Math.max(0, Math.round(C.height - h));
    const marginTop = Math.min(Math.max(0, offset), maxOffset);

    setStyle({ height: h, marginTop });
  }, [leftRef, rightRef, containerRef]);

  useEffect(() => {
    const ro = new ResizeObserver(() => measure());
    leftRef.current && ro.observe(leftRef.current);
    rightRef.current && ro.observe(rightRef.current);
    measure();
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure, leftRef, rightRef]);

  return style;
}

/* --------------------------------- パーツ --------------------------------- */

function LeftMenu() {
  return (
    <aside className="h-[336px]">
      <div className="space-y-6">
        <div>
          <h1 className="mt-1 text-2xl font-semibold leading-tight">サイトタイトル</h1>
          <p className="text-sm tracking-[0.35em] text-gray-500">PUBLISHING SERVICES</p>
          <div className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-600 to-orange-500" />
        </div>

        <nav aria-label="サイト内メニュー">
          <ul className="space-y-3 text-[15px]">
            {["トップ", "事業紹介", "会社情報", "採用情報"].map((label) => (
              <li key={label}>
                <a className="group inline-flex items-center gap-2 hover:text-emerald-600" href="#">
                  <span>{label}</span>
                  <span
                    aria-hidden
                    className="h-2 w-2 rounded-full bg-emerald-600/60 transition-colors group-hover:bg-emerald-600"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-x-3 pt-2">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-600/30 px-3 py-2 text-sm text-emerald-700 hover:bg-emerald-50"
          >
            お知らせ
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-600/30 px-3 py-2 text-sm text-emerald-700 hover:bg-emerald-50"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </aside>
  );
}

type ThumbsProps = {
  slides: Slide[];
  align: "left" | "right";
  current: number;
  onPick: (index: number) => void;
  startIndex?: number; // 右帯は左帯の長さぶんオフセット
};

function Thumbs({
  slides,
  align,
  current,
  onPick,
  startIndex = 0,
}: ThumbsProps) {
  const sideShift = align === "left" ? "-ml-8" : "-mr-8"; // 固定（レスポンシブ指定なし）
  const justify = align === "left" ? "justify-end" : "justify-start";

  return (
    <div className={`mt-6 overflow-visible ${sideShift}`}>
      {/* 列境界にピタッと：左=右寄せ／右=左寄せ */}
      <div className={`flex w-full ${justify}`}>
        {/* 常に横並び（flex）。レスポンシブ指定なし */}
        <ul
          className="flex w-max flex-nowrap gap-6"
          role="listbox"
          aria-label={align === "left" ? "スライドサムネ（左）" : "スライドサムネ（右）"}
        >
          {slides.map((s, idx) => {
            const index = startIndex + idx;
            const isActive = index === current;
            return (
              <li key={s.id} className="w-[112px] flex-none">
                <button
                  type="button"
                  onClick={() => onPick(index)}
                  className={`group block w-full overflow-hidden ${
                    isActive ? "ring-2 ring-emerald-600" : ""
                  }`}
                  aria-current={isActive ? "true" : "false"}
                  aria-label={`スライド ${index + 1} を表示`}
                >
                  <div className="relative aspect-[3/2] w-full">
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      className="object-cover"
                      sizes="112px" // 固定
                      priority={index < 3}
                    />
                  </div>
                </button>
                {s.label && (
                  <p className="mt-2 truncate text-center text-xs text-gray-600">{s.label}</p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/* --------------------------------- 本体 --------------------------------- */

export default function HeaderHero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const half = Math.ceil(SLIDES.length / 2);
  const leftThumbs = SLIDES.slice(0, half);
  const rightThumbs = SLIDES.slice(half);

  // 計測対象
  const containerRef = useRef<HTMLDivElement>(null);
  const leftStackRef = useRef<HTMLDivElement>(null);  // ① + ④
  const rightStackRef = useRef<HTMLDivElement>(null); // ③ + ⑤

  const centerStyle = useCenteredStyle(leftStackRef, rightStackRef, containerRef);

  // 自動再生（フェード）
  useAutoAdvance(!paused, SLIDES.length, setCurrent, 6000);

  // ← → でスライド変更
  const onKey = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowRight") setCurrent((i) => (i + 1) % SLIDES.length);
    if (e.key === "ArrowLeft") setCurrent((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <section
      aria-label="ヘッダーヒーロー"
      className="mx-auto max-w-[1100px] px-4 py-12"
    >
      <div
        ref={containerRef}
        className="grid grid-cols-12 gap-8"
        tabIndex={0}
        onKeyDown={onKey}
        aria-describedby="hero-status"
      >
        {/* ①+④ 左スタック */}
        <div className="col-span-3">
          <div ref={leftStackRef} className="flex min-w-0 flex-col gap-6">
            <LeftMenu />
            <Thumbs
              slides={leftThumbs}
              align="left"
              current={current}
              onPick={setCurrent}
              startIndex={0}
            />
          </div>
        </div>

        {/* ② 中央カラム：高さ=①+④、縦位置=左右の中点 */}
        <div className="col-span-6">
          <div className="relative w-full overflow-hidden" style={centerStyle}>
            {SLIDES.map((s, i) => {
              const active = current === i;
              return (
                <div
                  key={s.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden={active ? "false" : "true"}
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="600px" // 固定（ブレークポイント条件なし）
                    className="object-cover"
                    priority={i === 0}
                  />
                  {/* 任意ラベル */}
                  <div className="absolute left-3 top-3 rounded bg-white/85 px-2 py-1 text-xs text-gray-700">
                    新たな発見のために
                  </div>
                </div>
              );
            })}
          </div>
          <p id="hero-status" className="sr-only" aria-live="polite">
            現在のスライドは {current + 1} / {SLIDES.length} 枚目です。
          </p>
        </div>

        {/* ③+⑤ 右スタック */}
        <div className="col-span-3">
          <div ref={rightStackRef} className="flex min-w-0 flex-col gap-4">
            {/* 縦書きキャッチ（③） */}
            <div className="flex items-center justify-center h-[336px]">
              <p className="[writing-mode:vertical-rl] [text-orientation:mixed] text-4xl leading-relaxed">
                人と本
                <br />
                出逢う瞬間を
                <br />
                共に創る。
              </p>
            </div>

            {/* 一時停止トグル（右サムネの上） */}
            <div className="flex items-center justify-end gap-3 pr-1">
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm hover:bg-gray-100"
                aria-pressed={paused}
                aria-label={paused ? "自動再生を再開" : "自動再生を一時停止"}
                title={paused ? "再生" : "一時停止"}
              >
                <span className="text-sm">{paused ? "▶ 再生" : "⏸ 一時停止"}</span>
              </button>
            </div>

            {/* ⑤ サムネ（右） */}
            <Thumbs
              slides={rightThumbs}
              align="right"
              current={current}
              onPick={setCurrent}
              startIndex={leftThumbs.length}
            />
          </div>
        </div>
      </div>
    </section>
  );
}