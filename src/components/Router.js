import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import StorePicker from "./StorePicker";
import App from "./App";
// import NotFound from "./NotFound";
import Admin from './Admin';
import NotFound from "./NotFound";
// import Cards from './Cards';

const Router = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component = {App} />
        <Route path="/admin/" component= {Admin} />
        <Route  component= {NotFound} />

        {/* <Route component= {NotFound} /> */}
        
    </Switch>
    </BrowserRouter>
)

export default Router;