import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import JoinCta from "@/components/JoinCta";

export const metadata: Metadata = { title: "Partners | Regenloop" };

export default function Partners() {
  return (
    <>
      <PageHero
        breadcrumb="Our Ecosystem"
        title="Commercialization Through Committed Offtake"
        subtitle="A de-risked pipeline needs a buyer for the energy it produces — that's the role our commercialization partnership plays."
      />

      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <ScrollReveal className="rounded-3xl border border-border bg-white p-8 sm:p-10 shadow-sm">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
            <h2 className="text-xl font-bold text-navy">
              Electrify Microgrid Limited (EML)
            </h2>
            <span className="text-xs font-semibold uppercase tracking-wide text-brand">
              Commercialization Partner
            </span>
          </div>
          <p className="text-text-secondary leading-relaxed">
            Regenloop&rsquo;s power-generation systems — including the
            Ogbomoso and Shezoko sites — will sell electricity to
            EML&rsquo;s mini-grid network. This committed offtake channel
            de-risks and accelerates pipeline conversion to revenue,
            giving Regenloop a confirmed buyer as new systems come online
            rather than relying on spot demand.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-10 text-center">
          <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Our growth strategy is to replicate this model across
            Nigeria&rsquo;s agro-processing and industrial waste streams —
            pairing new digester deployments with confirmed energy
            offtakers from the outset.
          </p>
        </ScrollReveal>
      </section>

      <JoinCta />
    </>
  );
}
