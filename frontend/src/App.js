import React from "react";

import Header from "./components/Header";

function App() {
  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="Projects">
        <ul>
          <li>Links</li>
          <li>Out of Projects</li>
        </ul>
      </Header>
    </>
  );
}

export default App;
