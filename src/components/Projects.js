import "./Projects.css"

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
                <div className="project">
                    <img src="" alt="" className="project-img" />
                    <p className="project-name"></p>
                </div>
            </div>
        </section>
    )
};

export default Projects;