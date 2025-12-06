import "./ProjectCard.css";

function ProjectCard({title, image, url}) {
    return(
        <a href={url} target="_blank" className="projectCard">
            <img src={image} alt="" className="projectImg" />
            <div className="cardTxt">
                <p className="projectName">{title}</p>
            </div>
        </a>
    )
}

export default ProjectCard;