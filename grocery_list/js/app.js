var app = angular.module("groceryListApp", [
    "ngRoute"
]);

app.config(function($routeProvider) {

    $routeProvider

        .when("/", {
            templateUrl: "views/groceryList.html",
            controller: "GroceryListItemsController"
        })

        .when("/addItem", {
            templateUrl: "views/inputItem.html",
            controller: "GroceryListItemsController"
        })

        .when("/addItem/:id", {
            templateUrl: "views/inputItem.html",
            controller: "GroceryListItemsController"
        })

        .otherwise({ redirectTo: "/" })
});

app.controller("HomeController", ["$scope", function($scope) {
    $scope.appTitle = 'Grocery List';
}]);

app.controller("GroceryListItemsController", [
    "$scope", 
    "$routeParams",
    function($scope, $routeParams) {

    $scope.groceryItems = [
        { completed: true, itemName: 'milk', date: '2018-07-01' },
        { completed: true, itemName: 'cookies', date: '2018-07-01' },
        { completed: true, itemName: 'ice cream', date: '2018-07-02' },
        { completed: true, itemName: 'potatoes', date: '2018-07-02' },
        { completed: true, itemName: 'cereal', date: '2018-07-03' },
        { completed: true, itemName: 'bread', date: '2018-07-03' },
        { completed: true, itemName: 'eggs', date: '2018-07-04' },
        { completed: true, itemName: 'tortillas', date: '2018-07-04' },
    ];

    $routeParams.id;
}]);