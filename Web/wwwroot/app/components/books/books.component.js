angular.module('app')
    .component('books', {
        templateUrl: 'app/components/books/books.component.html',
        controllerAs: 'ctrl',
        controller: function ($scope, BookService) {
            $ctrl = this;

            $ctrl.filtro = "";
            $ctrl.list = BookService.getBookList();
        }
});