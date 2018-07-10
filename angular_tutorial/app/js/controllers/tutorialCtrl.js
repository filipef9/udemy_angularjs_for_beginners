
angular.module("tutorialCtrlModule", [])

    .controller("TutorialCtrl", ["$scope", "$location", "Calculations", function($scope, $location, Calculations) {

        $scope.path = $location.path();

        $scope.tutorialObject = {
            title: 'Main Page',
            subtitle: 'Sub Title',
            bindOutput: 2,
            firstname: 'Filipe',
            middlename: 'dos Santos',
            lastname: 'Nascimento',
            view1: 'View 1',
            view2: 'View 2'
        };

        $scope.doublesNumber = function() {
            $scope.tutorialObject.bindOutput = Calculations.doublesNumber($scope.tutorialObject.bindOutput);
        }
        
        Calculations.pythagoreanTheorem(2, 3);
    }])

    .directive("fsnWelcomeMessage", function() {
        return {
            restricted: 'EA',
            template: '<div>Howdy how are you?</div>'
        }
    })

    .factory("Calculations", function() {
        var calculations = [];

        calculations.doublesNumber = function(a) {
           return a * 2; 
        }

        calculations.pythagoreanTheorem = function(a, b) {
            return (a * a) + (b * b);
        }

        return calculations;
    });
