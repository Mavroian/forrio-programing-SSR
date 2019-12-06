import React from "react";
import { Route } from "react-router-dom"
import Homepage from "./components/homepage.component";
import UsersList from "../client/components/usersList.component"

export default () => {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/users" component={UsersList} />
    </div>
  )
}