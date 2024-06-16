import React from 'react';
import { Helmet } from 'react-helmet';

type ProjectData = {
  title: string,
  description: string,
  status: string,
  url: string,
  image: string,
};

const projectManifest: ProjectData[] = [
  {
    title: 'NotMyRealEmail.com - Secure Email Aliasing and Forwarding Service',
    description: 'Not My Real Email offers users a secure and convenient solution to protect their online privacy by creating email aliases or masks over their existing email addresses, perfect for those seeking heightened anonymity and safety in their online activities.',
    status: 'Beta',
    url: 'https://notmyrealemail.com',
    image: 'https://notmyrealemail.com/logo-120.png'
  },
  {
    title: 'The Game About People',
    description: 'The Game About People is where we first debuted BiTi to the world. The focus of this game is to get to know your friends better, and get to know which of your friends knows you best. The Game About People is a fun multiplayer game and is a hit at parties where you want to see just how well you all know each other.',
    status: 'Live',
    url: 'https://thegameaboutpeople.com',
    image: 'https://biti.dev/images/Biti-Site.gif'
  }
];

const Project = ({ title, description, status, url, image }: ProjectData) => {
  return (
    <a href={url} target='_blank' rel='noopener' className='project'>
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
