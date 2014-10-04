(function() {
    'use strict';

    function MenuLinks(link, text) {
        this.link = link;
        this.text = text;
    }

    var autoKnowAppControllers = angular.module("autoKnowAppControllers");
    autoKnowAppControllers.controller("MenuController", ["$scope", function($scope) {
        $scope.headers = [
            new MenuLinks("/", "Home"),
            new MenuLinks("/app/links-display/links-display.html", "Link Display"),
            new MenuLinks("/app/links-create/links-create.html", "Create link site"),
            new MenuLinks("localhost:8080/myPath", "myPath example"),
        ];

    }]);
}(this));