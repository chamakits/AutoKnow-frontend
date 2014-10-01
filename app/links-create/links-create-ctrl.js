(function() {
  var URL = "http://localhost:8080/api/newlink"

  var autoKnowAppControllers = angular.module("autoKnowAppControllers");

  autoKnowAppControllers.factory("makelink", ["$resource", function($resource) {
    return $resource(URL, {}, {
      query: {
        method: "POST",
        params: {
          "resourcePath": "myPath",
          "redirectionPath": "http://www.google.com"
        },
        headers: {'Content-Type': 'application/json'}
      }
    });
  }]);
  autoKnowAppControllers.controller("LinkCreateCtrl", ["$scope", "makelink",
    function(scope, makelink) {
      scope.makeLinkFunction = function() {
        var newLink = new makelink();
        newLink.resourcePath = "myJsonPath";
        newLink.redirectionPath = "https://duckduckgo.com/";
        newLink.$save();
      };

    }
  ]);
}(this));
