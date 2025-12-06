import { useState } from "react";
import "./Projects.css"
import ProjectCard from "./ProjectCard";
import projectsData from "../config/projectsData";

function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "React Projects", "E-commerce", "HTML Layouts", "Mini Projects"];

    const filteredProjects = activeCategory === "All" ? projectsData : projectsData.filter(
          (project) => project.category === activeCategory
        );
    return(
        <section id="project-sec">
            <div className="grheading">Projects</div>
            <ul className="projects-menu">
                {categories.map((category) => (
                <li
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={activeCategory === category ? "active" : ""}
                >
                    {category}
                </li>
                ))}
            </ul>
            <div className="projects">
                {filteredProjects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    image={project.image}
                    url={project.url}
                />
                ))}
            </div>
        </section>
    )
};

export default Projects;