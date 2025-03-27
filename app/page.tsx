"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
          saveur (hbd conrad!)
        </code>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <span>Powered by</span>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </footer>
    </div>
  );
}
