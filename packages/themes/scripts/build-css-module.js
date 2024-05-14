import * as theme from '../dist/index.js';
import fs from 'fs';

// console.log(Object.entries(theme.vars.colors.$static.light));

Object.entries(theme.vars).forEach(([key, value]) => {
  console.log(key, value.$static.light);
  // Object.entries(value.$static.light).forEach(([key2, value2]) => {
  //   console.log(key2, value2);
  // });
  //
});

fs.writeFileSync('dist/theme.css', '');
