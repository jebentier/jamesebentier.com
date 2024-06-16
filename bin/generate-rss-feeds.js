#!/usr/bin/env node

const fs = require('fs');
const RSS = require('rss');
const BlogPosts = require('../public/blog/manifest.json');
const Projects = require('../public/projects/manifest.json');

const rootUrl = 'jamesebentier.com';

const blogFeed = new RSS({
  title: 'James Ebentier Blog | RSS Feeds',
  description: 'Welcome to my blog!',
  site_url: `${rootUrl}/blog`,
  feed_url: `${rootUrl}/blog/rss.xml`,
  image_url: `${rootUrl}/logo.png`,
  pubDate: new Date(),
  copyright: `All rights reserved ${new Date().getFullYear()}, James Ebentier`,
});

BlogPosts.forEach((post) => {
  blogFeed.item({
    title: post.title,
    description: post.description,
    url: `/blog/${post.id}`,
    guid: post.id,
    date: new Date(post.publishedAt),
  });
});

const projectFeed = new RSS({
  title: 'James Ebentier Projects | RSS Feeds',
  description: 'Welcome to my projects!',
  site_url: `${rootUrl}/projects`,
  feed_url: `${rootUrl}/projects/rss.xml`,
  image_url: `${rootUrl}/logo.png`,
  pubDate: new Date(),
  copyright: `All rights reserved ${new Date().getFullYear()}, James Ebentier`,
});

Projects.forEach((project) => {
  projectFeed.item({
    title: project.title,
    description: project.description,
    url: project.url,
    guid: project.guid,
    enclosure: {
      url: project.image,
    },
  });
});

fs.writeFileSync('./public/blog/rss.xml', blogFeed.xml({ indent: true }));
fs.writeFileSync('./public/projects/rss.xml', projectFeed.xml({ indent: true }));
