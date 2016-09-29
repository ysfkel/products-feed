
(function () {
    var utillity;

    var products = [
        {
            _id: 1,
            name: "prod1",
            categories: {
                category: {
                    path: "software",
                    $t: "software"
                }
            }
        },
        {
            _id: 2,
            name: "prod2",
            categories: {
                category: {
                    path: "software",
                    $t: "software"
                }
            }
        },
        {
            _id: 3,
            name: "prod3",
            categories: {
                category: {
                    path: "laptop",
                    $t: "laptop"
                }
            }
        },
        ,
        {
            _id: 4,
            name: "prod4",
            categories: {
                category: {
                    path: "books",
                    $t: "books"
                }
            }
        },
        ,
        {
            _id: 5,
            name: "prod5",
            categories: {
                category: {
                    path: "books",
                    $t: "books"
                }
            }
        }
    ]
    describe('testing utillity service', function () {
        beforeEach(module('ngApp'))
        describe('testing controller', function () {

            beforeEach(inject(function ($injector) {
                utillity = $injector.get('Utillity');
            }));

            afterEach(function () { })

            it('should init title', function () {
                var navitems = [];
                // console.log('exists',utillity.exists(9,[1,2,3]))
                navitems = utillity.buildNavigation(products);

                expect(navitems.length == 3).toBeTruthy();
            });

            it('should get product by ID', function () {
                product = utillity.getProductById(products, 2)
                expect(product.name === 'prod2').toBeTruthy();
            })

            it('should return null if product does not eists', function () {
                product = utillity.getProductById(products, 98798797)
                expect(product === null).toBeTruthy();
            })

            it('should return false', function () {
                var res = utillity.exists(10, [1, 2, 3, 4]);
                expect(res === false).toBeTruthy();
            })
            it('should return true', function () {
                var res = utillity.exists(1, [1, 2, 3, 4]);
                expect(res === true).toBeTruthy();
            });

            it('should add item  to list', function () {
                var list = utillity.addItemToList(1, []);
                var res = utillity.exists(1, list)
                expect(res === true).toBeTruthy();
            });

            it('should not add duplicate value to list', function () {
                var list = utillity.addItemToList(1, [1]);
                var res = utillity.exists(1, list)
                expect(list.length === 1 && res === true).toBeTruthy();
            });

            it('should  get products by category', function () {
                var list = utillity.getProductByCategory(products, 'software');

                expect(list.length === 2).toBeTruthy();
            });

            it('should return 0', function () {
                var list = utillity.getProductByCategory(products, 'none');

                expect(list.length === 0).toBeTruthy();
            });




        })
    })

})();