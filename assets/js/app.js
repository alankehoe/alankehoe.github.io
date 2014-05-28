angular.module('alankehoe.github.io', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap'])

    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/', {templateUrl: 'assets/partials/main.html', controller: 'MainCtrl'})
                .otherwise({redirectTo: '/'})
        }])

    .controller('MainCtrl', ['$scope', '$routeParams',
        function ($scope, $routeParams) {

        }]);
