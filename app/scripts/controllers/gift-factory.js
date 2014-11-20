

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
        return $http.post(url, gift).success(function(){
          $rootScope.$broadcast('gift:added');
        });
      }

      function editGift(gift) {
        return $http.post(url, gift).success(function(){
          $rootScope.$broadcast('gift:editted');
        });
      }

      function deleteGift(gift) {
        return $http.delete(url, gift);
      }

      return {

        getGifts: getGifts,
        getGift: getGift,
        addGift: addGift,
        editGift: editGift,
        deleteGift: deleteGift
      };

  }]);

}());
