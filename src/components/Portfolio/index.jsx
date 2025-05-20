import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'EFT-CHEATER-TRACKER',
      description: 'HTML/CSS/JavaScript',
      link: "https://github.com/treeewzrd/EFT-CHEATER-TRACKER",
      repo: "https://github.com/treeewzrd/EFT-CHEATER-TRACKER"
    },
    {
      name: 'PICKFORD & LACE',
      description: 'MERN/JavaScript/CSS',
      link: "https://github.com/treeewzrd/PICKFORD-LACE",
      repo: "https://github.com/treeewzrd/PICKFORD-LACE"
    },
    {
      name: 'EMPLOYEE TRACKER',
      description: 'Typscript',
      link: "https://github.com/treeewzrd/EMPLOYEE-TRACKER",
      repo: "https://github.com/treeewzrd/EMPLOYEE-TRACKER"
    },
    {
      name: '4-DAY-FORECAST',
      description: 'CSS/Typescript/JavaScript/HTML',
      link: "https://github.com/treeewzrd/4-DAY-FORECAST",
      repo: "https://github.com/treeewzrd/4-DAY-FORECAST"
    },
    {
      name: 'ADD-VEHICLE',
      description: 'Typescript',
      link: "https://github.com/treeewzrd/ADD-VEHICLE",
      repo: "https://github.com/treeewzrd/ADD-VEHICLE"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
