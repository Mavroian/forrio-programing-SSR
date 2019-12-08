import React from "react";
import { Route, Switch } from "react-router-dom"
import CreatorsList from "./components/creator-list/creatorList.component"
import Profile from "./components/profile/profile.component"
import Works from "./components/works/creator-works.component"
import Navbar from "./components/header/navbar.component"


export default () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={CreatorsList} />
        <Route exact path="/:username" render={(props) => <Profile props={props} />} />
        <Route exact path="/works/:workid" render={(props) => <Works props={props} />} />
      </Switch>
    </div>
  )
}