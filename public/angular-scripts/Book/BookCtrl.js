angular.module('library').controller('BookCtrl',['$scope', 'Book', 'bookService', function($scope, Book, bookService) {

     Book.get(function(data){
         bookService.init(data);
         $scope.books=data.books;
     });

     $scope.getBookDetails = function(id, $event){
        console.log(id);
     };
}])