# US Counties

> A GeoJSON object containing geometries of every county in the US.

The data came from https://github.com/jgoodall/us-maps, which was derived from US Census shapefiles.

## Installation

```sh
npm install us-counties
```

## Usage

Plays nicely with the [which-polygon](https://ghub.io/which-ploygon) package for looking up counties by lng/lat coordinate:

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
  INTPTLON10: '-109.4937467' }
```

## Dependencies

None

## Dev Dependencies

None

## License

MIT
