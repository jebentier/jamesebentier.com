import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Converter } from 'showdown';
import { Parser as HtmlToReactParser } from 'html-to-react';
import { Helmet } from 'react-helmet';

const markdownToHtmlConverter = new Converter();
const htmlToReactParser       = new HtmlToReactParser();
const blogManifest            = require('../../public/blog/manifest.json');

const loadPostMarkdown = async (id) => {
  const response = await fetch(`/blog/${id}.md`);
  return await response.text();
}

const Post = ({ id }) => {
  const [post, setPost] = useState('Loading...');
  const metadata = blogManifest.find(post => post.id === id);

  loadPostMarkdown(id).then((markdown) => setPost(markdown));

  return (
    <div className='blog-post'>
      <Helmet>
        <title>James Ebentier - Blog - {id}</title>
        <meta name="keywords" content={metadata.keywords} />
        <meta name="description" content={metadata.description} />
      </Helmet>
      {htmlToReactParser.parse(markdownToHtmlConverter.makeHtml(post))}
    </div>
  );
}

const Preview = ({ id, title, published_at: publishedAt, description }) => {
  return (
    <a href={`/blog/${id}`} className='blog-preview'>
      <h3>{title}</h3>
      <p className='tiny'>Published: {publishedAt}</p>
      <p className='description'>{description}</p>
    </a>
  );
}

export default function Blog() {
  const { id } = useParams();

  if (id) {
    return <Post {...{ id }} />;
  }

  return (
    <div className='blog'>
      <Helmet>
        <title>James Ebentier - Blog</title>
      </Helmet>
      <h1>Blog Posts Coming Soon</h1>
      {blogManifest.map((post) => <Preview key={post.id} {...post} />)}
    </div>
  );
}
