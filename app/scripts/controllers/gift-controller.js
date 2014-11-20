
(function (){
  angular.module('HolidayList')
  .controller('GiftsController',
            ['giftsFactory','$scope','$location','$rootScope',
    function( giftsFactory,  $scope,  $location,  $rootScope){

     giftsFactory.getGifts().success(function(data){
       $scope.gifts = data;

          });
     $scope.addGift = function(gift) {
       giftsFactory.addGift(gift).success(function(){
         $location.path('/');
       });

     }

  }]);


}());
