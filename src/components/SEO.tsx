import React from 'react';
import { Helmet } from 'react-helmet';

type SEOProps = {
  title: string,
  description?: string,
  keywords?: string,
  openGraph?: {
    title?: string,
    description?: string,
    image?: string,
  },
  twitter?: {
    card?: string,
    title?: string,
    description?: string,
    image?: string,
  },
};

const DEFAULT_SEO: SEOProps & { openGraph: { image: string }} = {
  title: 'JEB Development',
  description: "I am a Software Architect by day, and a indie hacker, mentor, and community advocate by night.",
  keywords: "Software, Engineer, Architect, Automation, Mentorship, Open Source, Contributor, Security, Ruby, Rails",
  openGraph: {
    image: 'https://jamesebentier.com/images/landing-image.webp',
  }
}

export const SEO = ({ title, description, keywords, openGraph, twitter }: SEOProps) => (
  <Helmet
    defaultTitle={DEFAULT_SEO.title}
    titleTemplate={`%s | ${DEFAULT_SEO.title}`}
  >
    <title>{title}</title>
    <meta name="description" content={description || DEFAULT_SEO.description} />
    <meta name="keywords" content={keywords || DEFAULT_SEO.keywords} />

    <meta name="og:title" content={openGraph?.title || title || DEFAULT_SEO.title} />
    <meta name="og:description" content={openGraph?.description || description || DEFAULT_SEO.description} />
    <meta name="og:image" content={openGraph?.image || DEFAULT_SEO.openGraph.image} />

    <meta name="twitter:title" content={twitter?.title || title || DEFAULT_SEO.title} />
    <meta name="twitter:card" content={twitter?.card || 'summary_large_image'} />
    <meta name="twitter:description" content={twitter?.description || openGraph?.description || description || DEFAULT_SEO.description} />
    <meta name="twitter:image" content={twitter?.image || openGraph?.image || DEFAULT_SEO.openGraph.image} />
  </Helmet>
);
