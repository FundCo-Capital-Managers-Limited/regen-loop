import Link from "next/link";
import Image from "next/image";
import ThreeHero from "@/components/ThreeHero";
import ScrollReveal from "@/components/ScrollReveal";
import ProcessFlow from "@/components/ProcessFlow";
import AnimatedCounter from "@/components/AnimatedCounter";
import JoinCta from "@/components/JoinCta";

const PROBLEMS = [
  {
    title: "Informal Disposal",
    text: "Agricultural and industrial businesses dump, burn, or informally dispose of organic waste.",
  },
  {
    title: "Costly Fossil Fuels",
    text: "Agro-processors and industrial businesses depend on expensive diesel for thermal energy and power.",
  },
  {
    title: "Lost Economic Value",
    text: "Waste generators lose the economic value embedded in their organic waste.",
  },
  {
    title: "Rising Energy Costs",
    text: "Rising energy costs reduce the competitiveness of rural and agro-processing businesses.",
  },
];

const PROCESS = [
  { number: "01", title: "Collect", text: "Organic waste is sourced from agricultural and industrial generators." },
  { number: "02", title: "Process", text: "Anaerobic digestion breaks the waste down close to source." },
  { number: "03", title: "Produce", text: "The digestion process yields renewable biogas." },
  { number: "04", title: "Supply", text: "Biogas is supplied for industrial heat or power generation." },
  { number: "05", title: "Recover", text: "Digestate is recovered and returned to agriculture." },
];

const INNOVATION = [
  {
    title: "Waste-to-Energy",
    text: "Convert agricultural waste into renewable energy at the source.",
  },
  {
    title: "Digitally Connected Assets",
    text: "Smart gas meters and IoT connectivity bring gas consumption and system performance online.",
  },
  {
    title: "Real-Time Dashboard",
    text: "Monitors gas production, flow rate, energy utilisation, uptime and consumption patterns.",
  },
  {
    title: "Circular Economy",
    text: "Biogas provides energy while digestate is recovered for agricultural use.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white min-h-[85vh] flex items-center">
        <Image
          src="/images/biogas-plant-aerial.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
        <ThreeHero />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/60 to-navy" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent mb-5">
            Regenloop — Nigerian Climate-Tech
          </p>
          <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
            Turning Organic Waste Into
            <br />
            <span className="text-brand">Affordable Clean Energy</span>
          </h1>
          <p className="mt-7 max-w-xl text-white/80 text-base sm:text-lg leading-relaxed">
            Regenloop designs and deploys distributed anaerobic digestion
            systems that convert agricultural and industrial organic waste
            into renewable biogas — for industrial heating and electricity
            generation.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/technology"
              className="inline-block rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-navy shadow-lg shadow-black/20 hover:bg-white hover:-translate-y-0.5 transition-all"
            >
              How It Works
            </Link>
            <Link
              href="/contact"
              className="inline-block rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">
            The Problem
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
            Organic Waste Is a Waste-Management and Energy Problem
          </h2>
        </ScrollReveal>
        <ScrollReveal stagger={0.12} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-semibold text-navy mb-2">{p.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{p.text}</p>
            </div>
          ))}
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 sm:pb-24">
        <ScrollReveal className="grid gap-10 lg:grid-cols-2 items-center rounded-3xl bg-navy text-white overflow-hidden">
          <div className="relative h-72 lg:h-full min-h-[280px]">
            <Image
              src="/images/farmer-kaduna.jpg"
              alt="A Nigerian farmer with freshly harvested produce"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 sm:p-10 lg:pr-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Where The Waste Comes From
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Every Harvest Leaves Organic Waste Behind
            </h2>
            <p className="text-white/75 leading-relaxed">
              Agro-processors and farms across Nigeria generate organic
              waste every day — most of it dumped, burned, or left to
              decompose unmanaged. Regenloop turns that waste stream into a
              site-specific energy asset.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <ScrollReveal className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">
              Our Solution
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
              Waste-to-Energy Infrastructure for Industry
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Distributed anaerobic digestion systems deployed close to
              organic waste sources and energy users — a circular
              waste-to-value system.
            </p>
          </ScrollReveal>
          <ProcessFlow steps={PROCESS} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">
            What Makes Us Innovative
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
            Biogas + Digital Monitoring + Circular Economy
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Our innovation isn&rsquo;t just the digester — it&rsquo;s the
            integration of energy production, digital monitoring and
            resource recovery.
          </p>
        </ScrollReveal>
        <ScrollReveal stagger={0.12} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INNOVATION.map((i) => (
            <div
              key={i.title}
              className="rounded-2xl bg-navy text-white p-6 shadow-sm"
            >
              <h3 className="font-semibold text-accent mb-2">{i.title}</h3>
              <p className="text-sm text-white/75 leading-relaxed">{i.text}</p>
            </div>
          ))}
        </ScrollReveal>
      </section>

      <section className="bg-navy py-16 sm:py-20">
        <ScrollReveal className="mx-auto max-w-2xl px-6 text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
            From Pilot to Commercial Deployment
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Regenloop Has Moved Beyond Experimentation
          </h2>
        </ScrollReveal>
        <div className="mx-auto max-w-5xl px-6 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 text-center">
            <AnimatedCounter value={40} suffix=" m³" className="text-3xl font-bold text-accent" />
            <p className="mt-3 text-sm text-white/70">Industrial system live at IfGreen Industries, Epe (Aug 2026)</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 text-center">
            <AnimatedCounter value={300} suffix=" kg/day" className="text-3xl font-bold text-accent" />
            <p className="mt-3 text-sm text-white/70">Scalable processing capacity, from ~20 kg/day today</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 text-center">
            <AnimatedCounter value={40} suffix="%" className="text-3xl font-bold text-accent" />
            <p className="mt-3 text-sm text-white/70">Lower cost than diesel for equivalent heating output</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link
            href="/traction"
            className="inline-block rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            See Traction & Pipeline
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24 text-center">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">
            Circular Economy
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-10">
            Waste → Biogas → Energy → Digestate → Agriculture
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Every system closes the loop — biogas provides energy while
            digestate is recovered and returned to the land, aiming to
            demonstrate that waste can become an economically valuable
            energy resource.
          </p>
        </ScrollReveal>
      </section>

      <JoinCta />
    </>
  );
}
