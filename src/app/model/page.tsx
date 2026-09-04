import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import JoinCta from "@/components/JoinCta";

export const metadata: Metadata = {
  title: "Business Model",
  description:
    "Regenloop's business model spans clean energy sales, waste management, biogas asset deployment and digital monitoring — with future value streams in digestate, carbon credits and additional energy applications.",
};

const STREAMS = [
  {
    title: "Clean Energy",
    text: "Biogas supplied for industrial heating and, at larger scale, electricity generation — sold to offtakers including Electrify Microgrid Limited (EML).",
  },
  {
    title: "Waste Management",
    text: "Customers gain a structured solution for managing organic waste that would otherwise be dumped, burned, or informally disposed of.",
  },
  {
    title: "Asset Deployment",
    text: "Regenloop designs and develops appropriately sized biogas infrastructure for each site's waste volume and energy demand.",
  },
  {
    title: "Digital Monitoring",
    text: "IoT-enabled monitoring provides operational and consumption data across every commissioned system.",
  },
];

const FUTURE = [
  "Digestate / organic fertilizer",
  "Carbon credits",
  "Additional energy applications",
];

export default function Model() {
  return (
    <>
      <PageHero
        breadcrumb="Business Model"
        title="Turning Waste Into Multiple Value Streams"
        subtitle="The model aligns the interests of waste generators, energy users, and Regenloop — each system pays back on more than one axis."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <ScrollReveal stagger={0.12} className="grid gap-6 sm:grid-cols-2">
          {STREAMS.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-brand mb-3">{s.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{s.text}</p>
            </div>
          ))}
        </ScrollReveal>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20 text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Future Value Streams
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              Beyond Today&rsquo;s Model
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {FUTURE.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium"
                >
                  {f}
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
