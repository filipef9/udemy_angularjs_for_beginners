
var app = angular.module("tutorialApp", [
    "ngRoute",
    "tutorialCtrlModule"
]);

app.config(function($routeProvider) {

    $routeProvider

    .when("/view1", {
        templateUrl: "views/view1.html",
        controller: "TutorialCtrl"
    })

    .when("/view2", {
        templateUrl: "views/view2.html",
        controller: "TutorialCtrl"
    })

    .otherwise({
        templateUrl: "404.html",
        controller: "TutorialCtrl"
    })
});
