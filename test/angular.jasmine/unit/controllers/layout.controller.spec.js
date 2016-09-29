
(function () {

    describe('layoutController test suite', function () {
   //   LayoutController.$inject=['$rootScope','WebSocket','LocalStore','Utillity'];
        var controller, rootScope, utillity, webSocket, localStore;
        beforeEach(module('ngApp'));

 
        describe('testing layout controller', function () {

           beforeEach(inject(function ($controller, _$rootScope_, _Utillity_, WebSocketMock, _LocalStore_) {
      
               rootScope=_$rootScope_;
               webSocket=WebSocketMock;
               utillity=_Utillity_;
               localStore=_LocalStore_

                scope=_$rootScope_.$new;
                 controller=$controller('LayoutController',{
                     $scope:scope,
                     WebSocket:WebSocketMock,
                     Utillity:utillity,
                     LocalStore:localStore,
                     $rootScope:rootScope
                    });
           }));

            afterEach(function () { })
            it('should define filterProducts', function () {
                 expect(controller.filterProducts).toBeDefined();
            });
              it('should define showAllProducts', function () {
                 expect(controller.showAllProducts).toBeDefined();
            });
         it('should define refreshProductsList', function () {
                 expect(controller.refreshProductsList).toBeDefined();
            });

            it('should call localStore.getStore', function () {
                 localStore.save(getProducts())
                 var products=localStore.getStore();
                 spyOn(localStore,'getStore');
                 controller.filterProducts('software');
                 expect(localStore.getStore).toHaveBeenCalled();
            });

              it('should call Utillity.getProductByCategory', function () {
                 localStore.save(getProducts())
                 var products=localStore.getStore();
                 spyOn(utillity,'getProductByCategory');
                 controller.filterProducts('software');
                 expect(utillity.getProductByCategory).toHaveBeenCalled();
            });
              it('should call localStore.getstore', function () {
               
                 spyOn(localStore,'getStore');
                 controller.showAllProducts();
                 expect(localStore.getStore).toHaveBeenCalled();
            });
            it('should call localStore.getstore', function () {
                 spyOn(controller,'refreshProductsList');
                 controller.showAllProducts();
                 expect(controller.refreshProductsList).toHaveBeenCalled();
            });
            it('should call localStore.getstore', function () {
                 spyOn(rootScope,'$broadcast');
                 controller.refreshProductsList(getProducts(),'software');
                 expect(rootScope.$broadcast).toHaveBeenCalled();
            });

            it('should call localStore.getstore', function () {
                 spyOn(rootScope,'$broadcast');
                 controller.refreshProductsList(getProducts(),'software');
                 expect(rootScope.$broadcast).toHaveBeenCalled();
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