"use client";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              美しさは、<br />医療の力で輝きを増す。
            </h1>
            <p className="text-xl mb-8">
              代々木駅前美容クリニックは、最新の医療技術と経験豊富な医師による<br />
              安心・安全な美容医療サービスを提供しています。
            </p>
            <Link
              href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
              className="inline-block bg-[#81D8D0] text-white px-8 py-4 rounded-full font-medium hover:bg-[#6BC4BC] transition-colors"
            >
              無料カウンセリングを予約する
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
