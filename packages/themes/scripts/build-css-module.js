import * as theme from '../dist/index.js';
import fs from 'fs';

// console.log(Object.entries(theme.vars.colors.$static.light));

// :root {
//   --gray-900 : #1a202c;
// }

const toCssCasting = (str) => {
  return str
    .replace(/([a-z])(\d)/, '$1-$2')
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase();
};

const generateThemeCssVariable = () => {
  let cssValue = '';
  Object.entries(theme.vars).forEach(([key, value]) => {
    if (key === 'colors') {
      Object.entries(value.$static).forEach(([colorKey, colorValue]) => {
        if (colorKey === 'light') {
          const selector = ':root';

          const cssVariable = Object.entries(colorValue)
            .map(([mainKey, mainValue]) =>
              Object.entries(mainValue)
                .map(
                  ([subKey, subValue]) =>
                    `--${toCssCasting(mainKey)}-${toCssCasting(
                      subKey
                    )} : ${subValue};`
                )
                .join('\n')
            )
            .join('\n');
          // console.log('cssVariable : ', typeof cssVariable);
          cssValue = `${selector} {\n${cssVariable}\n}`;
        }
      });
    }
  });
  return cssValue;
};

const generateThemeCss = () => {
  const variables = generateThemeCssVariable();
  console.log('variables : ', variables);
  fs.writeFileSync('dist/themes.css', variables);
};

generateThemeCss();
