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
  autoKnowAppControllers.controller("LinkDisplayCtrl", ["$scope", "$modal", "getlink",
    function($scope, $modal, getlink) {

      getlink.query(function(data) {
        $scope.links = data.links;
        $scope.pageViews = _.map(data.links, 'pageViews');
        _.forEach(data.links, function(currLink){
          currLink.creationTime = new Date(Date.parse(currLink.creationTime)).toGMTString();
          currLink.expirationTime = new Date(Date.parse(currLink.expirationTime)).toGMTString();

          _.forEach(currLink.pageViews, function(currPageView){
            currPageView.creationTime = new Date(Date.parse(currPageView.creationTime)).toGMTString();
          })
        });

        ////SS
        // $scope.open = function(pageViewsIn) {
        //   console.log("Page views:"+pageViewsIn.length)
        //   console.log(pageViewsIn)
        //   var modalInstance = $modal.open({
        //     templateUrl: 'pageviews-modal.html',
        //     controller: 'LinkDisplayCtrl',
        //     size: pageViewsIn.length,
        //     resolve: {
        //       items: function() {
        //         return pageViewsIn;
        //       }
        //     }
        //   });
        //
        //   modalInstance.result.then(function(selectedItem) {
        //     $scope.selected = selectedItem;
        //   }, function() {
        //     console.log('Modal dismissed at: ' + new Date());
        //   });
        // };
        ////EE


      });
    }
  ]);
}(this));
