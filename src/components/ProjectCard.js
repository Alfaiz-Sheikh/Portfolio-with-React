import "./ProjectCard.css";

function ProjectCard({title, image}) {
    return(
        <div className="projectCard">
            <img src={image} alt="" className="projectImg" />
            <div className="cardTxt">
                <p className="projectName">{title}</p>
            </div>
        </div>
    )
}

export default ProjectCard;