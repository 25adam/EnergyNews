import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-96 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1400x500')",
          backgroundAttachment: 'fixed'
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl font-bold animate__animated animate__fadeInDown">
          Featured: Renewable Energy Gains Momentum Worldwide
        </h1>
        <p className="mt-4 text-lg animate__animated animate__fadeInUp animate__delay-1s">
          A deep dive into record investments and breakthrough technologies reshaping the energy landscape.
        </p>
        <Link href="/article1">
          <a className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold animate__animated animate__fadeInUp animate__delay-2s">
            Read Full Article
          </a>
        </Link>
      </div>
    </section>
  );
}
