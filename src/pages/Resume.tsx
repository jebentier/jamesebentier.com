import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  CallOutlined,
  EmailOutlined,
  OpenInNewOutlined,
  ArrowDropDownOutlined,
  ArrowRightOutlined,
} from '@mui/icons-material';

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { SvgIconProps } from '@mui/material';

type SocialProfileData = {
  network: string,
  username: string,
  url: string
};

type SkillSetData = {
  name: string,
  level: string,
  keywords: string[],
}

type JobData = {
  company: string,
  position: string,
  website: string,
  startDate: string,
  endDate: string,
  summary: string,
  highlights: string[],
};

type EducationData = {
  studyType: string,
  area: string,
  institution: string,
  startDate: string,
  endDate: string,
};

type LanguageData = {
  language: string,
  fluency: string,
}

type ResumeData = {
  basics: {
    name: string,
    label: string,
    picture: string,
    email: string,
    phone: string,
    website: string,
    summary: string,
    location: {
      region: string,
      postalCode: string,
      city: string,
      countryCode: string,
    },
    profiles: SocialProfileData[],
  },
  work: JobData[],
  education: EducationData[],
  languages: LanguageData[],
  skills: SkillSetData[],
}

const Location = ({ basics: { location: { region, postalCode, city, countryCode } } }: ResumeData) => (
  <div className='mb-1'>{postalCode}, {city}, {region} {countryCode}</div>
);

const ContactInfo = ({ basics: { website, email, phone }}: ResumeData) => (
  <div className='flex flex-row justify-left mb-1'>
    <div className='mr-2'>
      <OpenInNewOutlined fontSize='inherit' className='mx-1 my-auto align-middle' />
      <a href={website} className='link link-hover'>{website}</a>
    </div>
    <div className='mx-2'>
      <EmailOutlined fontSize='inherit' className='mx-1 my-auto align-middle' />
      <a href={`mailto:${email}`}>{email}</a>
    </div>
    <div className='mx-y'>
      <CallOutlined fontSize='inherit' className='mx-1 my-auto align-middle' />
      <a href={`tel:${phone}`}>{phone}</a>
    </div>
  </div>
);

const SocialProfileIcon = ({ network, ...props }: SvgIconProps & { network: string }) => {
  switch (network) {
    case 'twitter':
      return <TwitterIcon {...props} htmlColor='#1da1f2' />;
    case 'linkedin':
      return <LinkedInIcon {...props} htmlColor='#0072b1' />;
    case 'github':
      return <GitHubIcon {...props} />;
    default:
      return <LanguageIcon {...props} />;
  }
};

const SocialProfile = ({ network, username, url }: SocialProfileData) => (
  <div className='mr-3'>
    <SocialProfileIcon network={network} fontSize='inherit' className='mx-1 my-auto align-middle' />
    <a href={url}>{username}</a>
  </div>
);

const SocialInfo = ({ basics: { profiles }}: ResumeData) => (
  <div className='flex flex-row justify-left mb-1'>
    {profiles.map((profile: SocialProfileData, key: number) => <SocialProfile {...{ key, ...profile }} />)}
  </div>
);

const Header = (resumeData: ResumeData) => (
  <div className="header flex flex-grow">
    <div>
      <h1 className='text-4xl font-thin leading-normal'>{resumeData.basics.name}</h1>
      <h2 className='text-2xl font-light text-[#202931]'>{resumeData.basics.label}</h2>
      <Location {...resumeData} />
      <ContactInfo {...resumeData} />
      <SocialInfo {...resumeData} />
    </div>
    <img className='w-44 h-full m-auto mr-0 rounded justify-self-right' src={resumeData.basics.picture} alt={resumeData.basics.name} />
  </div>
);

const MainSummary = (resumeData: ResumeData) => (
  <div className='my-4 rounded py-5 px-4 bg-[#f1f8ff]'>
    {resumeData.basics.summary}
  </div>
);

const styleForLevel = (level: string) => {
  switch (level.toLowerCase()) {
    case 'master':
    case 'native-speaker':
      return 'after:bg-[#59C596] after:w-full';
    case 'advanced':
      return 'after:bg-[#5CB85C] after:w-3/4';
    case 'intermediate':
      return 'after:bg-[#ffdf1f] after:w-1/2';
    case 'beginner':
      return 'after:bg-black after:w-1/4';
    default:
      return 'after:bg-[#9e9e9e]';
  }

}

const SkillSet = ({ name, level, keywords }: SkillSetData) => (
  <div className='w-1/3 px-4'>
    <h3 className='text-base font-semibold'>{name}</h3>
    <div className='mb-2'>
      <em className='color-[#757575]'>{level}</em>
      <div className={`bar border border-[#dddddd] w-full h-2 relative block after:absolute after:content-[" "] after:top-0 after:left-0 after:h-2 ${styleForLevel(level)}`}></div>
    </div>
    <ul className='list-none p-0'>
      {keywords.map((keyword, key) => (
        <li
          key={key}
          className='inline-block m-1 p-2 text-xs leading-none lowercase text-[#3e6d8e] bg-[#dfeaf1] text-nowrap'
        >{keyword}</li>
      ))}
    </ul>
  </div>
);

const Skills = (resumeData: ResumeData) => (
  <div className='my-4'>
    <div className="relative mb-2 after:absolute after:left-0 after:top-3 after:h-px after:w-full after:bg-[#ccc] after:block after:content-[''] after:-z-10">
      <h2 className='pr-4 bg-white text-[#ff6d1f] inline-block uppercase font-semibold text-base mb-0'>Skills</h2>
    </div>
    <div className='flex flex-row justify-between'>
      {resumeData.skills.map((skillSet: SkillSetData, key: number) => <SkillSet {...{ key, ...skillSet }} />)}
    </div>
  </div>
)

const renderDate = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
}

const Job = ({ company, position, website, startDate, endDate, summary, highlights, open }: JobData & { open: boolean }) => {
  const [isOpen, setOpen] = useState(open);

  return (
    <div className='mb-5 w-full'>
      <div className='flex flex-row'>
        {isOpen && <ArrowDropDownOutlined className='mr-3 cursor-pointer print:hidden' onClick={() => setOpen(!isOpen)} />}
        {!isOpen && <ArrowRightOutlined className='mr-3 cursor-pointer print:hidden' onClick={() => setOpen(!isOpen)} />}
        <div>
          <div className='inline-block font-semibold'>{position}</div>
          <div className='inline-block text-[#606d76] font-normal before:content-["|"] before:mx-2'>{company}</div>
          <div><a href={website} target='_blank' rel='noreferrer'>{website}</a></div>
        </div>
        <div className='ml-auto font-semibold'>
          <div className='inline-block'>{renderDate(startDate)}</div>
          <div className='inline-block before:mx-2 before:content-["-"]'>{endDate ? renderDate(endDate) : 'Current'}</div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} ml-5 print:block`}>
        <div className='rounded py-5 px-4 bg-white'>{summary}</div>
        { highlights && <ul className='list-square pl-10'>
          {highlights.map((highlight, key) => <li key={key}>{highlight}</li>)}
        </ul> }
      </div>
    </div>
  );
}

const WorkExperience = (resumeData: ResumeData) => (
  <div className='my-4'>
    <div className="relative mb-2 after:absolute after:left-0 after:top-3 after:h-px after:w-full after:bg-[#ccc] after:block after:content-[''] after:-z-10">
      <h2 className='pr-4 bg-white text-[#ff6d1f] inline-block uppercase font-semibold text-base mb-0'>Work Experience ({resumeData.work.length})</h2>
    </div>
    <div>
      {resumeData.work.map((job: JobData, key: number) => <Job {...{ key, ...job, open: key === 0 }} />)}
    </div>
  </div>
)

const Education = (resumeData: ResumeData) => {
  return (
    <div className='my-4'>
      <div className="relative mb-2 after:absolute after:left-0 after:top-3 after:h-px after:w-full after:bg-[#ccc] after:block after:content-[''] after:-z-10">
        <h2 className='pr-4 bg-white text-[#ff6d1f] inline-block uppercase font-semibold text-base mb-0'>Education ({resumeData.education.length})</h2>
      </div>
      <div>
        {resumeData.education.map((education: EducationData, key: number) => (
          <div className='education mb-6 w-full flex flex-row' key={key}>
            <div className='ml-10'>
              <div className='inline-block font-semibold'>{education.studyType} {education.area}</div>
              <div className='inline-block text-[#606d76] font-normal before:mx-2 before:content-["|"]'>{education.institution}</div>
            </div>
            <div className='ml-auto font-semibold'>
              <div className='inline-block'>{renderDate(education.startDate)}</div>
              <div className='inline-block before:mx-2 before:content-["-"]'>{education.endDate ? renderDate(education.endDate) : 'Current'}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const Language = ({ language, fluency }: LanguageData) => (
  <div className='w-1/3 px-4'>
    <h3 className='text-base font-semibold'>{language}</h3>
    <div className='mb-2'>
      <em className='color-[#757575]'>{fluency}</em>
      <div className={`bar border border-[#dddddd] w-full h-2 relative block after:absolute after:content-[" "] after:top-0 after:left-0 after:h-2 ${styleForLevel(fluency.toLowerCase().replace(' ', '-'))}`}></div>
    </div>
  </div>
)

const Languages = (resumeData: ResumeData) => (
  <div className='my-4'>
    <div className="relative mb-2 after:absolute after:left-0 after:top-3 after:h-px after:w-full after:bg-[#ccc] after:block after:content-[''] after:-z-10">
      <h2 className='pr-4 bg-white text-[#ff6d1f] inline-block uppercase font-semibold text-base mb-0'>Languages</h2>
    </div>
    <div className='flex flex-row justify-between'>
      {resumeData.languages.map((language: LanguageData, key: number) => <Language {...{ key, ...language }} />)}
    </div>
  </div>
)

export default function Resume() {
  const [resumeData, setResumeData] = useState<ResumeData | undefined>();

  if (!resumeData) {
    fetch('/resume.json').then((response) => response.json()).then(setResumeData);
    return <div>Loading...</div>;
  }
  return (
    <div className='resume text-sm m-auto text-[#40484f] font-resume text-justify leading-snug'>
      <Helmet>
        <title>James Ebentier - Resume</title>
      </Helmet>
      <Header {...resumeData} />
      <MainSummary {...resumeData} />
      <Skills {...resumeData} />
      <WorkExperience {...resumeData} />
      <Education {...resumeData} />
      <Languages {...resumeData} />
    </div>
  );
}
