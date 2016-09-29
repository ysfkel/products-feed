
(function(){

  describe('productDetailsController test suite',function(){
      var products=getProducts(),ctrl,scope;
      beforeEach(module('ngApp'))
      describe('testing controller',function(){
         var scope,ctr;
    
          beforeEach(inject(function($controller,$rootScope){
               scope=$rootScope.$new;
               ctrl=$controller('productDetailsController',{$scope:scope,product:products});
           }));

           afterEach(function(){})
             it('should init product',function(){
               expect(scope.product).toBeDefined();
           });

           
             it('should init product',function(){
               expect(scope.product).toBeDefined();
           });
             it('should define initialTextLength',function(){
               expect(scope.initialTextLength).toBeDefined();
           });
          it('should define initialTextLength',function(){
               expect(scope.textLimit==scope.initialTextLength).toBeTruthy();
           });
         it('should define showmore',function(){
              expect(scope.showmore).toBeDefined();
         });
             it('should define showmore',function(){
                 var text_limit=10;
                 scope.showmore(10);
              expect(scope.textLimit===text_limit).toBeTruthy();
         });

      })
  })

})();

function getProducts(){
      return[{
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