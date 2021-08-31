import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../containers/Home.jsx";
import Login from "../containers/Login.jsx";
import Register from "../containers/Register.jsx";
import NotFound from "../containers/NotFound.jsx";

const App = () => (
  <BrowserRouter>
    <Route path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/404" component={NotFound} />
  </BrowserRouter>
);

export default App;
