import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import JoinCta from "@/components/JoinCta";

export const metadata: Metadata = { title: "Impact | Regenloop" };

const ENVIRONMENT = [
  "Organic waste diverted from unmanaged disposal",
  "Renewable biogas produced",
  "Reduced dependence on diesel",
  "Lower emissions",
];

const ECONOMIC = [
  "Lower energy costs",
  "More reliable energy supply",
  "Improved industrial productivity",
  "New value from waste",
];

export default function Impact() {
  return (
    <>
      <PageHero
        breadcrumb="Impact"
        title="Environmental Impact and Economic Value, Together"
        subtitle="Regenloop aims to demonstrate that waste can become an economically valuable energy resource — not a cost to be managed away."
      />

      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20 grid gap-6 sm:grid-cols-2">
        <ScrollReveal className="rounded-2xl border border-border bg-white p-8 shadow-sm">
          <h2 className="text-lg font-bold text-brand mb-5">Environment</h2>
          <ol className="space-y-4">
            {ENVIRONMENT.map((e, i) => (
              <li key={e} className="flex items-start gap-3 text-sm text-text-secondary">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">
                  {i + 1}
                </span>
                <span className="pt-0.5">{e}</span>
              </li>
            ))}
          </ol>
        </ScrollReveal>
        <ScrollReveal className="rounded-2xl border border-border bg-white p-8 shadow-sm">
          <h2 className="text-lg font-bold text-brand mb-5">Economic</h2>
          <ul className="space-y-4">
            {ECONOMIC.map((e) => (
              <li key={e} className="flex items-start gap-3 text-sm text-text-secondary">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {e}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20 text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Circular Economy
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              A Closed Loop, By Design
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm sm:text-base font-semibold">
              {["Waste", "Biogas", "Energy", "Digestate", "Agriculture"].map((step, i, arr) => (
                <span key={step} className="flex items-center gap-3">
                  <span className="rounded-full border border-accent/40 bg-white/5 px-5 py-2.5">
                    {step}
                  </span>
                  {i < arr.length - 1 && <span className="text-accent">→</span>}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <JoinCta />
    </>
  );
}
