angular.module('library', ['ngMaterial', 'ngRoute', 'ngResource'])
.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('orange')
        .warnPalette('red');
})
.config(function($routeProvider) {
	$routeProvider.when('/books', {
		templateUrl : 'angular-views/book.html'
	});
})
.controller('BookCtrl',['$scope', '$location', 'Book', 'bookService', function($scope, $location, Book, bookService) {
    $scope.books = bookService.getValues();
    $scope.getAllBooks = function(){
      Book.get(function(data){
      bookService.init(data);
      $location.url('/books');
     });
    };

    $scope.getBookDetails = function(id, $event){
     console.log(id);
    };


}]).factory('Book', ['$resource', function($resource){
             return $resource('/books', null, {
               'query': { method:'GET', isArray: true }
             });
           }]);