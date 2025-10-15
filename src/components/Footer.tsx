import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white py-12">
      <div className="mx-auto flex max-w-[var(--content-w)] items-start justify-between px-6">
        <div className="space-y-4">
          <Link href="/" className="block">
            <Image
              src="/assets/images/common/logo_footer.svg"
              alt="小学館パブリッシング・サービス"
              width={200}
              height={82}
              className="h-auto w-[200px]"
            />
          </Link>
          <div className="text-xs text-neutral-500">
            〒101-8001 東京都千代田区一ツ橋2-3-1<br />
            TEL 03-3230-9100（代表）
          </div>
        </div>
        <div className="flex gap-16 text-sm text-neutral-600">
          <div className="space-y-2">
            <div className="font-semibold text-neutral-900">サイトメニュー</div>
            <ul className="space-y-2">
              <li>
                <Link className="hover:underline" href="/">
                  トップ
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/business/">
                  事業紹介
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/company/">
                  会社情報
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/recruit/">
                  採用情報
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-neutral-900">各種リンク</div>
            <ul className="space-y-2">
              <li>
                <Link className="hover:underline" href="/news/">
                  お知らせ
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/contact/">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/privacy/">
                  個人情報保護方針
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/sitemap/">
                  サイトマップ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-neutral-200 pt-6 text-center text-xs text-neutral-500">
        &copy; SHOGAKUKAN PUBLISHING SERVICE CO., LTD.
      </div>
    </footer>
  )
}
