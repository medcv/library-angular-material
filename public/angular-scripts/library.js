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
	$routeProvider.when('/authors', {
		templateUrl : 'angular-views/author.html'
	});
	$routeProvider.when('/publishers', {
		templateUrl : 'angular-views/publisher.html'
	});
})