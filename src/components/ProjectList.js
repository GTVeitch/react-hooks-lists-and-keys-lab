import React from "react";

function ProjectList({ projects }) {

  const pObject = projects.map((project)=> {
    return (<span key={project.id}>{project.name}</span>)
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{pObject}</div>
    </div>
  );
}

export default ProjectList;
