import { featuredProject } from "@/src/data/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import ProjectCard from "../ui/ProjectCard";

const FeaturedProjects = () => {
  return (
    <section className="section">
      <div>
        <div className="section-head flex items-end justify-between">
          <div>
            <span>
              <span className="idx">01</span> Selected work
            </span>

            <h2 className="mt-5">Featured projects</h2>
          </div>

          <Link href="/portfolio" className="flex items-center font-mono text-sm">
            <ArrowRight className="text-accent" /> View all
          </Link>
        </div>
        <div className="grid--3 mt-10 grid">
          {featuredProject.map((feture) => (
            <ProjectCard key={feture.id} project={feture} />
          ))}

          {/* <ProjectCard project={featuredProject[0]} /> */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
