import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "美容クリニック",
  description: "美容医療の専門クリニック",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#81D8D0]/10">
          <div className="container mx-auto px-4">
            <div className="h-24 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#81D8D0] to-[#B2E6E2] flex items-center justify-center shadow-lg shadow-[#81D8D0]/20 group-hover:shadow-[#81D8D0]/40 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2zm0 2.84L19.5 12H18v7h-4v-6H8v6H4v-7H2.5L12 4.84z"/>
                  </svg>
                </div>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <div className="text-sm font-medium text-gray-500 tracking-wider">医療法人社団BYS</div>
                  <div className="text-xl font-bold text-gray-800">代々木駅前美容クリニック</div>
                </div>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/clinic" className="relative text-gray-600 hover:text-[#81D8D0] transition-colors duration-300 group">
                  クリニック紹介
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#81D8D0] group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="/menu" className="relative text-gray-600 hover:text-[#81D8D0] transition-colors duration-300 group">
                  メニュー・料金表
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#81D8D0] group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="/calendar" className="relative text-gray-600 hover:text-[#81D8D0] transition-colors duration-300 group">
                  診療カレンダー
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#81D8D0] group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link
                  href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
                  className="flex items-center gap-2 px-4 py-2 bg-[#81D8D0] text-white rounded-full hover:bg-[#6BC4BC] transition duration-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z"/>
                  </svg>
                  WEB予約
                </Link>
                <a
                  href="https://page.line.me/368ztrwg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#06C755] text-white rounded-full hover:bg-[#05B74C] transition duration-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.85 5.85l-1.44 1.44c-.39.39-.39 1.02 0 1.41l1.44 1.44c.39.39.39 1.02 0 1.41l-1.44 1.44c-.39.39-1.02.39-1.41 0l-1.44-1.44c-.39-.39-1.02-.39-1.41 0l-1.44 1.44c-.39.39-1.02.39-1.41 0l-1.44-1.44c-.39-.39-.39-1.02 0-1.41l1.44-1.44c.39-.39.39-1.02 0-1.41L7.85 7.85c-.39-.39-.39-1.02 0-1.41l1.44-1.44c.39-.39 1.02-.39 1.41 0l1.44 1.44c.39.39 1.02.39 1.41 0l1.44-1.44c.39-.39 1.02-.39 1.41 0l1.44 1.44c.39.39.39 1.02 0 1.41z"/>
                  </svg>
                  LINE予約
                </a>
                <a
                  href="tel:03-5315-0201"
                  className="flex items-center gap-2 px-6 py-2 border-2 border-[#81D8D0] text-[#81D8D0] rounded-full hover:bg-[#81D8D0] hover:text-white transition duration-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                  03-5315-0201
                </a>
              </nav>
            </div>
          </div>
        </header>
        
        <div className="pt-24">
          {children}
        </div>

        <footer className="bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 py-16">
            {/* クリニック情報と地図 */}
            <div className="max-w-7xl mx-auto mb-16 bg-gradient-to-br from-[#E8F5F5] to-[#F0F7FA] rounded-3xl p-16">
              <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">医療法人社団BYS</h2>
              <h3 className="text-xl text-gray-600 text-center mb-12">代々木駅前美容クリニック</h3>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* クリニック情報 */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 relative overflow-hidden border border-[#81D8D0]/20">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#81D8D0] to-[#B2E6E2]"></div>
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#81D8D0]/10 flex items-center justify-center flex-shrink-0 border border-[#81D8D0]/20">
                        <svg className="w-5 h-5 text-[#81D8D0]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">所在地</h4>
                        <p className="text-gray-600">
                          〒151-0051<br />
                          渋谷区千駄ヶ谷5-20-16 Face代々木
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#81D8D0]/10 flex items-center justify-center flex-shrink-0 border border-[#81D8D0]/20">
                        <svg className="w-5 h-5 text-[#81D8D0]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">診療時間</h4>
                        <p className="text-gray-600">11:00 ~ 19:00</p>
                        <p className="text-sm text-gray-500 mt-1">休診日については不定休のため、お電話等でお問い合わせください。</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#81D8D0]/10 flex items-center justify-center flex-shrink-0 border border-[#81D8D0]/20">
                        <svg className="w-5 h-5 text-[#81D8D0]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">アクセス</h4>
                        <p className="text-gray-600">JR代々木駅東口徒歩1分<br />新宿からも徒歩圏内</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#81D8D0]/10 flex items-center justify-center flex-shrink-0 border border-[#81D8D0]/20">
                        <svg className="w-5 h-5 text-[#81D8D0]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">お問い合わせ</h4>
                        <a href="tel:03-5315-0201" className="text-[#81D8D0] hover:text-[#6BC4BC] transition-colors">
                          03-5315-0201
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 地図 */}
                <div className="rounded-2xl overflow-hidden shadow-lg h-[500px] w-full relative bg-white/80 p-1">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#81D8D0]/5 to-transparent z-10 pointer-events-none"></div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.828030556612!2d139.70074037574583!3d35.68348227258125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd4741c6245%3A0x51d797f499bb44d9!2z5Luj44CF5pyo6aeF!5e0!3m2!1sja!2sjp!4v1710955439044!5m2!1sja!2sjp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* フッターメニュー */}
            <div className="grid md:grid-cols-4 gap-8 border-t border-gray-200 pt-12">
              <div>
                <Link href="/" className="inline-block group">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#81D8D0] transition-colors">
                    代々木駅前美容クリニック
                  </h3>
                  <p className="text-gray-600 text-sm">
                    最新の医療技術と経験豊富な医師による安心・安全な美容医療サービスを提供しています。
                  </p>
                </Link>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-4">診療メニュー</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/menu/beauty-injection" className="text-sm text-gray-600 hover:text-[#81D8D0] transition-colors">
                      ヒアルロン酸注入
                    </Link>
                  </li>
                  <li>
                    <Link href="/menu" className="text-sm text-gray-600 hover:text-[#81D8D0] transition-colors">
                      料金一覧
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-4">クリニックについて</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/clinic" className="text-sm text-gray-600 hover:text-[#81D8D0] transition-colors">
                      クリニック紹介
                    </Link>
                  </li>
                  <li>
                    <Link href="/reservation" className="text-sm text-gray-600 hover:text-[#81D8D0] transition-colors">
                      ご予約について
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-4">お問い合わせ</h4>
                <div className="space-y-4">
                  <a
                    href="tel:03-5315-0201"
                    className="flex items-center gap-2 text-[#81D8D0] hover:text-[#6BC4BC] transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                    03-5315-0201
                  </a>
                  <div className="flex gap-4">
                    <Link
                      href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
                      className="inline-flex items-center gap-2 text-sm text-[#81D8D0] hover:text-[#6BC4BC] transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z"/>
                      </svg>
                      WEB予約
                    </Link>
                    <a
                      href="https://page.line.me/368ztrwg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#06C755] hover:text-[#05B74C] transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.85 5.85l-1.44 1.44c-.39.39-.39 1.02 0 1.41l1.44 1.44c.39.39.39 1.02 0 1.41l-1.44 1.44c-.39.39-1.02.39-1.41 0l-1.44-1.44c-.39-.39-1.02-.39-1.41 0l-1.44 1.44c-.39.39-1.02.39-1.41 0l-1.44-1.44c-.39-.39-.39-1.02 0-1.41l1.44-1.44c.39-.39.39-1.02 0-1.41L7.85 7.85c-.39-.39-.39-1.02 0-1.41l1.44-1.44c.39-.39 1.02-.39 1.41 0l1.44 1.44c.39.39 1.02.39 1.41 0l1.44-1.44c.39-.39 1.02-.39 1.41 0l1.44 1.44c.39.39.39 1.02 0 1.41z"/>
                      </svg>
                      LINE予約
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500">
                © 2024 医療法人社団BYS 代々木駅前美容クリニック All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
