const babelOptions = {
   plugins: ['@babel/plugin-proposal-optional-chaining', '@babel/plugin-proposal-export-default-from'],
   presets: [
      [
         'babel-preset-gatsby',
         {
            targets: {
               browsers: ['>0.25%', 'not dead'],
            },
         },
      ],
   ],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
