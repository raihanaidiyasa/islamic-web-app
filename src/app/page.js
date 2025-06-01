// app/page.js
import Link from 'next/link';
import Image from 'next/image'; // Jika Anda masih ingin menggunakan Image

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Anda bisa memodifikasi atau menghapus bagian atas ini jika mau */}
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/* ... konten default ... */}
      </div>

      {/* Tambahkan navigasi Anda di sini */}
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <h1 className="col-span-full mb-4 text-2xl font-semibold">Selamat Datang di Website Ibadah</h1>
        <p className="col-span-full mb-8">Pilih ibadah yang ingin Anda pelajari:</p>

        <Link
          href="/thaharah"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-xl font-semibold">
            Thaharah{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Pelajari panduan lengkap thaharah.
          </p>
        </Link>

        <Link
          href="/shalat-wajib"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-xl font-semibold">
            Shalat Wajib{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Pelajari panduan lengkap shalat wajib.
          </p>
        </Link>

        <Link
          href="/shalat-sunnah"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-xl font-semibold">
            Shalat Sunnah{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Pelajari panduan lengkap shalat sunnah.
          </p>
        </Link>

        <Link
          href="/khutbah"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-xl font-semibold">
            Khutbah{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Pelajari panduan lengkap khutbah.
          </p>
        </Link>

        <Link
          href="/pengurusan-jenazah"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-xl font-semibold">
            Pengurusan Jenazah{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Pelajari panduan lengkap pengurusan jenazah.
          </p>
        </Link>

        <Link
          href="/penyembelihan-hewan"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-xl font-semibold">
            Penyembelihan Hewan{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Pelajari panduan lengkap penyembelihan hewan.
          </p>
        </Link>

        <Link
          href="/zakat"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-xl font-semibold">
            Zakat{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Pelajari panduan lengkap zakat.
          </p>
        </Link>

        <Link
          href="/haji"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-xl font-semibold">
            Haji{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Pelajari panduan lengkap haji.
          </p>
        </Link>

      </div>

      {/* Anda bisa memodifikasi atau menghapus bagian bawah ini jika mau */}
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full ...">
        {/* ... konten default ... */}
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
         {/* ... konten default ... */}
      </div>
    </main>
  );
}