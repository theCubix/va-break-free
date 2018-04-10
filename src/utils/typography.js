'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '14px',
  baseLineHeight: 1.62,
  scaleRatio: 4,
  googleFonts: [
    {
      name: 'Roboto Condensed',
      styles: [
        '700'
      ]
    },
    {
      name: 'Roboto',
      styles: [
        '400',
        '700'
      ]
    }
  ],
  headerFontFamily: [
    'Roboto Condensed',
    'sans-serif'
  ],
  bodyFontFamily: [
    'Roboto',
    'sans-serif'
  ],
  headerGray: 10,
  bodyGray: 25,
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  includeNormalize: true,
});

export default typography;