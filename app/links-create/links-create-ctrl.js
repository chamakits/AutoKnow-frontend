(function() {
    var URL = "http://localhost:8080/api/newlink";

    var autoKnowAppControllers = angular.module("autoKnowAppControllers");

    autoKnowAppControllers.factory("makelink", ["$resource", function($resource) {
      return $resource(URL, {}, {
        query: {
          method: "POST",
          params: {
            "resourcePath": "myPath",
            "redirectionPath": "http://www.google.com"
          },
          headers: {
            'Content-Type': 'application/json'
          }
        }
      });
    }]);
    autoKnowAppControllers.controller("LinkCreateCtrl", ["$scope", "makelink",
      function(scope, makelink) {
        console.log("Controller def.");

        scope.create = function(link) {
          console.log("Scope create");
          console.log("link:");
          console.log(link);
          var newLink = new makelink();
          newLink.resourcePath = link.resourcePath;
          // newLink.redirectionPath = link.redirectionPath;
          newLink.redirectionPath = link.redirectionPath;
          newLink.$save();
        };

    }]);
}(this));
