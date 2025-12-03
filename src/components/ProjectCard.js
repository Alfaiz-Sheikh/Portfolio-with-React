import "./ProjectCard.css";
import Project1 from '../assets/Project1.png'

function ProjectCard() {
    return(
        <div className="projectCard">
            <img src={Project1} alt="" className="projectImg" />
            <div className="cardTxt">
                <p className="projectName">Project1</p>
            </div>
        </div>
    )
}

export default ProjectCard;