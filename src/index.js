import express from 'express';
import React from 'react';
import { renderToString } from "react-dom/server"
import Homepage from "./client/components/homepage/homepage.component"

const app = express()

app.use(express.static(`public`))
app.get(`/`, (req, res) => {
  const content = renderToString(<Homepage />)

  const html = `
    <html>
      <head></head>
      <body>
          <div id=root>${content}</div>
          <script src="bundle.js"></script> 
      </body>
    </html>
  `;

  res.send(html)
})
app.listen(5000, () => {
  console.log("server running")
})