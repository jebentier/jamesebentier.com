import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Converter } from 'showdown';
import { Parser as HtmlToReactParser } from 'html-to-react';
import { Helmet } from 'react-helmet';

const markdownToHtmlConverter = new Converter();
const htmlToReactParser       = new HtmlToReactParser();

const loadPostMarkdown = async (id) => {
  const response = await fetch(`/blog/${id}.md`);
  return await response.text();
}

const Post = ({ id }) => {
  const [post, setPost] = useState('Loading...');

  loadPostMarkdown(id).then((markdown) => setPost(markdown));

  return (
    <div className='blog-post'>
      <Helmet>
        <title>James Ebentier - Blog - {id}</title>
      </Helmet>
      {htmlToReactParser.parse(markdownToHtmlConverter.makeHtml(post))}
    </div>
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
    </div>
  );
}