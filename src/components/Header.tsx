'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[var(--content-w)] items-center justify-between px-6 py-4">
        <Link href="/" className="block h-[44px]">
          <Image
            src="/assets/images/common/logo_header.svg"
            alt="SHOGAKUKAN P.S 小学館パブリッシング・サービス"
            width={168}
            height={44}
            className="h-[44px] w-auto"
          />
        </Link>

        <div className="relative">
          <button
            aria-controls="menu"
            aria-expanded={open}
            aria-label="MENU"
            onClick={() => setOpen((v) => !v)}
            className="group relative flex h-10 w-10 items-center justify-center"
          >
            <span className="sr-only">メニューを開く</span>
            <span className="absolute -translate-y-2 rounded-full bg-neutral-800 transition-all group-hover:scale-110" style={{ height: '6px', width: '6px' }} />
            <span className="absolute rounded-full bg-neutral-800 transition-all group-hover:scale-110" style={{ height: '6px', width: '6px' }} />
            <span className="absolute translate-y-2 rounded-full bg-neutral-800 transition-all group-hover:scale-110" style={{ height: '6px', width: '6px' }} />
          </button>

          <div
            id="menu"
            aria-hidden={!open}
            className={`fixed inset-0 z-40 bg-white/95 transition-opacity ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
          >
            <div className="mx-auto flex h-full max-w-[var(--content-w)] flex-col px-6 py-10">
              <div className="flex flex-1 gap-16">
                <nav className="w-2/3">
                  <ul className="grid grid-cols-2 gap-y-6 text-lg">
                    <li>
                      <Link className="group inline-flex items-center gap-2 hover:opacity-80" href="/">
                        トップ
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-xs text-white">
                          ›
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link className="group inline-flex items-center gap-2 hover:opacity-80" href="/business/">
                        事業紹介
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-xs text-white">
                          ›
                        </span>
                      </Link>
                      <ul className="ml-6 mt-3 space-y-2 text-base text-neutral-600">
                        <li>
                          <Link href="/business/" className="hover:underline">
                            事業内容
                          </Link>
                        </li>
                        <li>
                          <Link href="/policy/" className="hover:underline">
                            私たちが大切にしていること
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="group inline-flex items-center gap-2 hover:opacity-80" href="/company/">
                        会社情報
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-xs text-white">
                          ›
                        </span>
                      </Link>
                      <ul className="ml-6 mt-3 space-y-2 text-base text-neutral-600">
                        <li>
                          <Link className="hover:underline" href="/message/">
                            代表メッセージ
                          </Link>
                        </li>
                        <li>
                          <Link className="hover:underline" href="/interview/">
                            代表対談
                          </Link>
                        </li>
                        <li>
                          <Link className="hover:underline" href="/company/">
                            会社概要
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="group inline-flex items-center gap-2 hover:opacity-80" href="/recruit/">
                        採用情報
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-xs text-white">
                          ›
                        </span>
                      </Link>
                      <ul className="ml-6 mt-3 space-y-2 text-base text-neutral-600">
                        <li>
                          <Link className="hover:underline" href="/recruit/">
                            採用トップ
                          </Link>
                        </li>
                        <li>
                          <Link className="hover:underline" href="/recruit/workstyle/">
                            仕事内容/部署紹介
                          </Link>
                        </li>
                        <li>
                          <Link className="hover:underline" href="/recruit/welfare/">
                            福利厚生
                          </Link>
                        </li>
                        <li>
                          <Link className="hover:underline" href="/recruit/faq/">
                            よくあるご質問
                          </Link>
                        </li>
                        <li>
                          <Link className="hover:underline" href="/recruit/data/">
                            数字で見る
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
                <div className="ml-auto w-1/3">
                  <Link href="/" className="block">
                    <Image
                      src="/assets/images/common/logo_footer.svg"
                      alt="小学館パブリッシング・サービス"
                      width={180}
                      height={75}
                      className="h-auto w-[180px]"
                    />
                  </Link>
                  <div className="mt-6 space-x-6 text-lg">
                    <Link
                      href="/news/"
                      className="underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-800"
                    >
                      お知らせ
                    </Link>
                    <Link
                      href="/contact/"
                      className="underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-800"
                    >
                      お問い合わせ
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              aria-label="メニューを閉じる"
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900/80 text-xl text-white"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
