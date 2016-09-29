var webpack=require('webpack');
module.exports={
    context:__dirname+'/www/app',
    entry:'./app.bootstrap.js',
    output:{
        path:__dirname+'/www/builds',
        filename:'bundle.js'
    },
    module:{
         loaders:[
            {
                test:/\.html$/,
                loader:'raw'
            },
            {
                test:/\.css$/,
                loader:'style!css',
                exclude:/(node_modules|bower_components)/
            },
              {
                test:/\.scss$/,
                loader:'style!css!sass',
                exclude:/(node_modules|bower_components)/
            },
               {
                test:/\.js$/,
                loader:'babel',
                exclude:/(node_modules|bower_components)/,
                query:{
                    presets:['es2015']
                }
            },
            // {
            //     test:/.jsx?$/,
            //     loader:'babel',
            //     exclude:/(node_modules|bower_components)/,
            //     query:{
            //         presets:['es2015']
            //     }
            // },
            {
                test:/src.*\.js$/,
                exclude:/(node_modules|bower_components)/,
                loaders:['ng-annotate','babel-loader']
            }
        ]
    }
}