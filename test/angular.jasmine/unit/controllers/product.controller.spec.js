
(function () {

    describe('productListController test suite', function () {

        var controller, rootScope, dialogService, http, utillity, webSocket, localStore;
        beforeEach(module('ngApp'));


        describe('testing controller', function () {
            // var scope,ctr;

           beforeEach(inject(function ($controller, _$rootScope_, _DialogService_, _$http_, _Utillity_, WebSocketMock, _LocalStore_) {
               dialogService = _DialogService_;
               rootScope=_$rootScope_;
               http=_$http_;
               utillity=_Utillity_;
               localStore=_LocalStore_

                scope=_$rootScope_.$new;
                 controller=$controller('productListController',{
                     $scope:scope,
                     WebSocket:WebSocketMock,
                     Utillity:utillity,
                     LocalStore:localStore,
                     DialogService:dialogService,
                     $http:http,
                     $rootScope:rootScope
                    });
           }));

            afterEach(function () { })
            it('should define collection', function () {
                 expect(controller.collection).toBeDefined();
            });
              it('should define category', function () {
                 expect(controller.category).toBeDefined();
            });
         it('should define fetchProducts', function () {
                 expect(controller.fetchProducts).toBeDefined();
            });

          it('should define getProductById', function () {
                 expect(controller.getProductById).toBeDefined();
            });
            
            it('should call localStore.getStore', function () {
                 localStore.save([{_id:1},{_id:2}])
                 var products=localStore.getStore();
                 spyOn(localStore,'getStore');
                 controller.getProductById(1);
                 expect(localStore.getStore).toHaveBeenCalled();
            });

            it('should call Utillity.getProductById', function () {
                 localStore.save([{_id:1},{_id:2}])
                 var products=localStore.getStore();
                 spyOn(utillity,'getProductById');
                 controller.getProductById(1);
                 expect(utillity.getProductById).toHaveBeenCalled();
            });
            it('should call  DialogService.open', function () {
                 localStore.save([{_id:1},{_id:2}])
                 var products=localStore.getStore();
                 spyOn(dialogService,'open');
                 controller.getProductById(1);
                 expect(dialogService.open).toHaveBeenCalled();
            });
              it('should call collection.fetch', function () {
                 spyOn(controller.collection,'fetch');
                 controller.fetchProducts();
                 expect(controller.collection.fetch).toHaveBeenCalled();
            }); 
      

        })
    })

})();

function getProducts() {
    return [{
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
}