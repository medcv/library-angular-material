angular.module('library').service('Book', ['$resource', function($resource){
             return $resource('/books', null, {
               'query': { method:'GET', isArray: true }
             });
           }]);