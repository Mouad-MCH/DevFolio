import { experiences } from "@/src/data/experiences"
import TimelineItem from "./TimelineItem"

const Timeline = () => {
  return (
    <div className="timeline">
      {
        experiences.map((item) => (
            <TimelineItem key={`${item.title}-${item.period}`} item={item} />
        ))
      }
    </div>
  )
}

export default Timeline
