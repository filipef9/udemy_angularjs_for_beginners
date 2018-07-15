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
            templateUrl: "views/addItem.html",
            controller: "GroceryListItemsController"
        })

        .when("/addItem/edit/:id", {
            templateUrl: "views/addItem.html",
            controller: "GroceryListItemsController"
        })

        .otherwise({ redirectTo: "/" })
});

app.service("GroceryService", function() {

    var groceryService = [];

    groceryService.groceryItems = [
        { id: 1, completed: true, itemName: 'milk', date: new Date('July 1, 2018 11:13:00') },
        { id: 2, completed: true, itemName: 'cookies', date: new Date('July 1, 2018 11:13:00') },
        { id: 3, completed: true, itemName: 'ice cream', date: new Date('July 2, 2018 11:13:00') },
        { id: 4, completed: true, itemName: 'potatoes', date: new Date('July 2, 2018 11:13:00') },
        { id: 5, completed: true, itemName: 'cereal', date: new Date('July 3, 2018 11:13:00') },
        { id: 6, completed: true, itemName: 'bread', date: new Date('July 3, 2018 11:13:00') },
        { id: 7, completed: true, itemName: 'eggs', date: new Date('July 4, 2018 11:13:00') },
        { id: 8, completed: true, itemName: 'tortillas', date: new Date('July 4, 2018 11:13:00') },
    ];

    groceryService.findById = function(id) {
        return _.find(groceryService.groceryItems, function(entry) { return entry.id === id })
    }

    groceryService.getNewId = function() {
        if (groceryService.newId) {
            groceryService.newId++;
            return groceryService.newId;
        } else {
            var maxId = _.max(groceryService.groceryItems, function(entry) { return entry.id; })
            groceryService.newId = maxId.id + 1;
            return groceryService.newId; 
        }
    }

    groceryService.save = function(entry) {
        var updatedItem = groceryService.findById(entry.id);
        if(updatedItem) {
            updatedItem.id = entry.id; 
            updatedItem.completed = entry.completed; 
            updatedItem.itemName = entry.itemName; 
            updatedItem.date = entry.date; 
        } else {
            entry.id = groceryService.getNewId();
            groceryService.groceryItems.push(entry);
        }
    }

    groceryService.removeItem = function(item) {
        var index = groceryService.groceryItems.indexOf(item);
        groceryService.groceryItems.splice(index, 1);
    }

    groceryService.markCompleted = function(item) {
        item.completed = !item.completed;
    }
 
    return groceryService;
});

app.controller("HomeController", ["$scope", function($scope) {
    $scope.appTitle = 'Grocery List';
}]);

app.controller("GroceryListItemsController", [
    "$scope", 
    "$routeParams",
    "$location",
    "GroceryService",
    function(
        $scope, 
        $routeParams, 
        $location,
        GroceryService
    ) {

    $scope.groceryItems = GroceryService.groceryItems; 
    
    if (!$routeParams.id) {
        $scope.groceryItem = { id: 0, completed: false, itemName: "", date: new Date() };
    } else {
        $scope.groceryItem = _.clone(GroceryService.findById(parseInt($routeParams.id)));
    }

    $scope.save = function() {
        GroceryService.save($scope.groceryItem);
        $location.path('/');
    };

    $scope.removeItem = function(item) {
        GroceryService.removeItem(item);
    }

    $scope.markCompleted = function(item) {
        GroceryService.markCompleted(item);
    }
}]);

app.directive('fsnGroceryItem', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/groceryItem.html'
    }
});