import "babel-polyfill"
import express from 'express';
import React from 'react';
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom";
import Routes from "./client/Routes"
import createStore from "./client/Store/createStore"
import { Provider } from "react-redux";

const app = express()

app.use(express.static(`public`))
app.get(`*`, (req, res) => {
  const store = createStore()
  //logic for data into the sore

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  )

  const html = `
    <html>
      <head>
      </head>
      <body>
          <div id=root>${content}</div>
          <script src="bundle.js"></script> 
      </body>
    </html>
  `;


  res.send(html)
})
app.listen(5000, () => {
  process.stdout.write("server running")
})