import { skillCategories } from "@/src/data/skills";
import { skillIcons } from "@/src/lib/skill-icons"
import { SkillCategory } from "@/src/types"
import SkillBadge from "../ui/SkillBadge";

interface SkillGroupProps {
    category: SkillCategory
}

const SkillGroup = ({ category } : SkillGroupProps) => {
    const Icon = skillIcons[category.icon];
  return (
    <div className="skill-group">
      <div className="skill-group__head">
        <span
          className="project__glyph"
          style={{ width: 38, height: 38 }}
        >
            <Icon />
        </span>

        <h3>{category.name}</h3>
        <span className="skill-group__count">
            {category.skills.length} skills
        </span>
      </div>

      <div className="skill-grid">
        {
            category.skills.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
            ))
        }
      </div>
      
    </div>
  )
}

export default SkillGroup
