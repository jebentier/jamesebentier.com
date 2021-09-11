import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const resumeData = require('../../public/resume.json')

const Location = () => {
  const { region, postalCode, city, countryCode } = resumeData.basics.location;
  return (
    <div className='location'>{postalCode}, {city}, {region} {countryCode}</div>
  );
}

const ContactInfo = () => {
  return (
    <div className='contact'>
      <div className='item'>
        <i className="material-icons-outlined">open_in_new</i>
        <a href={resumeData.basics.website}>{resumeData.basics.website}</a>
      </div>
      <div className='item'>
        <i className="material-icons-outlined">email</i>
        <a href={`mailto:${resumeData.basics.email}`}>{resumeData.basics.email}</a>
      </div>
      <div className='item'>
        <i className="material-icons-outlined">call</i>
        <a href={`tel:${resumeData.basics.phone}`}>{resumeData.basics.phone}</a>
      </div>
    </div>
  );
}

const SocialProfile = ({ network, username, url }) => {
  return (
    <div className='item'>
      <i className={`fab fa-${network}`} />
      <a href={url}>{username}</a>
    </div>
  );
}

const SocialInfo = () => {
  return (
    <div className='social'>
      {resumeData.basics.profiles.map((profile, key) => <SocialProfile {...{ key, ...profile }} />)}
    </div>
  )
}

const Header = () => (
  <div className="header">
    <div className='content'>
      <h1 className='name'>{resumeData.basics.name}</h1>
      <h2 className='job-title'>{resumeData.basics.label}</h2>
      <Location />
      <ContactInfo />
      <SocialInfo />
    </div>
    <img className='profile-picture' src={resumeData.basics.picture} alt={resumeData.basics.name} />
  </div>
);

const MainSummary = () => (
  <div className='section summary'>
    {resumeData.basics.summary}
  </div>
)

const SkillSet = ({ name, level, keywords }) => (
  <div className='skill-set'>
    <h3 className='skill-set-name'>{name}</h3>
    <div className={`skill-set-level ${level.toLowerCase()}`}>
      <em>{level}</em>
      <div className='bar'></div>
    </div>
    <ul className='keywords'>
      {keywords.map((keyword, key) => <li key={key}>{keyword}</li>)}
    </ul>
  </div>
)

const Skills = () => (
  <div className='section'>
    <div className='section-header'>
      <h2 className='section-title'>Skills</h2>
    </div>
    <div className='skill-sets'>
      {resumeData.skills.map((skillSet, key) => <SkillSet {...{ key, ...skillSet }} />)}
    </div>
  </div>
)

const Job = ({ company, position, website, startDate, endDate, summary, highlights, open }) => {
  const [isOpen, setOpen] = useState(open);

  const renderDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
  }

  return (
    <div className={`job ${isOpen ? 'open' : ''}`}>
      <div className='job-header'>
        <i className='material-icons-outlined job-toggle' onClick={() => setOpen(!isOpen)}>
          {isOpen ? 'arrow_drop_down' : 'arrow_right'}
        </i>
        <div className='company-info'>
          <div className='position'>{position}</div>
          <div className='company'>{company}</div>
          <div className='website'><a href={website} target='_blank'>{website}</a></div>
        </div>
        <div className='dates'>
          <div className='start-date'>{renderDate(startDate)}</div>
          <div className='end-date'>{endDate ? renderDate(endDate) : 'Current'}</div>
        </div>
      </div>
      <div className='job-content'>
        <div className='summary'>{summary}</div>
        { highlights && <ul className='highlights'>
          {highlights.map((highlight, key) => <li key={key}>{highlight}</li>)}
        </ul> }
      </div>
    </div>
  );
}

const WorkExperience = () => (
  <div className='section'>
    <div className='section-header'>
      <h2 className='section-title'>Work Experience ({resumeData.work.length})</h2>
    </div>
    <div className='jobs'>
      {resumeData.work.map((job, key) => <Job {...{ key, ...job, open: key == 0 }} />)}
    </div>
  </div>
)

const Education = () => {
  const renderDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
  }

  return (
    <div className='section'>
      <div className='section-header'>
        <h2 className='section-title'>Education ({resumeData.education.length})</h2>
      </div>
      <div>
        {resumeData.education.map((education, key) => (
          <div className='education' key={key}>
            <div className='education-info'>
              <div className='degree'>{education.studyType} {education.area}</div>
              <div className='institution'>{education.institution}</div>
            </div>
            <div className='dates'>
              <div className='start-date'>{renderDate(education.startDate)}</div>
              <div className='end-date'>{education.endDate ? renderDate(education.endDate) : 'Current'}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const Language = ({ language, fluency }) => (
  <div className='skill-set'>
    <h3 className='skill-set-name'>{language}</h3>
    <div className={`skill-set-level ${fluency.toLowerCase().replace(' ', '-')}`}>
      <em>{fluency}</em>
      <div className='bar'></div>
    </div>
  </div>
)

const Languages = () => (
  <div className='section'>
    <div className='section-header'>
      <h2 className='section-title'>Languages</h2>
    </div>
    <div className='skill-sets'>
      {resumeData.languages.map((language, key) => <Language {...{ key, ...language }} />)}
    </div>
  </div>
)

export default function Resume() {
  return (
    <div className='resume'>
      <Helmet>
        <title>James Ebentier - Resume</title>
      </Helmet>
      <Header />
      <MainSummary />
      <Skills />
      <WorkExperience />
      <Education />
      <Languages />
    </div>
  );
}