import Link from 'next/link'

export default function SectionRecruit() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1FAA7B]/90 via-[#1FAA7B]/80 to-[#F38B1A]/70" />
      <div className="mx-auto flex max-w-[var(--content-w)] items-center justify-between px-6 text-white">
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-[0.4em] text-white/80">RECRUIT</p>
          <h2 className="mt-6 text-[36px] font-semibold leading-tight">本と人をつなぐ仕事を、<br />あなたのキャリアに。</h2>
          <p className="mt-6 text-sm leading-relaxed text-white/90">
            書店様と出版社を結ぶ最前線で、多様なメンバーが活躍しています。仕事内容や福利厚生、社員インタビューなど、採用に関する最新情報はこちらからご覧ください。
          </p>
        </div>
        <div className="flex flex-col items-end gap-4">
          <Link
            href="/recruit/"
            className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1FAA7B] shadow-soft transition hover:bg-white/90"
          >
            採用サイトを見る
            <span aria-hidden>›</span>
          </Link>
          <Link
            href="/recruit/workstyle/"
            className="inline-flex items-center gap-3 rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-[#1FAA7B]"
          >
            仕事内容を知る
            <span aria-hidden>›</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
