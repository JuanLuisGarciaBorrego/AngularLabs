var app = angular.module("app",[]);

app.value("idioma", "es-es");

app.value("matematicas",{
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


/*
* Diferencias con constant
* Los servicio de tipo constant se pueden inyectar en bloque_configbloques y
* en los 3.9 provider mientras que los value no pueden.
* */