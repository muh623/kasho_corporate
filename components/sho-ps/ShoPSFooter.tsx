export default function ShoPSFooter() {
  return (
    <footer className="mt-24 border-t border-neutral-200">
      <div className="mx-auto max-w-[var(--content-w)] px-6 py-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4">
            <a href="/" className="block">
              <img
                src="/assets/images/common/logo_footer.svg"
                alt="小学館パブリッシング・サービス"
                width={168}
                height={70}
                className="h-[70px] w-auto"
              />
            </a>
            <p className="mt-4 text-sm">
              <span className="font-semibold">本社</span><br />
              〒101-0051<br />
              東京都千代田区神田神保町1-15
            </p>
          </div>

          <nav className="col-span-8 grid grid-cols-3 gap-6">
            <div>
              <p className="font-medium">事業紹介</p>
              <ul className="mt-2 space-y-1">
                <li><a href="/business/" className="hover:underline">事業内容</a></li>
                <li><a href="/policy/" className="hover:underline">私たちが大切にしていること</a></li>
              </ul>
            </div>
            <div>
              <p className="font-medium">会社情報</p>
              <ul className="mt-2 space-y-1">
                <li><a href="/message/" className="hover:underline">代表メッセージ</a></li>
                <li><a href="/interview/" className="hover:underline">代表対談</a></li>
                <li><a href="/company/" className="hover:underline">会社概要</a></li>
              </ul>
            </div>
            <div>
              <p className="font-medium">採用情報</p>
              <ul className="mt-2 space-y-1">
                <li><a href="/recruit/" className="hover:underline">採用トップ</a></li>
                <li><a href="/recruit/workstyle/" className="hover:underline">仕事内容/部署紹介</a></li>
                <li><a href="/recruit/welfare/" className="hover:underline">福利厚生</a></li>
                <li><a href="/recruit/faq/" className="hover:underline">よくあるご質問</a></li>
                <li><a href="/recruit/data/" className="hover:underline">数字で見る</a></li>
              </ul>
            </div>

            <div className="col-span-3 mt-4 flex items-center justify-between">
              <ul className="flex gap-6">
                <li><a href="/news/" className="underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-800">お知らせ</a></li>
                <li><a href="/contact/" className="underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-800">お問い合わせ</a></li>
                <li><a href="/privacy/" className="underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-800">プライバシーポリシー</a></li>
              </ul>
              <a href="#body" className="text-sm underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-800">PAGE TOP</a>
            </div>
          </nav>
        </div>

        <div className="mt-8 flex items-center justify-between text-xs text-neutral-500">
          <small>©2024 Shogakukan Publishing Services Inc.</small>
        </div>
      </div>
    </footer>
  )
}
