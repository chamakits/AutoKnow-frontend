(function() {
    var URL = "http://localhost:8080/api/getlinks"

    var autoKnowAppControllers = angular.module("autoKnowAppControllers");

    autoKnowAppControllers.factory("getlink", ["$resource", function($resource) {
        return $resource(URL, {}, {
            query: {
                method: "GET",
                isArray: false
            }
        });
    }]);
    autoKnowAppControllers.controller("LinkDisplayCtrl", ["$scope", "getlink",
        function($scope, getlink) {

            getlink.query(function(data) {
                $scope.links = data.links;

                _.forEach(data.links, function(currLink) {
                    currLink.creationTime = new Date(Date.parse(currLink.creationTime)).toGMTString();
                    currLink.expirationTime = new Date(Date.parse(currLink.expirationTime)).toGMTString();

                    currLink.pageViews = currLink.pageViews.length;
                    // _.forEach(currLink.pageViews, function(currPageView) {
                    //     currPageView.creationTime = new Date(Date.parse(currPageView.creationTime)).toGMTString();
                    // })
                });


            });
        }
    ]);
}(this));