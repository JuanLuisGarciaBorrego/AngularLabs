var app = angular.module("app",[]);

function ejemploController($scope){
    $scope.mensaje = "Hola Mundo";

    $scope.cambiarMensaje = function(n){
        if(n==1){
            $scope.mensaje="Adios Mundo =(";
        }else{
            $scope.mensaje="Hola Mundo";
        }
    }

    $scope.punteroRatonEncima = function(){
        $scope.mensaje = "Uups, estás encima mía";
    };
    $scope.punteroRatonFuera = function(){
        $scope.mensaje = "Hola Mundo";
    }
}

