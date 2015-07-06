angular.module('library').controller('AuthorCtrl',['$scope', 'Author', 'authorService', function($scope, Author, authorService) {

     Author.get(function(data){
         authorService.init(data);
         $scope.authors=data.authors;
     });

     $scope.getAuthorDetails = function(id, $event){
        console.log(id);
     };
}])