import { Experience } from "@/src/types"

interface TimelineTItemType {
    item: Experience;
}

const TimelineItem = ({item} : TimelineTItemType) => {
    const isEducation = item.kind === "Education";
  return (
    <div className={`tl-item${isEducation ? " tl-item--edu" : ""}`}>
      <div className="tl-meta">
        <span className='tl-period'>{item.period}</span>
        <span className='tl-kind'>{item.kind}</span>
      </div>

      <div>
        <h3 className='tl-title'>{item.title}</h3>
        <p className="tl-org">{item.org}</p>
        <p className='tl-desc'>{item.description}</p>
      </div>
    </div>
  )
}

export default TimelineItem
