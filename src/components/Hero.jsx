import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white" />

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 md:px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-5xl">
            Scholarly AI that respects the craft of teaching
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-neutral-700">
            Sillion bridges rigorous research with empathetic technology. We ground every answer in your course materials and integrate seamlessly with the systems you already trust.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800">
              Request a demo
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-400">
              Explore features
            </a>
          </div>
          <p className="mt-6 text-sm text-neutral-600">
            Built for higher-ed and K-12. Designed with instructors, for instructors.
          </p>
        </div>
      </div>
    </section>
  );
}
