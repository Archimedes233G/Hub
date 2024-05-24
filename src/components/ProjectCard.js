// src/components/ProjectCard.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 20px;
  text-align: center;
  width: 280px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  h2 {
    font-size: 1.5em;
    margin: 0 0 10px;
  }

  p {
    color: #777;
    font-size: 1em;
    margin: 0 0 20px;
  }
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1em;
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <Button href={project.link} target="_blank" rel="noopener noreferrer">
        Start Project
      </Button>
    </Card>
  );
};

export default ProjectCard;
