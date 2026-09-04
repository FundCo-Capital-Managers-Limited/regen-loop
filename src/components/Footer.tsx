import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/regenloop-logo-full.png"
            alt="Regenloop"
            width={1198}
            height={238}
            className="bg-white rounded-lg px-3 py-2 h-10 w-auto"
          />
          <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
            A Nigerian climate-tech company converting agricultural and
            industrial organic waste into renewable biogas — for industrial
            heating, electricity, and recovered digestate.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4 text-accent">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li><Link href="/technology" className="hover:text-white transition-colors">Technology</Link></li>
            <li><Link href="/traction" className="hover:text-white transition-colors">Traction & Pipeline</Link></li>
            <li><Link href="/model" className="hover:text-white transition-colors">Business Model</Link></li>
            <li><Link href="/impact" className="hover:text-white transition-colors">Impact</Link></li>
            <li><Link href="/partners" className="hover:text-white transition-colors">Partners</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4 text-accent">
            Legal
          </h3>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/cookies-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4 text-accent">
            Contact Details
          </h3>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li>Lagos, Nigeria</li>
            <li className="pt-1">
              <a href="mailto:hello@regenloop.ng" className="hover:text-white transition-colors">
                hello@regenloop.ng
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Regenloop. All Rights Reserved.
      </div>
    </footer>
  );
}
