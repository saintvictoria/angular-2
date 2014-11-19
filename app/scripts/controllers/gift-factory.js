

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
