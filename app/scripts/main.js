

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
