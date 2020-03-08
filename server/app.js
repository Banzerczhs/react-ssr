import React from "react";
// import App from "../src/App.js";
import Koa from "koa";
import koaStatic from "koa-static";
import koaRouter from "@koa/router";
import {renderToString,renderToNodeStream} from "react-dom/server";
//路由渲染，由于服务端没有bowserRouter，所以我们要用staticRouter来进行操作。
import { StaticRouter } from "react-router-dom";
import Router from "../src/router";
import path from "path";
import fs from "fs";

import webpack from "webpack";
import { devMiddleware ,hotMiddleware} from 'koa-webpack-middleware';
import getConfig from "../config/webpack.config";

import { Provider } from 'react-redux';
import configureStore from '../src/store';
import {fetchUserData} from "../src/api/user";

const config={
    port : 3030
};

let app=new Koa();

let router=new koaRouter();

app.use(koaStatic(path.join(__dirname,'../build'),{
    index : 'aasd'
}));

app.use(handleRender);

app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());

async function handleRender(ctx,next){
    ctx.respond=false;
    ctx.res.setHeader('Content-Type','text/html;charset=utf-8');
    let stateData=await fetchUserData();
    
    let preloadState={User : {...stateData},Counter : 0};
    let store=configureStore(preloadState);
    
    let context={};
    const html = renderToString(
        <Provider store={store}>
            <StaticRouter
                location={ctx.url}
                context={context}>
                <Router/>
            </StaticRouter>
        </Provider>
    );

    if(!context.status){
        // let data=fs.readFileSync(path.join(__dirname, '../build/index.html'), 'utf8');
        // let shtml=data.split(/\{\{\w+\}\}/g);
        ctx.res.statusCode=200;
        // ctx.res.write(shtml[0]);

        let initState=store.getState();
        let result=await handlehtml(html,initState);

        ctx.res.end(result);
        // html.pipe(ctx.res,{end:false});
        // html.on('end',function(){
        //     ctx.res.write(`
        //         ${shtml[1]}
        //         <script>
        //             window.__PRELOADED_STATE__=${JSON.stringify(initState)}
        //         </script>
        //         ${shtml[shtml.length-1]}
        //     `);

        //     ctx.res.end();
        //     next();
        // });
    }else{
        ctx.res.statusCode=context.status;
        ctx.res.end("error code：" + context.status);
    }
}

//当使用renderToString的时候使用此方法
async function handlehtml(html,state){
    return new Promise((res,rej)=>{
        fs.readFile(path.join(__dirname, '../build/index.html'), 'utf8',function(err,data){
            if(err){
                console.log(err);
                rej(err);
            }else{
                let shtml=data.replace('{{root}}',html).replace('{{initstate}}',`
                    <script>
                        window.__PRELOADED_STATE__=${JSON.stringify(state)}
                    </script>
                `)
                res(shtml);
            }
        })
    })
}

let webpackConfig=getConfig('development');
const compiler = webpack(webpackConfig);
app.use(devMiddleware(compiler, {noInfo:true, publicPath: webpackConfig.output.publicPath }));
app.use(hotMiddleware(compiler));

app.listen(config.port,function(error){
    if (error) {
        console.error(error);
    }else{
        console.log('listening 🌏 server port='+config.port+'....');
    }
})