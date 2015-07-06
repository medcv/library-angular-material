angular.module('library').factory('Book', ['$resource', function($resource){
             return $resource('/books', null, {
               'query': { method:'GET', isArray: true }
             });
           }]);