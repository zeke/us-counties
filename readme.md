# US Counties

> A GeoJSON object containing geometries of every county in the US.

The data came from https://github.com/jgoodall/us-maps, which was derived from US Census shapefiles.

:warning: This module loads a ~170MB JSON object into memory, so your mileage may vary. See [server usage](#server-usage) or consider running your process with the v8 `max-old-space-size` flag, like `node -–max-old-space-size=8192 your-file.js`.

## Installation

```sh
npm install us-counties
```

## Programmatic Usage

This module plays nicely with the [which-polygon](https://ghub.io/which-ploygon) package for looking up counties by lng/lat coordinate:

```js
const counties = require('us-counties')
const whichPolygon = require('which-polygon')
const findCounty = whichPolygon(counties)
const coords = [-109.82152075444654, 33.987415215464544]
const result = findCounty(coords)
```

Results look like this:

```js
{ STATEFP10: '04',
  COUNTYFP10: '001',
  COUNTYNS10: '00025441',
  GEOID10: '04001',
  NAME10: 'Apache',
  NAMELSAD10: 'Apache County',
  LSAD10: '06',
  CLASSFP10: 'H1',
  MTFCC10: 'G4020',
  CSAFP10: null,
  CBSAFP10: null,
  METDIVFP10: null,
  FUNCSTAT10: 'A',
  ALAND10: 29001443825,
  AWATER10: 54175788,
  INTPTLAT10: '+35.3858453',
  INTPTLON10: '-109.4937467',
  state: 'AZ' }
```

## Server Usage :rocket:

If you're writing a program that is already hungry for RAM, you can
avoid out-of-memory errors by running this module as a webserver in a separate process:

```sh
$ npx us-counties
```

Now there's a server running on port 5000. Make requests by passing `lng` and `lat` as query params, like [localhost:5000/?lng=-109.82152075444654&lat=33.987415215464544](http://localhost:5000/?lng=-109.82152075444654&lat=33.987415215464544)

```
npm i -g json
curl -s "http://localhost:5000/?lng=-109.82152075444654&lat=33.987415215464544" | json
```


## License

MIT
