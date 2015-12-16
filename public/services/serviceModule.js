/**
 * Created by mamta-prashant on 9/18/15.
 */

angular.module('serviceModule', [])
    .factory('getData', function($http){
        return{
            getGenres: function(){
                console.log("Inside servicemodule");
                var genres = $http({method:'GET', url: 'http://localhost:3100/genres'});
                console.log(genres);
                return genres;
            },
            getMovies: function(gname){
                var movies = $http({method:'GET', url: 'http://localhost:3100/genre/' + gname});
                console.log("Movies: " + movies);
                return movies;
            }
        }
    });