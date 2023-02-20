import ProjectSet from "./ProjectSet";
import data from "../../db.json";

function Projects() {
  return (
    <div className="projects-projects" id="projects">
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-container">
        {data.projects.map((elm) => {
          return <ProjectSet key={elm.id} {...elm} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
