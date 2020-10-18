# remove-diacritical-marks

[![Build Status](https://travis-ci.com/papasavvas/remove-diacritical-marks.svg?branch=main)](https://travis-ci.com/papasavvas/remove-diacritical-marks)
[![codecov](https://codecov.io/gh/papasavvas/remove-diacritical-marks/branch/main/graph/badge.svg?token=PJYDUFN0DN)](undefined)
![npm](https://img.shields.io/npm/dm/remove-diacritical-marks)
![npm](https://img.shields.io/npm/v/remove-diacritical-marks)
![NPM](https://img.shields.io/npm/l/remove-diacritical-marks?color=blue)


An npm module to remove the diacritical marks from characters in a text. The covered range is 0300 to 036F of the  [Unicode Standard](https://unicode.org/charts/PDF/U0300.pdf).
It supports multiple languages.

##Installation:
```js
npm install remove-diacritical-marks
```

##Usage:
### Javascript
```js
const removeDiacriticalMarks = require('remove-diacritical-marks')
const textWithoutDiacritics = removeDiacriticalMarks('Μου αρέσει η Crème brûlée')

console.log(textWithoutDiacritics) //Μου αρεσει η Creme brulee
```

### Typescript
```js
import removeDiacriticalMarks  from 'remove-diacritical-marks'
const textWithoutDiacritics : string = removeDiacriticalMarks('Μου αρέσει η Crème brûlée')

console.log(textWithoutDiacritics) //Μου αρεσει η Creme brulee
```

## Tests
Clone the repo, `npm install`, and run `npm test`