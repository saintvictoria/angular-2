

(function (){
   var app = angular.module('HolidayList', ['ngRoute']);//setter

   app.config( ['$routeProvider',
       function ($routeProvider){


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
     });

     $routeProvider.when('/edit/:id', {
       templateUrl: 'templates/single.html',
       controller: 'EditController'
     });
     /*
     $routeProvider.when('/search/:query',{
       templateUrl: 'searchterm.html',
       controller: 'SearchController'
     });
     */
   }]);


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
  .factory('giftsFactory',
  ['$rootScope','$http', function
   ($rootScope,  $http) {

    var url ="http://tiy-atl-fe-server.herokuapp.com/collections/vicholidaylist/";

    function getGifts () {
      return $http.get(url);
      }

      function getGift (id) {
        return $http.get(url + id);
      }

      function addGift(gift) {
        return $http.post(url, gift).then(function(){
          $rootScope.$broadcast('gift:added');
        });
      }

      function editGift(gift) {
        return $http.put(url + gift._id, gift).then(function(){
          $rootScope.$broadcast('gift:editted');
        });
      }

      function deleteGift(gift) {
        return $http.delete(url + gift._id, gift).then(function(){
          $rootScope.$broadcast('gift:deleted');
        });
      };

      return {

        getGifts: getGifts,
        getGift: getGift,
        addGift: addGift,
        editGift: editGift,
        deleteGift: deleteGift
      };

  }]);

}());


(function (){
  angular.module('HolidayList')
  .controller('GiftsController',
            ['giftsFactory','$scope','$location','$rootScope',
    function( giftsFactory,  $scope,  $location,  $rootScope){

     giftsFactory.getGifts().success(function(data){
       $scope.gifts = data;

          });
     $scope.addGift = function(gift) {
       giftsFactory.addGift(gift);
       $rootScope.$on('gift:added', function(){
         $location.path('/');
       });



     }

  }]);


}());


(function () {

  angular.module('HolidayList')
  .controller('EditController',
          ['$scope','$routeParams','$location','giftsFactory','$rootScope',
  function ($scope,  $routeParams,  $location,  giftsFactory,  $rootScope) {

    giftsFactory.getGift($routeParams.id).success( function (data) {
      $scope.gift = data;
    });

    $scope.editGift = function(gift) {
      giftsFactory.editGift(gift);
      $rootScope.$on('gift:editted', function (){
        $location.path('/');
      });
    }

    $scope.deleteGift = function(gift) {
      giftsFactory.deleteGift(gift);
      $rootScope.$on('gift:deleted', function(){
        $location.path('/');
      });

      };



  }]);

}());
