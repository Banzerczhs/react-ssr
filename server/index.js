// require('@babel/core');
// require('@babel/generator');
const syntax = require('postcss-less').parse;
const path=require('path');

require('css-modules-require-hook')({
    extensions : ['.less'],
    processorOpts : {parser: syntax},
    camelCase: true,
    generateScopedName: '[name]_[local]__[hash:base64:5]',
    rootDir : path.resolve(__dirname,'../src')
});

require('asset-require-hook')({
    extensions : ["svg","jpg","png","gif"],
    limit : 5000,
    name: 'static/media/[name].[ext]'
})

require('@babel/register');

require('./app');
