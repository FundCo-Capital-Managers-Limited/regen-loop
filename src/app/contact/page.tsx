import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact Us | Regenloop" };

export default function Contact() {
  return (
    <>
      <PageHero
        title="Have Organic Waste? Let's Talk."
        subtitle="Agro-processor, industrial site, energy offtaker, or investor — tell us about your site and we'll get back to you."
      />

      <section className="mx-auto max-w-5xl px-6 py-14 sm:py-20 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-brand mb-2">Location</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Lagos, Nigeria
          </p>

          <h2 className="text-lg font-semibold text-brand mb-2">Email</h2>
          <p className="text-text-secondary">
            <a href="mailto:hello@regenloop.ng" className="hover:text-brand">
              hello@regenloop.ng
            </a>
          </p>
        </div>

        <div>
          <p className="text-text-secondary mb-6">
            Fill out the form and a member of our team will respond.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
