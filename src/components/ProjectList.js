// src/components/ProjectList.js
import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  justify-items: center;
  width: 100%;
  max-width: 1200px;
`;

const ProjectList = () => {
  return (
    <Grid>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Grid>
  );
};

export default ProjectList;
