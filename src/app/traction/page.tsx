import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import JoinCta from "@/components/JoinCta";

export const metadata: Metadata = { title: "Traction & Pipeline | Regenloop" };

const TIMELINE = [
  {
    date: "December 2025",
    title: "5 m³ Pilot System",
    location: "Epe, Lagos",
    text: "Regenloop's first deployed digester, validating the core process at pilot scale.",
  },
  {
    date: "August 2026",
    title: "40 m³ Industrial System",
    location: "IfGreen Industries, Epe",
    text: "First commercial-scale deployment, moving Regenloop beyond experimentation into industrial application.",
  },
];

const PIPELINE = [
  { name: "Ogbomoso, Oyo", size: "700 m³ system", power: "200 → 400 kW potential", stage: "Early development" },
  { name: "Shezoko, FCT", size: "200 m³ system", power: "30 kW", stage: "Early development" },
  { name: "Ekiti", size: "500 m³ system", power: "—", stage: "Preliminary engagement" },
  { name: "Osun", size: "1,200 m³ system", power: "—", stage: "Preliminary engagement" },
];

export default function Traction() {
  return (
    <>
      <PageHero
        breadcrumb="Traction"
        title="From Pilot to Commercial Deployment"
        subtitle="Regenloop has progressed beyond experimentation into real, revenue-generating industrial application — with a growing pipeline anchored by a committed offtake partnership."
      />

      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <ScrollReveal stagger={0.15} className="grid gap-6 sm:grid-cols-2 mb-14">
          {TIMELINE.map((t) => (
            <div key={t.title} className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-2">
                {t.date}
              </p>
              <h3 className="text-lg font-bold text-navy mb-1">{t.title}</h3>
              <p className="text-sm font-semibold text-text-secondary mb-3">{t.location}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{t.text}</p>
            </div>
          ))}
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 mb-16">
          <div className="rounded-2xl bg-navy text-white p-6 sm:p-8 text-center">
            <AnimatedCounter value={300} suffix=" kg/day" className="text-2xl sm:text-3xl font-bold text-accent" />
            <p className="mt-3 text-sm text-white/70">Scalable processing capacity, up from ~20 kg/day currently</p>
          </div>
          <div className="rounded-2xl bg-navy text-white p-6 sm:p-8 text-center">
            <AnimatedCounter value={40} suffix="%" className="text-2xl sm:text-3xl font-bold text-accent" />
            <p className="mt-3 text-sm text-white/70">Validated cost advantage of biogas vs. diesel, equivalent heating output</p>
          </div>
        </div>

        <ScrollReveal className="text-center mb-10 max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">
            Market & Pipeline
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">
            Scaling Across Agricultural and Industrial Clusters
          </h2>
        </ScrollReveal>
        <ScrollReveal stagger={0.12} className="grid gap-6 sm:grid-cols-2 mb-14">
          {PIPELINE.map((p) => (
            <div key={p.name} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-navy">{p.name}</h3>
                <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
                  {p.stage}
                </span>
              </div>
              <p className="text-sm text-text-secondary">{p.size}{p.power !== "—" ? ` · ${p.power}` : ""}</p>
            </div>
          ))}
        </ScrollReveal>

        <div className="rounded-3xl bg-surface border border-border p-8 sm:p-10 text-center">
          <h3 className="font-bold text-navy mb-3">Commercialization Partner — Electrify Microgrid Limited (EML)</h3>
          <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Regenloop&rsquo;s power-generation systems, including Ogbomoso
            and Shezoko, will sell electricity to EML&rsquo;s mini-grid
            network — a committed offtake channel that de-risks and
            accelerates pipeline conversion to revenue.
          </p>
        </div>
      </section>

      <JoinCta />
    </>
  );
}
