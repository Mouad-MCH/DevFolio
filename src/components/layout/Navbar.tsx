"use client";

import { profile } from "@/src/data/profile";
import { Menu, Moon, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const logoRef = useRef<HTMLHeadingElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!logoRef.current) return;
    gsap.to(logoRef.current, {
      scrambleText: {
        text: profile.firstName + " " + profile.lastName,
        chars: "ﾊﾐﾋｰｳｼﾅﾓﾆｻ012345789",
        speed: 0.3,
      },
      duration: 2.5,
    });
  }, []);

  return (
    <div className="NavBar bg-bg-0 border-border-dark relative flex w-full items-center justify-between border-b-2 px-4 py-3 md:px-20">
      <Link href="/" className="logo flex items-center gap-2">
        <div className="bg-accent-fill rounded-md p-1 font-bold">{profile.initials}</div>
        <h2 ref={logoRef} className="Full_name hidden gap-2 sm:flex">
          <span>{profile.firstName}</span>
          <span>{profile.lastName}</span>
        </h2>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:block">
        <ul className="navLink flex items-center gap-5">
          {NAV_ITEMS.map((nav) => {
            const isActive = nav.href === "/" ? pathname === "/" : pathname.startsWith(nav.href);
            return (
              <Link key={nav.label} href={nav.href} className={`nav_link ${isActive ? "is-Active" : ""}`}>
                {nav.label}
              </Link>
            );
          })}
        </ul>
      </nav>

      {/* Desktop actions */}
      <div className="hidden items-center gap-5 md:flex">
        <div className="border-border-dark flex cursor-pointer items-center justify-center rounded-full border p-3">
          <Moon />
        </div>
        <button className="bg-accent-press hover:bg-accent-hover cursor-pointer rounded-md px-3 py-2 transition-all duration-75">
          Download CV
        </button>
      </div>

      {/* Mobile hamburger */}
      <button
        className="border-border-dark flex cursor-pointer items-center justify-center rounded-md border p-2 md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="bg-bg-0 border-border-dark absolute top-full right-0 left-0 z-50 border-b-2 md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-3">
            {NAV_ITEMS.map((nav) => {
              const isActive = nav.href === "/" ? pathname === "/" : pathname.startsWith(nav.href);
              return (
                <Link
                  key={nav.label}
                  href={nav.href}
                  className={`nav_link ${isActive ? "is-Active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {nav.label}
                </Link>
              );
            })}
            <div className="border-border-dark mt-2 flex items-center gap-3 border-t pt-3">
              <div className="border-border-dark flex cursor-pointer items-center justify-center rounded-full border p-2">
                <Moon size={18} />
              </div>
              <button className="bg-accent-press hover:bg-accent-hover cursor-pointer rounded-md px-3 py-2 text-sm transition-all duration-75">
                Download CV
              </button>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
