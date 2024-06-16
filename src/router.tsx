import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Header from './components/Header'
import Home from './pages/Home';
import Blog from './pages/Blog';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/"         element={<Home />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/blog"     element={<Blog />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume"   element={<Resume />} />
      <Route path="/"         element={<NotFound />} />
    </BrowserRouter>
  );
}
