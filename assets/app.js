angular.module('alankehoe.github.io', ['ui.bootstrap'])

    .controller('MainCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
        $timeout(function () {
            $scope.ready = true;
        }, 1500);
    }]);
