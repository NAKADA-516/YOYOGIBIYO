"use client";

import Image from "next/image";
import Link from "next/link";

export default function IvInjectionPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FCFC] via-white to-[#E5F4F3]" />
        <div className="absolute inset-0 bg-[url('/images/pattern-light.png')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">点滴・注射</h1>
            <p className="text-xl text-gray-600 mb-8">
              美容と健康を内側からサポートする<br />
              最新の点滴・注射メニューをご提供いたします。
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Menu Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* 高濃度ビタミンC点滴 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">高濃度ビタミンC点滴</h2>
                  <p className="text-gray-600 mb-6">
                    美白・美肌効果、疲労回復、免疫力向上など、
                    多彩な効果が期待できる人気の点滴治療です。
                    高濃度のビタミンCを直接体内へ届けます。
                  </p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">12.5g（1回）</span>
                      <span className="font-medium">¥11,000（税込）</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">25g（1回）</span>
                      <span className="font-medium">¥16,500（税込）</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">50g（1回）</span>
                      <span className="font-medium">¥27,500（税込）</span>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto rounded-xl overflow-hidden">
                  <Image
                    src="/images/iv1.jpg"
                    alt="高濃度ビタミンC点滴"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* プラセンタ注射 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">プラセンタ注射</h2>
                  <p className="text-gray-600 mb-6">
                    肝機能の改善や美肌効果、疲労回復など、
                    様々な効果が期待できる万能の注射治療です。
                    定期的な施術がおすすめです。
                  </p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">1回</span>
                      <span className="font-medium">¥2,200（税込）</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">5回セット</span>
                      <span className="font-medium">¥11,000（税込）</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">10回セット</span>
                      <span className="font-medium">¥22,000（税込）</span>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto rounded-xl overflow-hidden">
                  <Image
                    src="/images/iv2.jpg"
                    alt="プラセンタ注射"
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
                    <h3 className="text-xl font-bold mb-4">にんにく注射</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">1回</span>
                        <span className="font-medium">¥2,200（税込）</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">5回セット</span>
                        <span className="font-medium">¥11,000（税込）</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">グルタチオン点滴</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">1回</span>
                        <span className="font-medium">¥11,000（税込）</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">3回セット</span>
                        <span className="font-medium">¥27,500（税込）</span>
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
              お客様お一人おひとりの体調や目的に合わせて、<br />
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