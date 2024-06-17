import React, { useState } from 'react';
import { SEO } from '../components/SEO';

type ProjectData = {
  title: string,
  description: string,
  status: string,
  url: string,
  image: string,
};

const Project = ({ title, description, status, url, image }: ProjectData) => {
  return (
    <a href={url} target='_blank' rel='noreferrer' className='project flex flex-row mb-6 p-6 border border-[#eaeaea] rounded bg-white shadow text-justify w-full text-black no-underline'>
      <div className='p-4 w-1/3 align-middle m-auto'>
        <img src={image} alt={title} className='m-auto' />
      </div>
      <div className='m-auto'>
        <h2 className='text-2xl text-left'>{title}</h2>
        <p className='text-sm text-[#999] my-2'>Status: {status}</p>
        <p className='mb-0'>{description}</p>
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
      <SEO title='Current Projects' />
      <h1 className='text-3xl mb-4'>Recent Projects</h1>
      {projectManifest.map((project) => <Project key={project.title} {...project} />)}
    </div>
  );
}
