import projects from '../../assets/project.json'
import { Project } from './Project';

export interface ProjectType {
    name: string;
    company: string;
    description: string;
    date: string;
    links: string[];
}

export function Projects() {
  const projectData: ProjectType[] =  projects

  console.log(projectData);

  return (
    projectData.map((project: ProjectType) => {
      return (
        <Project props={project}/>
      )
    })
  )
}