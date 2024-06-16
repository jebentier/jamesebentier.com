import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Markdown from 'react-markdown'
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
    <div className='prose w-full max-w-none'>
      <Helmet>
        <title>{metadata.id} | Blog | James Ebentier</title>
        <meta name="keywords" content={metadata.keywords} />
        <meta name="description" content={metadata.description} />
      </Helmet>
      <Markdown>{post}</Markdown>
    </div>
  );
}

const Preview = ({ id, title, publishedAt, description }: BlogPost) => {
  return (
    <Link to={`/blog/${id}`} className='blog-preview block mb-6 p-6 border border-[#eaeaea] rounded bg-white shadow-lg text-justify w-full text-black no-underline'>
      <h3 className='text-xl'>{title}</h3>
      <p className='text-sm text-[#999] my-2'>Published: {publishedAt}</p>
      <p className='mb-0'>{description}</p>
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
    <div className='relative top-1/2 text-center font-thin'>
      <Helmet>
        <title>Blog | James Ebentier</title>
      </Helmet>
      <h1 className='text-3xl mb-4'>Recent Blog Posts</h1>
      {blogManifest.map((post: BlogPost) => <Preview key={post.id} {...post} />)}
    </div>
  );
}
