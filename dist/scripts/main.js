

(function (){
   var app = angular.module('HolidayList', ['ngRoute']);//setter

   app.config( function ($routeProvider){

     $routeProvider.when('/', {
       templateUrl: 'templates/home.html',
       controller: 'GiftsController'
     });

     $routeProvider.when('/single/:id',{
       templateUrl: 'templates/single.html',
       controller:  'GiftsController'
     });

     $routeProvider.when('/add', {
       templateUrl:'templates/add.html',
       controller:'GiftsController'
     })

   });



  app.directive('clickTurkey', function(){
    return {
      link: function ($scope, element, attrs){
        element.bind('click',function (){
          console.log('Turkey');
        });
      }
    }
  });

}());
//angular.module('something', []); //getter
// app.controller('Home', ['$scope', function ($scope){
//
//   $scope.name = 'Victoria';
//
//   $scope.clickMe = function (){
//     alert('I was clicked');
//   };
//
// }]);


(function (){
  angular.module('HolidayList')
  .controller('GiftsController',
   ['giftsFactory','$scope', '$location', '$rootScope',
    function( giftsFactory, $scope, $location, $rootScope){

     giftsFactory.getGifts().success(function(data){
       $scope.gifts = data;

          });
     $scope.addGift = function(gift) {
       giftsFactory.addGift(gift);
        $location.path('/');
     }

  }]);


}());



(function (){
  angular.module('HolidayList')
  .factory('giftsFactory', ['$rootScope', '$http', function($rootScope, $http){

    var url ="http://tiy-atl-fe-server.herokuapp.com/collections/vicholidaylist/";

    function getGifts (){
      return $http.get(url);
      }

      function getGift (id){
        return $http.get(url + id);
      }

      function addGift(gift) {
        $http.post(url, gift).success(function(){
          $rootScope.$broadcast('gift:added');
        });
      }

      return {

        getGifts: getGifts,
        getGift: getGift,
        addGift: addGift
      };

  }]);

}());
