(function() {
    'use strict';

    function MenuLinks(template, controller, link, text) {
        this.template = template;
        this.controller = controller;
        this.link = link;
        this.text = text;
    }

    var autoKnowAppControllers = angular.module("autoKnowAppControllers");
    var links = [
        new MenuLinks("", "", "/", "Home"),
        new MenuLinks("/app/links-display/links-display.html",
            "", "/link-display", "Link Display"),
        new MenuLinks("/app/links-create/links-create.html",
            "", "/link-create", "Create link site"),
        new MenuLinks("",
            "", "localhost:8080/myPath", "myPath example"),
    ];

    autoKnowAppControllers.controller("MenuController", ["$scope", function($scope) {
        $scope.headers = links;
    }]);

    var autoKnowApp = angular.module("autoKnowApp");
    autoKnowApp.config(["$routeProvider", function($routeProvider) {
        $routeProvider.when()
    }]);
}(this));