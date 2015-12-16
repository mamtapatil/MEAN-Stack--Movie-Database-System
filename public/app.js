/**
 * Created by mamta-prashant on 9/18/15.
 */

var app = angular.module("app", ["controllerModules", "ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/genres', {
            templateUrl:'templates/genres.html',
            controller:'genreCtrl'
        })
        .when('/genre/:gname', {
            templateUrl:'templates/movies.html',
            controller:'movieCtrl'
        })
        .otherwise({
            redirectTo: '/genres'
        });
});