angular.module('library').controller('SideNavCtrl',['$scope', '$location', 'Book', 'bookService', 'Author', 'authorService', '$mdSidenav', '$mdUtil', function($scope, $location, Book, bookService, Author, authorService, $mdSidenav, $mdUtil) {
    $scope.books = bookService.getValues();
    $scope.toggleLeft = buildToggler('left');

/**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
          },300);
      return debounceFn;
    }

    $scope.getAllBooks = function(){
      $location.url('/books');
      $scope.closeSideNav();
    };

   $scope.getAllAuthors = function(){
      $location.url('/authors');
      $scope.closeSideNav();
   };

   $scope.closeSideNav = function () {
      $mdSidenav('left').close();
   };

   $scope.getBookDetails = function(id, $event){
    console.log(id);
   };


}])

