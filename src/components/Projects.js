import Card from "./Cards/Card";
import "../styles/Projects.css";
const Projects = () => {
  const projects = [
    {title: "Project 1", description: "Description 1", languages: "Languages 1", link: "Link 1"},
    {title: "Project 2", description: "Description 2", languages: "Languages 2", link: "Link 2"},
    {title: "Project 3", description: "Description 3", languages: "Languages 3", link: "Link 3"},
    {title: "Project 4", description: "Description 4", languages: "Languages 4", link: "Link 4"}
  ];
  return (
    <div className="projects-container">
      {projects.map((project) => {
        return <Card title={project.title} description={project.description} languages={project.languages} link={project.link} />
      })}
    </div>
  );
};

export default Projects;