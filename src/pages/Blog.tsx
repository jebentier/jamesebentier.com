import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Markdown from 'react-markdown'
import NotFound from './NotFound';
import { SEO } from '../components/SEO';

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
      <SEO title={`${metadata.title} | Blog`} description={metadata.description} keywords={metadata.keywords} />
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
    fetch('/blog/manifest.json')
      .then((response) => response.json())
      .then((posts) => posts.sort((a: BlogPost, b: BlogPost) => (new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())))
      .then(setBlogManifest);
    return <div>Loading...</div>;
  }

  if (id) {
    const metadata = blogManifest.find((post: BlogPost) => post.id === id);
    if (!metadata) return <NotFound />;
    return <Post {...metadata} />;
  }

  return (
    <div className='relative top-1/2 text-center font-thin'>
      <SEO title='Blog' />
      <h1 className='text-3xl mb-4'>Recent Blog Posts</h1>
      {blogManifest.map((post: BlogPost) => <Preview key={post.id} {...post} />)}
    </div>
  );
}
