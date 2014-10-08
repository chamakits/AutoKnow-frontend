(function() {
    var URL = "http://localhost:8080/api/newlink";

    var autoKnowAppControllers = angular.module("autoKnowAppControllers");

    autoKnowAppControllers.factory("makelink", ["$resource", function($resource) {
        return $resource(URL, {}, {
            query: {
                method: "POST",
                //TODO find out if params here is needed (I think not)
                params: {
                    "resourcePath": "myPath",
                    "redirectionPath": "http://www.google.com"
                },
                headers: {
                    'Content-Type': 'application/json'
                },
                //TODO remove this.
                response: function(resp) {
                    console.log("Success!");

                }
            }
        });
    }]);
    autoKnowAppControllers.controller("LinkCreateCtrl", ["$scope", "makelink",
        function($scope, makelink) {
            console.log("Controller def.");

            $scope.setHttp = function(event) {
                console.log("Setting http!");
                console.log(event);
            };

            $scope.create = function(link) {
                // console.log("Scope create");
                // console.log("link:");
                console.log(link);
                var newLink = new makelink();
                newLink.resourcePath = link.resourcePath;
                // newLink.redirectionPath = link.redirectionPath;
                newLink.redirectionPath = link.redirectionPath;
                var postSave = newLink.$save();
                console.log(postSave);
                postSave.then(function(req) {
                    console.log("Save success!");
                    toastr.info("Saved data succesfully!");
                    $scope.link = {};
                }, function(err) {
                    toastr.error("Error!");
                    toastr.error(err);
                });
            };

        }
    ]);
}(this));