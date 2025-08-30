import { BookOpen, Heart, Shield, Plug } from 'lucide-react';

function FeatureCard({ icon: Icon, title, children }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] transition hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.25)]">
      <div className="absolute inset-0 pointer-events-none opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-br from-neutral-50 via-white to-neutral-50" />
      <div className="relative">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-700">{children}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative w-full border-t border-neutral-200/80 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-widest text-neutral-500">Core ethos</p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-4xl">
            Airy, authoritative, and deeply intuitive
          </h2>
          <p className="mt-4 text-neutral-700">
            Sillion brings scholarly rigor to AI while caring for the human mission of teaching. A clean, spacious design that gets out of the way and lets your work shine.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={BookOpen} title="Scholarly rigor">
            Every response cites the source of truth from your syllabus, slides, readings, and LMS. Verifiable, auditable, and aligned with your curriculum.
          </FeatureCard>
          <FeatureCard icon={Heart} title="Empathetic technology">
            Thoughtful workflows that reduce repetitive tasks and burnout. Draft rubrics, generate study guides, and clarify misconceptions without losing your voice.
          </FeatureCard>
          <FeatureCard icon={Plug} title="Seamless integration">
            Plug into Canvas and common SIS/LMS systems with secure, permissioned access. Onboard in days, not months—no workflow upheaval required.
          </FeatureCard>
          <FeatureCard icon={Shield} title="Security by design">
            FERPA-aware data practices, SSO and role-based access, and private model routing. Your content stays yours—full stop.
          </FeatureCard>
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="h-full rounded-2xl border border-neutral-200 p-6">
              <div className="text-sm text-neutral-600">
                "Sillion doesn’t just answer questions—it teaches. Every citation points back to the exact line in my lecture notes."
              </div>
              <div className="mt-4 text-sm font-medium text-neutral-900">Professor A. Patel</div>
              <div className="text-sm text-neutral-600">Department Chair, Humanities</div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-neutral-50/60 p-6 sm:flex-row">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900">Ready to bring Sillion to your campus?</h3>
            <p className="text-sm text-neutral-700">We’ll tailor a deployment plan for your courses and existing systems.</p>
          </div>
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800">Talk to our team</a>
        </div>
      </div>
    </section>
  );
}
