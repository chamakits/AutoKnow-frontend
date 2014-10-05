(function() {
    var autoKnowApp = angular.module("autoKnowApp", ["autoKnowAppControllers",
        "ngResource", "ngRoute"
    ]);

    function MenuLinks(template, controller, link, text) {
        this.template = template;
        this.controller = controller;
        this.link = link;
        this.text = text;
    };

    var autoKnowAppControllers = angular.module("autoKnowAppControllers", []);

    // var autoKnowAppControllers = angular.module("autoKnowAppControllers");
    var links = [
        new MenuLinks("/app/main/home-part.html", "", "/", "Home"),
        new MenuLinks("/app/links-display/links-display-part.html",
            "LinkDisplayCtrl", "/link-display", "Link Display"),
        new MenuLinks("/app/links-create/links-create-part.html",
            "LinkCreateCtrl", "/link-create", "Create link site"),
        new MenuLinks("",
            "", "localhost:8080/myPath", "myPath example"),
    ];

    autoKnowAppControllers.controller("MenuController", ["$scope", function($scope) {
        $scope.headers = links;
    }]);


    autoKnowApp.config(["$routeProvider", function($routeProvider) {
        var routeProvider = $routeProvider;
        _(links).forEach(function(link) {
            console.log("Setting links.");
            routeProvider = routeProvider.when(link.link, {
                templateUrl: link.template,
                controller: link.controller
            });
        });
        routeProvider.otherwise({
            redirectTo: "/"
        });
    }]);

}(this));