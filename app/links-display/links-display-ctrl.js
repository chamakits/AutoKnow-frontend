(function() {
  var URL = "http://localhost:8080/api/getlinks"

  var autoKnowAppControllers = angular.module("autoKnowAppControllers", []);

  autoKnowAppControllers.factory("getlink", ["$resource", function($resource) {
    return $resource(URL, {}, {
      query: {
        method: "GET",
        isArray: false
      }
    });
  }]);
  autoKnowAppControllers.controller("LinkDisplayCtrl", ["$scope", "getlink",
    function(scope, getlink) {
      getlink.query(function(data) {
        scope.links = data.links;
      });
    }
  ]);
}(this));
