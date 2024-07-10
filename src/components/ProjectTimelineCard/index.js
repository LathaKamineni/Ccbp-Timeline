// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'
const ProjectTimelineCard = props => {
  const {eachProject} = props
  const {
    id,
    categoryId,
    title,
    projectUrl,
    duration,
    imageUrl,
    description,
    projectTitle,
  } = eachProject
  return (
    <>
      <img src={imageUrl} className="project-image" alt="project" />
      <div className="project-name-duration-container">
        <h1>{projectTitle}</h1>
        <div className="clock-duration-container">
          <AiFillCalendar className="calender-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="project-link">
        Visit
      </a>
    </>
  )
}
export default ProjectTimelineCard
