import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import Markdown from 'react-markdown'
import { Helmet } from 'react-helmet';
import NotFound from './NotFound';

type BlogPost = {
  id: string,
  title: string,
  description: string,
  publishedAt: string,
  keywords: string,
};

const loadPostMarkdown = async (id: string) => {
  const response = await fetch(`/blog/${id}.md`);
  return await response.text();
}

const Post = (metadata: BlogPost) => {
  const [post, setPost] = useState('Loading...');

  loadPostMarkdown(metadata.id).then((markdown) => setPost(markdown));

  return (
    <div className='blog-post'>
      <Helmet>
        <title>{metadata.id} | Blog | James Ebentier</title>
        <meta name="keywords" content={metadata.keywords} />
        <meta name="description" content={metadata.description} />
      </Helmet>
      {/* <Markdown>{post}</Markdown> */}
    </div>
  );
}

const Preview = ({ id, title, publishedAt, description }: BlogPost) => {
  return (
    <Link to={`/blog/${id}`} className='blog-preview'>
      <h3>{title}</h3>
      <p className='tiny'>Published: {publishedAt}</p>
      <p className='description'>{description}</p>
    </Link>
  );
}

export default function Blog() {
  const { id } = useParams();
  const [blogManifest, setBlogManifest] = useState<BlogPost[] | undefined>();

  if (!blogManifest) {
    fetch('/blog/manifest.json').then((response) => response.json()).then(setBlogManifest);
    return <div>Loading...</div>;
  }

  if (id) {
    const metadata = blogManifest.find((post: BlogPost) => post.id === id);
    if (!metadata) return <NotFound />;
    return <Post {...metadata} />;
  }

  return (
    <div className='blog'>
      <Helmet>
        <title>Blog | James Ebentier</title>
      </Helmet>
      <h1>Recent Blog Posts</h1>
      {blogManifest.map((post: BlogPost) => <Preview key={post.id} {...post} />)}
    </div>
  );
}
