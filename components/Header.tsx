"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* ロゴ */}
          <Link href="/" className="text-xl font-bold">
            代々木駅前美容クリニック
          </Link>

          {/* ハンバーガーボタン */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* メニュー */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black opacity-25" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 w-64 h-full bg-white shadow-lg">
            <div className="p-6">
              <nav className="space-y-4">
                <Link href="/" className="block text-lg" onClick={() => setIsOpen(false)}>
                  ホーム
                </Link>
                <div className="py-2">
                  <Link href="/menu" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>
                    メニュー一覧
                  </Link>
                  <div className="ml-4 mt-2 space-y-2">
                    <Link href="/menu/regenerative" className="block text-sm text-gray-600 hover:text-[#81D8D0]" onClick={() => setIsOpen(false)}>
                      幹細胞エクソソーム治療
                    </Link>
                    <Link href="/menu/injection" className="block text-sm text-gray-600 hover:text-[#81D8D0]" onClick={() => setIsOpen(false)}>
                      美容注入
                    </Link>
                    <Link href="/menu/skin-treatment" className="block text-sm text-gray-600 hover:text-[#81D8D0]" onClick={() => setIsOpen(false)}>
                      美肌治療
                    </Link>
                    <Link href="/menu/iv-injection" className="block text-sm text-gray-600 hover:text-[#81D8D0]" onClick={() => setIsOpen(false)}>
                      点滴・注射
                    </Link>
                  </div>
                </div>
                <Link href="/doctor" className="block text-lg" onClick={() => setIsOpen(false)}>
                  ドクター紹介
                </Link>
                <Link href="/news" className="block text-lg" onClick={() => setIsOpen(false)}>
                  お知らせ
                </Link>
                <a
                  href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
                  className="block text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  予約
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
