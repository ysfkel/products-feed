

/**
 * @name ProductCollecion
 * @description Model for products
 */
function ProductCollection(service) {
    
    this.service = service
    this.socketid;
    // Default feed url
    this.url = "http://pf.tradetracker.net/?aid=1&type=xml&encoding=utf-8&fid=251713&categoryType=2&additionalType=2&limit=10";
    this.data = [];
}

ProductCollection.prototype.fetch = function (url) {
    var collection = this;
    
    /**
     * uri of backend api that makes a call to the feed end point
     * 
     */
    var uri = '/api/v1/products/list';
    return this.service({
        url: uri,
        method: 'POST',
        data: {
            url:collection.url,
            socketid:collection.socketid
        }
    }).then((res) => {
        this.data=res.data.product;
        return res;
    })
}


module.exports = ProductCollection;

