

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
     });

     $routeProvider.when('/edit', {
       templateUrl: 'templates/single.html',
       controller: 'EditController'
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
