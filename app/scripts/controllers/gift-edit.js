
(function () {

  angular.module('HolidayList')
  .controller('EditController',
  ['$scope', '$routeParams', '$http', 'appUrl', function ($scope, $routeParams, $http, appUrl) {

    console.log(appUrl);

    $http.get(appUrl + $routeParams.pid).success( function (data) {
      console.log(data);
      $scope.gift = data;
    });

    $scope.editGift = function(gift) {
      giftsFactory.editGift(gift);
      $location.path('/')
    }

  }]);

}());
