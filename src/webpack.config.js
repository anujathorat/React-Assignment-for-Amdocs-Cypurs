var config = {
    entry : ["babel-polyfill", "./index.js"],
    output:{
        path:'/',
        filename:'index.js'
    },
    devServer:{
        inline:true,
        port:8080
    },
    module:{
        loaders:[
            test: /\.js$/,
            loader: 'babel-loader';
            query: {
                 presets: ['es2015', 'react']
            }
        ]
    }
}