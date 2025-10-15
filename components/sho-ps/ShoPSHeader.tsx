'use client'
import { useState } from 'react'

export default function ShoPSHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[var(--content-w)] items-center justify-between px-6 py-4">
        <a href="/" className="block h-[44px]">
          <img
            src="/assets/images/common/logo_header.svg"
            alt="SHOGAKUKAN P.S 小学館パブリッシング・サービス"
            className="h-full w-auto"
            width={168}
            height={176}
          />
        </a>

        {/* MENU */}
        <button
          aria-controls="menu"
          aria-expanded={open}
          aria-label="MENU"
          onClick={() => setOpen((v) => !v)}
          className="group relative flex h-10 w-10 items-center justify-center"
        >
          <span className="sr-only">Open menu</span>
          <span className="absolute -translate-y-2 h-1.5 w-1.5 rounded-full bg-neutral-800" />
          <span className="absolute h-1.5 w-1.5 rounded-full bg-neutral-800" />
          <span className="absolute translate-y-2 h-1.5 w-1.5 rounded-full bg-neutral-800" />
        </button>

        {/* Drawer */}
        <div
          id="menu"
          aria-selected={open}
          className={`fixed inset-0 z-40 bg-white/95 transition-opacity ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
        >
          <div className="mx-auto flex max-w-[var(--content-w)] px-6 py-10">
            <nav className="w-2/3">
              <ul className="grid grid-cols-2 gap-y-4 text-lg">
                <li>
                  <a className="group inline-flex items-center gap-2 hover:opacity-80" href="/">
                    トップ <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white">›</span>
                  </a>
                </li>
                <li>
                  <a className="group inline-flex items-center gap-2 hover:opacity-80" href="/business/">
                    事業紹介 <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white">›</span>
                  </a>
                  <ul className="ml-6 mt-2 space-y-2 text-base text-neutral-600">
                    <li><a href="/business/" className="hover:underline">事業内容</a></li>
                    <li><a href="/policy/" className="hover:underline">私たちが大切にしていること</a></li>
                  </ul>
                </li>
                <li>
                  <a className="group inline-flex items-center gap-2 hover:opacity-80" href="/company/">
                    会社情報 <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white">›</span>
                  </a>
                  <ul className="ml-6 mt-2 space-y-2 text-base text-neutral-600">
                    <li><a className="hover:underline" href="/message/">代表メッセージ</a></li>
                    <li><a className="hover:underline" href="/interview/">代表対談</a></li>
                    <li><a className="hover:underline" href="/company/">会社概要</a></li>
                  </ul>
                </li>
                <li>
                  <a className="group inline-flex items-center gap-2 hover:opacity-80" href="/recruit/">
                    採用情報 <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white">›</span>
                  </a>
                  <ul className="ml-6 mt-2 space-y-2 text-base text-neutral-600">
                    <li><a className="hover:underline" href="/recruit/">採用トップ</a></li>
                    <li><a className="hover:underline" href="/recruit/workstyle/">仕事内容/部署紹介</a></li>
                    <li><a className="hover:underline" href="/recruit/welfare/">福利厚生</a></li>
                    <li><a className="hover:underline" href="/recruit/faq/">よくあるご質問</a></li>
                    <li><a className="hover:underline" href="/recruit/data/">数字で見る</a></li>
                  </ul>
                </li>
              </ul>
            </nav>

            <div className="ml-auto w-1/3">
              <a href="/" className="block">
                <img
                  src="/assets/images/common/logo_footer.svg"
                  alt="小学館パブリッシング・サービス"
                  width={180}
                  height={75}
                  className="h-auto w-[180px]"
                  loading="lazy"
                />
              </a>
              <div className="mt-6 space-x-6 text-lg">
                <a href="/news/" className="underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-800">お知らせ</a>
                <a href="/contact/" className="underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-800">お問い合わせ</a>
              </div>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            aria-label="close menu"
            className="absolute right-6 top-6 h-10 w-10 rounded-full bg-neutral-900/80 text-white"
          >×</button>
        </div>
      </div>
    </header>
  )
}
