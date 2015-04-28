var app = angular.module("app",[]);

app.constant("idioma", "es-es");

app.constant("matematicas",{
   sumar:function(a,b) {
       return a+b;
   },
   restar:function(a,b){
       return a-b;
   }
});

app.controller("defaultController", function($scope, idioma, matematicas){

    $scope.idioma = idioma;

    $scope.suma = matematicas.sumar(3,4);

    $scope.resta = matematicas.restar(4,3);
});
