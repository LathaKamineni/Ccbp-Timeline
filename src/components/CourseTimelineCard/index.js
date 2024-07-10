import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'
const CourseTimelineCard = props => {
  const {eachCourse} = props
  const {id, categoryId, title, courseTitle, description, duration, tagsList} =
    eachCourse
  const renderTag = eachTag => <p className="tags">{eachTag.name}</p>
  return (
    <div className="course-timeline-container">
      <div className="course-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="clock-duration-container">
          <AiFillClockCircle className="clock-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tags-list-container">
        {tagsList.map(eachTag => renderTag(eachTag))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
