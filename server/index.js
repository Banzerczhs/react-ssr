// require('@babel/core');
// require('@babel/generator');
const path=require('path');
const {parseLess}=require('./parserLess');

require('css-modules-require-hook')({
    extensions : ['.less'],
    preprocessCss : function(css,filename){
        return parseLess(css,{filename});
    },
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
