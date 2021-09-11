import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './components/Header'
import Home from './pages/Home';
import Blog from './pages/Blog';
import Resume from './pages/Resume';
import NotFound from './pages/NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/"       component={() => <Home />} />
        <Route path="/blog/:id"     component={() => <Blog />} />
        <Route path="/blog"         component={() => <Blog />} />
        <Route exact path="/resume" component={() => <Resume />} />
        <Route path="/"             component={() => <NotFound />} />
      </Switch>
    </BrowserRouter>
  );
}
