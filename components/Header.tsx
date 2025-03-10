"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* ロゴ */}
        <Link href="/" className="text-xl font-bold">
          代々木駅前美容クリニック
        </Link>

        {/* ハンバーガーボタン */}
        <button 
          onClick={() => setIsOpen(true)}
          className="p-2"
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

        {/* メニュー */}
        {isOpen && (
          <>
            {/* 背景オーバーレイ */}
            <div 
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* サイドメニュー */}
            <div className="fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-lg">
              {/* 閉じるボタン */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2"
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

              {/* メニューリスト */}
              <nav className="pt-16 px-6">
                <Link 
                  href="/" 
                  className="block py-3 text-gray-800 hover:text-[#81D8D0]"
                  onClick={() => setIsOpen(false)}
                >
                  ホーム
                </Link>
                <Link 
                  href="/menu" 
                  className="block py-3 text-gray-800 hover:text-[#81D8D0]"
                  onClick={() => setIsOpen(false)}
                >
                  メニュー
                </Link>
                <Link 
                  href="/doctor" 
                  className="block py-3 text-gray-800 hover:text-[#81D8D0]"
                  onClick={() => setIsOpen(false)}
                >
                  ドクター紹介
                </Link>
                <Link 
                  href="/news" 
                  className="block py-3 text-gray-800 hover:text-[#81D8D0]"
                  onClick={() => setIsOpen(false)}
                >
                  お知らせ
                </Link>
                <a 
                  href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
                  className="block py-3 text-gray-800 hover:text-[#81D8D0]"
                  onClick={() => setIsOpen(false)}
                >
                  予約
                </a>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
