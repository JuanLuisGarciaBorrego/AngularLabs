//inyectamos ngSanitize en app
var app = angular.module("app",['ngSanitize']);

app.value("tamanoInicialRectangulo",{
    ancho:2,
    alto:3
});

function Rectangulo(tamanoInicial) {
    this.ancho= tamanoInicial.ancho;
    this.alto= tamanoInicial.alto;

    this.setAncho=function(ancho) {
        this.ancho=ancho;
    };

    this.setAlto=function(alto) {
        this.alto=alto;
    };

    this.getArea=function() {
        return this.ancho * this.alto;
    }
};

app.service("rectangulo",['tamanoInicialRectangulo',Rectangulo]);

app.controller("defaultController", function($scope, rectangulo){

    $scope.ancho = rectangulo.ancho;
    $scope.alto = rectangulo.alto;

    $scope.area = "<h2>"+rectangulo.getArea()+"</h2>";
});


/**
* Inyección de dependencias
* */