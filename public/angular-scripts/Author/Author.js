angular.module('library').factory('Author', ['$resource', function($resource){
             return $resource('/authors', null, {
               'query': { method:'GET', isArray: true }
             });
           }]);