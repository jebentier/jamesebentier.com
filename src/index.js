import "core-js/stable";
import "regenerator-runtime/runtime";

import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import Router from "./router";

import 'bootstrap/scss/bootstrap.scss';
import "./stylesheets/main.scss";

ReactDOM.render(
  <Suspense fallback='loading'>
    <Router />
  </Suspense>,
  document.querySelector('[data-mount="root"]')
);