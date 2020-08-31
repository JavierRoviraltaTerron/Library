angular.module('app')
    .component('bookList', {
        templateUrl: 'app/components/bookList/bookList.component.html',
        bindings: {
            list: '<',
            filtro: '<'
        },
        controllerAs: 'ctrl',
        controller: function ($scope) {
            $ctrl = this;
        }
});