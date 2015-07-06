angular.module('library').controller('BookCtrl',['$scope', '$location', 'Book', 'bookService', '$mdSidenav', '$mdUtil', function($scope, $location, Book, bookService, $mdSidenav, $mdUtil) {

     Book.get(function(data){
         bookService.init(data);
         $scope.books=data.books;
     });

     $scope.getBookDetails = function(id, $event){
        console.log(id);
     };
}])