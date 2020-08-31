angular.module('app')
    .service('BookService', function ($q,$http) {
        var list = [];

        var bookService = {
            getBookList: function () {
                //var deferred = $q.defer();
                
                //$http.get(constants.URL.Book.GetAll)
                //    .then(function (response) {
                //        list = response.data;
                //        deferred.resolve(list);
                //    });

                //return deferred.promise;

                var list = [];
                list = [
                    {
                        "id": "1",
                        "title": "El Juego de Ender",
                        "author": "Orson Scott Card",
                        "publisher": "Ediciones B / Zeta",
                        "description": "La Tierra está amenazada…",
                        "image": "img1.jpg"
                    },
                    {
                        "id": "2",
                        "title": "El Señor de los Anillos",
                        "author": "JRRTolkien",
                        "publisher": "Minotauro",
                        "description": "La Tierra Media…",
                        "image": "img2.jpg"
                    },
                    {
                        "id": "3",
                        "title": "Un Mundo Feliz",
                        "author": "Aldous Huxley",
                        "publisher": "Debolsillo",
                        "description": "La historia se desarrolla en una ciudad utópica...",
                        "image": "img3.jpg"
                    }
                ]

                return list;
            }
        }

        return bookService;
    });