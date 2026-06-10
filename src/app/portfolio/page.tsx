import ProjectCard from "@/src/components/ui/ProjectCard";
import { projects } from "@/src/data/projects";
import { ArrowRight } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <section className="section">
      <div className="_wrap">
        <div className="section-head">
          <div>
            <span className="over-line">
              <span className="idx">·</span> Things I&apos;ve built
            </span>
            <h2>Portfolio</h2>
          </div>
          <p className="hero_role flex items-center gap-2 text-text-secondary cursor-pointer hover:text-text-primary" style={{margin: 0}}>
            <ArrowRight className="text-accent"/> {projects.length} selected projedts
          </p>
        </div>
        <div className='grid grid--3'>
          {
            projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default page;
