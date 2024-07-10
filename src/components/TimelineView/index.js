// Write your code here
import {Chrono} from 'react-chrono'
import './index.css'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  const renderTimelineView = eachItem => {
    if (eachItem.categoryId === 'COURSE') {
      return <CourseTimelineCard eachCourse={eachItem} key={eachItem.id} />
    } else {
      return <ProjectTimelineCard eachProject={eachItem} key={eachItem.id} />
    }
  }

  return (
    <div className="timeline-app-container">
      <h1 className="my-journey">MY JOURNEY OF
      <br/>
       CCBP 4.0</h1>
      <div className="chrono-container">
        <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
          {timelineItemsList.map(eachItem => renderTimelineView(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
