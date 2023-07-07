import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Router } from "./components/Router.tsx";
import { Route } from "./components/Route.tsx";
import About from "./page/About.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={<App />} />
      <Route path="/about" component={<About />} />
    </Router>
  </React.StrictMode>
);
