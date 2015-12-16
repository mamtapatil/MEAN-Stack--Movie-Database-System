/**
 * Created by mamta-prashant on 9/18/15.
 */

angular.module('controllerModules', ['serviceModule'])
    .controller('genreCtrl', function ($scope,getData){
        console.log("inside controller");
        var content = getData.getGenres();
        content.success(function(data){
            $scope.genres = data.data;
        });
        content.error(function (data, status) {
            $scope.errorMessage = status;
        });
    })
    .controller('movieCtrl', function($scope, getData, $routeParams) {
        var content = getData.getMovies($routeParams.gname);
        content.success(function(data){
            $scope.movies = data.data;
        });
        content.error(function (data, status) {
            $scope.errorMessage = status;
        });
    });
