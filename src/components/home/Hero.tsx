"use client";

import { profile } from "@/src/data/profile";
import { Dot, Layout } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero section">
      <div className="hero__grid-bg" />
      <div className="z-100 flex flex-col items-center gap-10 md:flex-row">
        <div className="info flex-1">
          <div className="border-border-dark bg-accent/30 mb-5 flex w-fit items-center rounded-full border-2 px-2">
            <Dot className="text-success animate-ping" size={30} /> Available for new work
          </div>

          <h1 className="md:text-h1 font-body mb-3 text-2xl font-bold sm:text-3xl">
            {profile.firstName}&nbsp;{profile.lastName} — I build resilient
            <br />
            web platforms that <span className="text-accent">scale</span>.
          </h1>

          <p className="hero__role text-text-muted mb-2">
            <span className="text-accent">&rarr;</span> {profile.role} · TypeScript, Node &amp; cloud infrastructure
          </p>

          <p className="hero__tagline text-text-secondary max-w-full md:max-w-130">{profile.tagline}</p>

          <div className="hero__cta mt-10 flex flex-wrap items-center gap-4 md:gap-6">
            <Link className="btn btn--primary" href="/portfolio">
              <Layout />
              View portfolio
            </Link>
            <Link className="btn btn--secondary" href="/contact">
              Get in touch
            </Link>
          </div>

          <div className="hero__stats">
            {profile.stats.map((stat) => (
              <div className="stat_info" key={stat.label}>
                <span className="text-h3 font-bold">{stat.value}</span>
                <span className="text-text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="image hidden md:block"></div>
      </div>
    </section>
  );
};

export default Hero;
