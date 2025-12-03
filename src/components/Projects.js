import "./Projects.css"
import ProjectCard from "./ProjectCard";

function Projects() {
    return(
        <section id="project-sec">
            <div className="grheading">Projects</div>
            <ul className="projects-menu">
                <li>All</li>
                <li>E-commerce</li>
                <li>Travel</li>
                <li>Mini Projects</li>
            </ul>
            <div className="projects">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    )
};

export default Projects;