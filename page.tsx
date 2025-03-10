"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="美容クリニックのヒーロー画像"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#81D8D0]/80 via-[#81D8D0]/60 to-[#B2E6E2]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute inset-0 bg-[url('/images/hero-pattern.png')] opacity-5" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl text-white drop-shadow-lg">
            <h1 className="text-5xl font-bold mb-6">
              美しさは、<br />医療の力で輝きを増す。
            </h1>
            <p className="text-xl mb-8">
              代々木駅前美容クリニックは、最新の医療技術と経験豊富な医師による<br />
              安心・安全な美容医療サービスを提供しています。
            </p>
            <Link
              href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus"
              className="inline-block bg-white/90 backdrop-blur-sm text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-white transition-colors shadow-lg"
            >
              無料カウンセリングを予約する
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FCFC] via-white to-[#E5F4F3] opacity-80" />
        <div className="absolute inset-0 bg-[url('/images/pattern-light.png')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-12">当院の特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#81D8D0]/10">
              <div className="w-12 h-12 bg-[#81D8D0] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">駅チカで通いやすい</h3>
              <p className="text-gray-600">
                代々木駅から徒歩1分。お仕事帰りやお買い物のついでにもお立ち寄りいただけます。
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#81D8D0]/10">
              <div className="w-12 h-12 bg-[#81D8D0] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">優しい女医による施術</h3>
              <p className="text-gray-600">
                女性ならではの繊細な視点と優しい施術で、患者様一人一人の美容のお悩みに寄り添います。
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#81D8D0]/10">
              <div className="w-12 h-12 bg-[#81D8D0] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <line x1="9" y1="10" x2="15" y2="10" />
                  <line x1="12" y1="7" x2="12" y2="13" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">丁寧なカウンセリング</h3>
              <p className="text-gray-600">
                ご要望やお悩みを細かくお伺いし、ライフスタイルに合わせた無理のない治療計画をご提案します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8FCFC] to-[#E5F4F3]" />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#F0F7FA]/30 to-transparent" />
        <div className="absolute left-0 bottom-0 w-1/2 h-full bg-gradient-to-r from-[#F0F7FA]/30 to-transparent" />
        <div className="absolute inset-0 bg-[url('/images/dots-pattern.png')] opacity-[0.03]" />
        <div className="container mx-auto px-4 relative">
          <div className="relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#81D8D0]/5 rounded-full blur-3xl" />
            <h2 className="text-3xl font-bold text-center mb-2 relative">NEWS</h2>
            <p className="text-gray-600 text-center mb-12 relative">お知らせ</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  date: "2024.03.20",
                  category: "お知らせ",
                  title: "春の美容キャンペーン開催のお知らせ",
                },
                {
                  date: "2024.03.15",
                  category: "休診日",
                  title: "3月末の休診日について",
                },
                {
                  date: "2024.03.01",
                  category: "新メニュー",
                  title: "最新の美容治療を導入しました",
                },
              ].map((news, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-2">
                    <time className="text-gray-500 text-sm">{news.date}</time>
                    <span className="px-3 py-1 bg-[#81D8D0]/10 text-[#81D8D0] text-sm rounded-full">
                      {news.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 hover:text-[#81D8D0] transition-colors">
                    {news.title}
                  </h3>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/news" className="inline-block text-[#81D8D0] hover:text-[#6BC4BC] transition-colors">
                すべてのお知らせを見る
                <svg className="w-4 h-4 inline-block ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PICK UP Section with Slider */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F0F7FA] via-white to-[#E8F5F5]" />
        <div className="absolute inset-0 bg-[url('/images/dots-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-2">PICK UP</h2>
          <p className="text-gray-600 text-center mb-12">特集</p>
          <div className="max-w-5xl mx-auto">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              navigation
              className="pb-12"
            >
              {[
                {
                  title: "春のスキンケア特集",
                  description: "紫外線対策と美白ケアで理想の肌へ",
                  image: "/images/skincare.jpg",
                },
                {
                  title: "エイジングケア最前線",
                  description: "最新技術で実現する自然な若々しさ",
                  image: "/images/anti-aging.jpg",
                },
                {
                  title: "美肌再生プログラム",
                  description: "肌本来の美しさを引き出す",
                  image: "/images/skin-program.jpg",
                },
              ].map((feature, index) => (
                <SwiperSlide key={index}>
                  <div className="group cursor-pointer">
                    <div className="relative h-64 rounded-2xl overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-white/90">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* MENU Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FCFC] to-white" />
        <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-[#F0F7FA]/50 to-transparent" />
        <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-[#E8F5F5]/50 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-2">MENU</h2>
          <p className="text-gray-600 text-center mb-12">施術紹介</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "幹細胞エクソソーム治療",
                description: "最先端の再生医療で美容効果を促進",
                items: ["乳歯髄点滴", "maxNFC筋注", "ヒト幹細胞培養上清液", "プラセンタ"],
                path: "/menu/regenerative",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v8M8 12h8" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 10v4M10 12h4" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "美容注入",
                description: "ヒアルロン酸やボトックスで自然な若返り",
                items: ["ヒアルロン酸注入", "ボトックス注射", "SUNEKOS（スネコス）", "ニードルピーリング"],
                path: "/menu/injection",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                    <path d="M12 6v12M8 12h8" strokeLinecap="round" />
                    <path d="M15 9l-3 3M12 12l-3-3" strokeLinecap="round" />
                    <path d="M15 15l-3-3M12 12l-3 3" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "美肌治療",
                description: "肌質改善と美肌維持のための施術",
                items: ["ダーマペン4", "ヴェルベットスキン", "ポテンツァ", "ケミカルピーリング"],
                path: "/menu/skin-treatment",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M8 14s2 2 4 2 4-2 4-2" strokeLinecap="round" />
                    <path d="M9 9h.01M15 9h.01" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 16v.01M8 12h.01M16 12h.01" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "点滴・注射",
                description: "美容・美肌効果を高める点滴治療",
                items: ["高濃度ビタミンC点滴", "白玉点滴", "にんにく注射", "プラセンタ注射"],
                path: "/menu/iv-injection",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 8h-2.8a2 2 0 0 1-1.4-.6l-1.6-1.6a2 2 0 0 0-1.4-.6H11a2 2 0 0 0-1.4.6L8 7.4a2 2 0 0 1-1.4.6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z" />
                    <path d="M12 16v.01M12 13v.01M12 10v.01" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 16h8" strokeLinecap="round" />
                  </svg>
                ),
              },
            ].map((menu, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-8 hover:shadow-md transition-all group border border-[#81D8D0]/10">
                <div className="w-12 h-12 bg-[#81D8D0]/10 rounded-xl flex items-center justify-center mb-6 text-[#81D8D0] group-hover:bg-[#81D8D0] group-hover:text-white transition-colors">
                  {menu.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{menu.title}</h3>
                <p className="text-gray-600 mb-4">{menu.description}</p>
                <ul className="space-y-2 mb-6">
                  {menu.items.map((item, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#81D8D0] rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={menu.path} 
                  className="text-[#81D8D0] hover:text-[#6BC4BC] transition-colors inline-flex items-center"
                >
                  詳しく見る
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTOR Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F8FCFC]" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-[#E5F4F3]/30" />
        <div className="absolute inset-0 bg-[url('/images/subtle-dots.png')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-2">DOCTOR</h2>
          <p className="text-gray-600 text-center mb-12">医師紹介</p>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm overflow-hidden border border-[#81D8D0]/10">
              <div className="grid md:grid-cols-2">
                <div className="relative h-[600px] md:h-auto">
                  <Image
                    src="/images/doctor.jpg"
                    alt="院長 吉川とも子"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <div className="mb-8">
                    <span className="text-[#81D8D0] font-medium">院長</span>
                    <h3 className="text-2xl font-bold mt-1">吉川 とも子</h3>
                    <p className="text-gray-500">Tomoko Yoshikawa</p>
                  </div>
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">資格/所属</h4>
                    <ul className="space-y-2">
                      <li className="text-gray-600">代々木駅前美容クリニック院長</li>
                      <li className="text-gray-600">ボトックスビスタ認定医</li>
                      <li className="text-gray-600">ジュビダームビスタ認定医</li>
                      <li className="text-gray-600">山口大学医学部卒</li>
                    </ul>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      代々木駅前美容クリニックは2023年6月に開業しました。以前は熊本県の美容皮膚科クリニックで院長を務めていましたが、2024年3月より当院の院長に就任させていただきました。
                    </p>
                    <p>
                      診療科目は美容皮膚科です。美容エステサロンとは異なり、医師による美容面のお悩み相談にも細かく対応しているのが当院の特徴の一つです。また、内服や注射、スキンケア商品なども扱っております。
                    </p>
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
        <div className="absolute inset-0 bg-[url('/images/wave-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold mb-6">まずは無料カウンセリングから</h2>
          <p className="text-gray-600 mb-8">
            経験豊富な医師が丁寧にご説明いたします。<br />
            お気軽にご予約ください。
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
      </section>
    </div>
  );
}
