  /**
   * @ngdoc
   * @name parseUrl   
   * @description recives a url and makes a call to the url to get xml           
   */
var xmlToJson = require('../services/xmlparser');
var ProductCollection = require('../models/productCollection.js');
var defaultUrl=require('../config/app.infra.config').defaultURL;


 FeedParser={
          /**
            * @name parseUrl
            * @param {string} xml _url feed url 
            * @param {Function} callback    
            * @description fetches xml feed, parses the result to json         
            */
          parseUrl:function(_url,callback){
              var url=_url||defaultUrl;
              xmlToJson(url, function (err, data) {
                    if (err) {
                        // Handle this however you like
                        return console.err(err);
                    }
                    //creates productCollection
                    var productCollection = new ProductCollection(data.products)
                    if(typeof callback==='function'){
                       callback(productCollection)
                    }
                    else{
                        throw new Error("error! callback should be a fuction")
                    }
            });
         }
   
}

module.exports=FeedParser;