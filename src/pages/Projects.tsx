import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

type ProjectData = {
  title: string,
  description: string,
  status: string,
  url: string,
  image: string,
};

const Project = ({ title, description, status, url, image }: ProjectData) => {
  return (
    <a href={url} target='_blank' rel='noreferrer' className='project'>
      <div className='image'>
        <img src={image} alt={title} />
      </div>
      <div className='content'>
        <h2>{title}</h2>
        <p className='tiny'>Status: {status}</p>
        <p className='description'>{description}</p>
      </div>
    </a>
  );
}

export default function Projects() {
  const [projectManifest, setProjectManifest] = useState<ProjectData[] | undefined>();

  if (!projectManifest) {
    fetch('/projects/manifest.json').then((response) => response.json()).then(setProjectManifest);
    return <div>Loading...</div>;
  }

  return (
    <div className='projects'>
      <Helmet>
        <title>Current Projects | James Ebentier</title>
      </Helmet>
      <h1>Recent Projects</h1>
      {projectManifest.map((project) => <Project key={project.title} {...project} />)}
    </div>
  );
}
