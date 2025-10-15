import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans_JP } from "next/font/google";

export const notojp = Noto_Sans_JP({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-noto",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>{` html { font-family: ${notojp.style.fontFamily}; } `}</style>
            <Component {...pageProps} />
        </>
    )
}