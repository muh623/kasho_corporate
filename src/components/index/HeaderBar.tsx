"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "事業紹介" },
  { href: "#solutions", label: "ソリューション" },
  { href: "#cases", label: "導入事例" },
  { href: "#news", label: "お知らせ" },
  { href: "#recruit", label: "採用情報" },
  { href: "#contact", label: "お問い合わせ" },
];

export function HeaderBar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const handler = () => {
      setSolid(window.scrollY > 24);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        solid ? "bg-white/95 shadow-lg shadow-black/5 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 text-sm font-medium text-brand-navy">
        <Link href="#" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-green text-white font-semibold">SPS</span>
          <div className="leading-tight">
            <span className="block text-xs tracking-[0.28em] text-neutral-400">SHOGAKUKAN</span>
            <span className="text-base tracking-[0.12em]">PUBLISHING SERVICE</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative pb-1 transition hover:text-brand-green after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:scale-x-0 after:bg-brand-green after:transition after:content-[''] hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-brand-green px-5 py-2 text-white shadow-soft transition hover:bg-brand-green/90 lg:inline-flex"
        >
          資料請求
        </a>
      </div>
    </header>
  );
}
