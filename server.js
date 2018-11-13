#!/usr/bin/env node

const express = require('express')
const counties = require('.')
const whichPolygon = require('which-polygon')
const whichCounty = whichPolygon(counties)
const port = Number(process.env.PORT) || 5000
const app = express()

app.get('/*', (req, res, next) => {
  const {lng, lat} = req.query
  
  
  if (!lng || !lat) {
    let reply = '`lng` and `lat` query params required.\n'
    reply += `Try http://localhost:${port}/?lng=-109.82152075444654&lat=33.987415215464544`
    return res.send(reply)
  }
  console.log(req.query)

  const county = whichCounty([lng, lat]) || {}
  return res.json(county)
})

if (!module.parent) {
  app.listen(port, () => {
    console.log(`us-counties running on http://localhost:${port}`)
  })
}

module.exports = app