
/**
 * @ngdoc
 * @name product.api
 * @description recieves a request for product list from a client, responds 
 *              by sending product categories list and products list to client 
 *              by emitting the requested data to the client via a socket connection
 */
var router = require('express')();
var FeedParser = require('./feed-parser.api');
var router = require('express')();
var FeedParser = require('./feed-parser.api');
var productUtill = require('../www/app/utillity/product-utillity');



router.route('/v1/products/list')
    .post(function (req, res) {

       try{
           //retrive xml url from  request boay
            var url = req.body.url;
            var socketid=req.body.socketid;

            FeedParser.parseUrl(url, function (productCollection) {
                //gets product categories
                var categories = productUtill.buildNavigation(productCollection.product);
                //emit categories
                req.socket.to(socketid).emit('categories', { categories: categories })
                //emit products list
                req.socket.to(socketid).emit('products', productCollection.product)
                res.end();
            // return res.json(productCollection.product)
            })
       }
       catch(e){
          
            req.socket.emit('error:product')
            res.end();
          
       }

    });


module.exports = router;