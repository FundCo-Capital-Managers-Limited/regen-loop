import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import ProcessFlow from "@/components/ProcessFlow";
import JoinCta from "@/components/JoinCta";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Regenloop deploys distributed anaerobic digestion systems, digitally monitored with smart gas metering and real-time dashboards, in a five-step process from waste collection to digestate recovery.",
};

const PROCESS = [
  { number: "01", title: "Collect", text: "Organic waste is sourced directly from agricultural and industrial generators near the digester site." },
  { number: "02", title: "Process", text: "Anaerobic digestion breaks the waste down in a sealed, distributed digester close to the source." },
  { number: "03", title: "Produce", text: "The digestion process yields biogas — a renewable, storable energy source." },
  { number: "04", title: "Supply", text: "Biogas is supplied for industrial heating and, at larger scale, electricity generation." },
  { number: "05", title: "Recover", text: "Digestate — the nutrient-rich byproduct — is recovered and returned to agricultural use." },
];

const MONITORING = [
  {
    title: "Smart Gas Metering",
    text: "Smart gas meters and IoT connectivity bring gas consumption and system performance online for every deployed digester.",
  },
  {
    title: "Real-Time Dashboard",
    text: "A live dashboard monitors gas production, consumption, flow rate, energy utilisation, system performance, uptime and consumption patterns.",
  },
  {
    title: "Standardised, Replicable Design",
    text: "Systems are engineered to a standardised design so digesters can be sized and deployed repeatably across new sites, from 200 m³ to 1,200+ m³.",
  },
];

export default function Technology() {
  return (
    <>
      <PageHero
        breadcrumb="How It Works"
        image="/images/storage-tanks.jpg"
        imageAlt="Industrial digestion tanks under an evening sky"
        title="Distributed Anaerobic Digestion, Digitally Monitored"
        subtitle="Regenloop designs and deploys biogas systems close to organic waste sources and energy users — not a single centralised plant, but a distributed, replicable infrastructure model."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <ScrollReveal className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
            The Five-Step Process
          </h2>
          <p className="text-text-secondary leading-relaxed">
            This creates a circular waste-to-value system, from collection
            through to recovery.
          </p>
        </ScrollReveal>
        <ProcessFlow steps={PROCESS} />
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">
              Digital Monitoring
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">
              Digitally Connected From Day One
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Our innovation isn&rsquo;t just the digester — it&rsquo;s the
              integration of energy production, digital monitoring and
              resource recovery in one system.
            </p>
          </ScrollReveal>
          <ScrollReveal stagger={0.15} className="grid gap-6 sm:grid-cols-3">
            {MONITORING.map((m) => (
              <div key={m.title} className="rounded-2xl border border-border bg-white p-6 sm:p-7 shadow-sm">
                <h3 className="font-semibold text-brand mb-3">{m.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{m.text}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <JoinCta />
    </>
  );
}
