angular.module('library').controller('AuthorCtrl',['$scope', '$location', 'Author', 'authorService', function($scope, $location, Author, authorService) {

     Author.get(function(data){
     debugger;
         authorService.init(data);
         $scope.authors=data.authors;
     });

     $scope.getAuthorDetails = function(id, $event){
        console.log(id);
     };
}])