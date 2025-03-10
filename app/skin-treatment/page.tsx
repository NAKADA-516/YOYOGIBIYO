"use client";

import Image from "next/image";
import Link from "next/link";

export default function SkinTreatmentPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FCFC] via-white to-[#E5F4F3]" />
        <div className="absolute inset-0 bg-[url('/images/pattern-light.png')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">美肌治療</h1>
            <p className="text-xl text-gray-600 mb-8">
              お肌本来の美しさを引き出す<br />
              最新の美肌治療をご提供いたします。
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Menu Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* ダーマペン4 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">ダーマペン4</h2>
                  <p className="text-gray-600 mb-6">
                    最新の美容医療機器を使用し、お肌に微細な穴を開けることで
                    コラーゲンの生成を促進。ニキビ跡や毛穴、小じわなどの
                    改善に効果的です。
                  </p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">顔全体（1回）</span>
                      <span className="font-medium">¥27,500（税込）</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">3回コース</span>
                      <span className="font-medium">¥74,250（税込）</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">5回コース</span>
                      <span className="font-medium">¥110,000（税込）</span>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto rounded-xl overflow-hidden">
                  <Image
                    src="/images/skin1.jpg"
                    alt="ダーマペン4"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* ケミカルピーリング */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">ケミカルピーリング</h2>
                  <p className="text-gray-600 mb-6">
                    肌表面の古い角質を除去し、肌のターンオーバーを促進。
                    くすみの改善やニキビ予防、美白効果が期待できます。
                  </p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">1回</span>
                      <span className="font-medium">¥11,000（税込）</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">3回コース</span>
                      <span className="font-medium">¥27,500（税込）</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">5回コース</span>
                      <span className="font-medium">¥44,000（税込）</span>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto rounded-xl overflow-hidden">
                  <Image
                    src="/images/skin2.jpg"
                    alt="ケミカルピーリング"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* その他のメニュー */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6">その他のメニュー</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">フォトフェイシャル</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">1回</span>
                        <span className="font-medium">¥16,500（税込）</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">3回コース</span>
                        <span className="font-medium">¥41,250（税込）</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">ハイドラフェイシャル</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">1回</span>
                        <span className="font-medium">¥16,500（税込）</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">3回コース</span>
                        <span className="font-medium">¥41,250（税込）</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F0F7FA] via-white to-[#F0F7FA]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">無料カウンセリングで詳しくご説明いたします</h2>
            <p className="text-gray-600 mb-8">
              お客様お一人おひとりの肌状態や目的に合わせて、<br />
              最適な治療プランをご提案いたします。
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link
                href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
                className="inline-block bg-[#81D8D0] text-white px-8 py-4 rounded-full font-medium hover:bg-[#6BC4BC] transition-colors"
              >
                無料カウンセリングを予約する
              </Link>
              <a
                href="tel:03-5315-0201"
                className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-colors"
              >
                03-5315-0201
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 