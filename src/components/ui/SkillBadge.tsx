import { skillIcons } from "@/src/lib/skill-icons";
import { skillLevel, Skills } from "@/src/types";
import LevelBars from "./LevelBars";


interface SkillBadgeProps {
    skill: Skills;
}

const LEVEL_FILL: Record<skillLevel, number> = {
    beginner: 1,
    intermediate: 2,
    advanced: 3,
}

function capitalize(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

const SkillBadge = ({skill} : SkillBadgeProps) => {
    const Icon = skillIcons[skill.icon];

  return (
    <div className="badge">
      <span className="badge__icon">
        <Icon size={19} />
      </span>
      <span className="badge__body">
        <span className="badge__name">{skill.name}</span>
        <span className="level">
          <LevelBars filled={LEVEL_FILL[skill.level]} />
          <span className="level__label">{capitalize(skill.level)}</span>
        </span>
      </span>
    </div>
  )
}

export default SkillBadge
