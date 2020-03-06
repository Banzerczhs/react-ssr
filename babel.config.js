module.exports={
    presets: [
        ["@babel/preset-env",{
            useBuiltIns : "usage",
            corejs : 3
        }],
        '@babel/preset-react'
    ],
    plugins: [
        [
            require("@babel/plugin-transform-runtime"),
            {
              "absoluteRuntime": false,
              "corejs": false,
              "helpers": true,
              "regenerator": true,
              "useESModules": false,
              "version": "7.0.0-beta.0"
            }
        ]
    ]
}