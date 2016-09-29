
(function () {
    var LocalStore;

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
    describe('localStorage  test suite', function () {
        beforeEach(module('ngApp'))
        describe('testing controller', function () {

            beforeEach(inject(function ($injector) {
                LocalStore = $injector.get('LocalStore');
            }));

            afterEach(function () { })

            it('should define save', function () {
                expect(LocalStore.save).toBeDefined();
            });

            it('should define getStore', function () {
                expect(LocalStore.getStore).toBeDefined();
            });

            it('should define clear', function () {
                expect(LocalStore.clear).toBeDefined();
            });

            it('should  save items', function () {
                 LocalStore.save(products);
                 var items=LocalStore.getStore();
                expect(items.length===products.length && items.length>0).toBeTruthy();
            });
           it('should  clear items', function () {
          
                 LocalStore.save([1,2,3,4,5]);
                LocalStore.clear();
               var items=LocalStore.getStore();
                expect(items.length===0).toBeTruthy();
            });
            


        })
    })

})();