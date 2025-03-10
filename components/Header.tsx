'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* ロゴ */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          代々木駅前美容クリニック
        </Link>

        {/* ハンバーガーメニュー */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden p-2"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* サイドメニュー */}
        {isOpen && (
          <div className="fixed inset-0 z-50">
            {/* オーバーレイ */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsOpen(false)}
            />
            
            {/* メニュー */}
            <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg">
              <div className="p-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                
                <nav className="mt-8 space-y-4">
                  <Link
                    href="/"
                    className="block py-2 text-gray-600 hover:text-[#81D8D0]"
                    onClick={() => setIsOpen(false)}
                  >
                    ホーム
                  </Link>
                  <Link
                    href="/menu"
                    className="block py-2 text-gray-600 hover:text-[#81D8D0]"
                    onClick={() => setIsOpen(false)}
                  >
                    メニュー
                  </Link>
                  <Link
                    href="/doctor"
                    className="block py-2 text-gray-600 hover:text-[#81D8D0]"
                    onClick={() => setIsOpen(false)}
                  >
                    ドクター紹介
                  </Link>
                  <Link
                    href="/news"
                    className="block py-2 text-gray-600 hover:text-[#81D8D0]"
                    onClick={() => setIsOpen(false)}
                  >
                    お知らせ
                  </Link>
                  <a
                    href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
                    className="block py-2 text-gray-600 hover:text-[#81D8D0]"
                    onClick={() => setIsOpen(false)}
                  >
                    予約
                  </a>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
