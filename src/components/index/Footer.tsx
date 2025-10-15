export function Footer() {
  return (
    <footer className="border-t border-white/40 bg-brand-navy/95 py-12 text-white">
      <div className="mx-auto flex max-w-[1080px] flex-col gap-8 px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-lg font-semibold">SPS</span>
            <div className="leading-tight">
              <span className="block text-xs tracking-[0.28em] text-white/60">SHOGAKUKAN</span>
              <span className="text-base tracking-[0.12em]">PUBLISHING SERVICE</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70">
            〒101-0051 東京都千代田区神田神保町2-14 SP神保町ビル<br />
            TEL 03-0000-0000 / FAX 03-0000-0001
          </p>
        </div>
        <div className="grid gap-6 text-sm text-white/70 sm:grid-cols-2">
          <div className="space-y-2">
            <p className="text-xs tracking-[0.3em] text-brand-yellow/80">SERVICE</p>
            <ul className="space-y-1">
              <li><a href="#services" className="hover:text-white">営業支援</a></li>
              <li><a href="#solutions" className="hover:text-white">販促企画</a></li>
              <li><a href="#cases" className="hover:text-white">制作・物流</a></li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-xs tracking-[0.3em] text-brand-yellow/80">ABOUT</p>
            <ul className="space-y-1">
              <li><a href="#mission" className="hover:text-white">会社概要</a></li>
              <li><a href="#news" className="hover:text-white">ニュース</a></li>
              <li><a href="#contact" className="hover:text-white">お問い合わせ</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} Shogakukan Publishing Service Co., Ltd.</div>
    </footer>
  );
}
