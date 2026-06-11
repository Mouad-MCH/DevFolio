import SkillGroup from "@/src/components/skills/SkillGroup";
import LevelBars from "@/src/components/ui/LevelBars";
import { skillCategories } from "@/src/data/skills";

const page = () => {
  return (
    <section className="section">
      <div>
        <div className="section-head" style={{ marginBottom: 26 }}>
          <div>
            <span className="over-line">
              <span className="idx">·</span> What I work with
            </span>
            <h2>Skills &amp; tooling</h2>
          </div>
        </div>

        <div className="legend" style={{ marginBottom: 46 }}>
          <span>
            <LevelBars filled={1} /> Beginner
          </span>

          <span>
            <LevelBars filled={2} /> Intermediate
          </span>

          <span>
            <LevelBars filled={3} /> Advanced
          </span>
        </div>

        <div>
          {
            skillCategories.map((category) => (
              <SkillGroup key={category.name} category={category} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default page;
