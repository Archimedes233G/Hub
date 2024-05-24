// src/App.js
import React from "react";
import ProjectList from "./components/ProjectList";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
  background: #f0f2f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AppHeader = styled.header`
  margin-bottom: 40px;

  h1 {
    font-size: 2.5em;
    margin: 0;
  }

  p {
    font-size: 1.2em;
    color: #666;
  }
`;

const App = () => {
  return (
    <AppContainer>
      <AppHeader>
        <h1>My Project Hub</h1>
        <p>Select a project to get started</p>
      </AppHeader>
      <ProjectList />
    </AppContainer>
  );
};

export default App;
