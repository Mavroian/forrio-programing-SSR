import React from "react";
import { Route, Switch } from "react-router-dom"
import Homepage from "./components/homepage/homepage.component";
import CreatorsList from "./components/creator-list/creatorList.component"
import Profile from "./components/profile/profile"

export default () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={CreatorsList} />
        <Route exact path="/:username" render={(props) => <Profile props={props} />} />
      </Switch>
    </div>
  )
}