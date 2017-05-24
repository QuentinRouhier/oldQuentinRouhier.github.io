'use strict';
// objet pour controler les routes
var appRoute = angular.module('appRoute', ['ngRoute']);
// configuration de la route 
appRoute.config(['$routeProvider', function ($routeProvider) {

        $routeProvider
                .when('/competance', {
                    templateUrl: 'assets/view/competance.html',
                    controller: 'competanceCtrl'
                })
                .when('/experience', {
                    templateUrl: 'assets/view/experience.html',
                    controller: 'experienceCtrl'
                })
                .when('/formation', {
                    templateUrl: 'assets/view/formation.html',
                    controller: 'formationCtrl'
                })
                .when('/loisirs', {
                    templateUrl: 'assets/view/loisirs.html',
                    controller: 'loisirsCtrl'
                })
                .otherwise({
                    redirectTo: '/competance'
                });
    }]);
// objet qui control les controlers
var appRouteCtrl = angular.module('appRouteCtrl', []);
appRouteCtrl.controller('homeCtrl', ['$scope', function ($scope) {

}]);
appRouteCtrl.controller('contactCtrl', ['$scope', function ($scope) {

}]);