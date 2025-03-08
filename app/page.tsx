import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 pb-20 flex items-center justify-center font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center w-full max-w-md">
        <div className="flex flex-col gap-6 w-full">
          {/* 第一个按钮：色调为 #e4b77b 渐变 */}
          <Link
            href="/contact"
            className="w-full px-6 py-4 text-center text-white bg-gradient-to-r from-[#e4b77b] to-[#d6a15f] rounded-xl hover:from-[#d6a15f] hover:to-[#c78f4d] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="text-lg font-semibold">Task1 - Go to Contact</span>
          </Link>

          {/* 第二个按钮：调整为更亮的金色渐变 */}
          <Link
            href="/providers"
            className="w-full px-6 py-4 text-center text-white bg-gradient-to-r from-[#F4E8C1] to-[#D4AF37] rounded-xl hover:from-[#D4AF37] hover:to-[#B08D28] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="text-lg font-semibold">
              Task2 - Go to Providers
            </span>
          </Link>
        </div>
        <div className="mt-8 text-center text-gray-300">
          <p className="text-sm">Explore more features and services.</p>
        </div>
      </main>
    </div>
  );
}
