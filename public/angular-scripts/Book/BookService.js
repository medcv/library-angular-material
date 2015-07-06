angular.module('library').service('bookService', [ function() {

    var isLoaded = false;
    var map = {};

    this.init = function(values) {
        map = {};
        angular.forEach(values.books, function(value){
            map[value.bookId] = value;
        });
        isLoaded = true;
    };

    this.setValue = function(id, value) {
        map[id] = value;
        isLoaded = true;
    };

    this.deleteValue = function(id) {
        delete map[id];
    };

    this.getValues = function() {
        return map;
    };

    this.getValue = function(id) {
        return map[id];
    };

    this.isLoaded = function(){
        return isLoaded;
    };

} ]);

