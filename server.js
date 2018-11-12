#!/usr/bin/env node

const express = require('express')
const counties = require('.')
const whichPolygon = require('which-polygon')
const whichCounty = whichPolygon(counties)
const port = Number(process.env.PORT) || 5000
const app = express()

app.get('/*', (req, res, next) => {
  console.log(req.query)
  const county = whichCounty([req.query.lng, req.query.lat]) || {}
  return res.json(county)
})

if (!module.parent) {
  app.listen(port, () => {
    console.log(`app running on http://localhost:${port}`)
  })
}

module.exports = app