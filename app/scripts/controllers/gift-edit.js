
(function () {

  angular.module('HolidayList')
  .controller('EditController',
          ['$scope','$routeParams','$location','giftsFactory',
  function ($scope,  $routeParams,  $location,  giftsFactory) {

    giftsFactory.getGift($routeParams.id).success( function (data) {
      $scope.gift = data;
    });

    $scope.editGift = function(gift) {

      giftsFactory.editGift(gift).success(function(){
        $location.path('/');
      });
    }

    $scope.deleteGift = function(gift) {
      giftsFactory.editGift(gift).success(function(){
        $location.path('/');
      });

    }

  }]);

}());
