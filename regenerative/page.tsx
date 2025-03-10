export default function RegenerativePage() {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* ヘッダー部分 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">幹細胞エクソソーム治療</h1>
          <p className="text-gray-600">最先端の再生医療で美容効果を促進</p>
        </div>

        {/* メニューリスト */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* メニュー1 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">乳歯髄点滴</h2>
              <p className="text-gray-600 mb-4">
                乳歯から抽出した幹細胞を利用し、肌の再生と若返りを促進します。
                自然な方法で美しさを引き出す最新の治療法です。
              </p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-sm text-gray-500">施術時間: 約60分</p>
                  <p className="text-lg font-bold text-[#81D8D0]">¥150,000（税込）</p>
                </div>
                <a 
                  href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus" 
                  className="inline-block bg-[#81D8D0] text-white px-6 py-2 rounded-full hover:bg-[#6BC4BC] transition-colors"
                >
                  予約する
                </a>
              </div>
            </div>

            {/* メニュー2 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">maxNFC筋注</h2>
              <p className="text-gray-600 mb-4">
                高濃度の成長因子を含む特殊な培養液を使用し、
                肌の弾力性と若々しさを改善します。
              </p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-sm text-gray-500">施術時間: 約45分</p>
                  <p className="text-lg font-bold text-[#81D8D0]">¥120,000（税込）</p>
                </div>
                <a 
                  href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus" 
                  className="inline-block bg-[#81D8D0] text-white px-6 py-2 rounded-full hover:bg-[#6BC4BC] transition-colors"
                >
                  予約する
                </a>
              </div>
            </div>

            {/* メニュー3 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">ヒト幹細胞培養上清液</h2>
              <p className="text-gray-600 mb-4">
                ヒト幹細胞から抽出した成長因子を豊富に含む美容液で、
                肌の再生力を高め、ハリと艶を取り戻します。
              </p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-sm text-gray-500">施術時間: 約30分</p>
                  <p className="text-lg font-bold text-[#81D8D0]">¥80,000（税込）</p>
                </div>
                <a 
                  href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus" 
                  className="inline-block bg-[#81D8D0] text-white px-6 py-2 rounded-full hover:bg-[#6BC4BC] transition-colors"
                >
                  予約する
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
