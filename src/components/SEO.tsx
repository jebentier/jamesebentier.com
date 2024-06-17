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

export const SEO = ({ title, description, keywords, openGraph, twitter }: SEOProps) => (
  <Helmet
    defaultTitle='JEB Development'
    titleTemplate='%s | JEB Development'
  >
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
    {keywords && <meta name="keywords" content={keywords} />}

    <meta name="og:title" content={openGraph?.title || title} />
    {description && <meta name="og:description" content={openGraph?.description || description} />}
    {openGraph?.image && <meta name="og:image" content={openGraph.image} />}

    <meta name="twitter:title" content={twitter?.title || title} />
    {twitter?.card && <meta name="twitter:card" content={twitter.card} />}
    {description && <meta name="twitter:description" content={twitter?.description || openGraph?.description || description} />}
    {(twitter?.image || openGraph?.image) && <meta name="twitter:image" content={twitter?.image || openGraph?.image} />}
  </Helmet>
);
