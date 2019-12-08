import "babel-polyfill"
import express from 'express';
import React from 'react';
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom";
import Routes from "./client/Routes"
import createStore from "./client/Store/createStore"
import { Provider } from "react-redux";

const app = express();
const port = 5000;

app.use(express.static(`public`))
app.get(`*`, (req, res) => {
  const store = createStore()

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  )

  const html = `
  <html lang="en">
      <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
      </head>
      <body>
          <div id=root>${content}</div>
          <script src="/bundle.js"></script> 
      </body>
  </html>
  `;


  res.send(html)
})
app.listen(process.env.PORT || port, () => {
  process.stdout.write(`Server running on port ${port}....\nPress Ctr+C to stop the server`)
})