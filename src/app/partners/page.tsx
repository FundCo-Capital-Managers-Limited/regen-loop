import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import JoinCta from "@/components/JoinCta";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Regenloop's commercialization partnership with Electrify Microgrid Limited (EML) gives its power-generation systems a committed offtake buyer, alongside a wider ecosystem of FundCo group partners.",
};

const GROUP_PARTNERS = [
  { name: "FundCo Capital Managers", logo: "/images/partners/fundco.svg" },
  { name: "Electrify Microgrid (EML)", logo: "/images/partners/eml.svg" },
  { name: "Agronomie", logo: "/images/partners/agronomie.png" },
  { name: "Grosolar", logo: "/images/partners/grosolar.svg" },
  { name: "Clean Energy Fund (CEF)", logo: null },
];

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

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <ScrollReveal className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">
              Group Ecosystem
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">
              Backed by the FundCo Portfolio
            </h2>
          </ScrollReveal>
          <ScrollReveal
            stagger={0.1}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8"
          >
            {GROUP_PARTNERS.map((p) => (
              <div
                key={p.name}
                className="flex h-20 w-44 items-center justify-center rounded-2xl border border-border bg-white px-6 py-4 shadow-sm"
              >
                {p.logo ? (
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={160}
                    height={48}
                    className="h-9 w-auto object-contain"
                  />
                ) : (
                  <span className="text-center text-xs font-semibold uppercase tracking-wide text-text-secondary">
                    {p.name}
                  </span>
                )}
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <JoinCta />
    </>
  );
}
