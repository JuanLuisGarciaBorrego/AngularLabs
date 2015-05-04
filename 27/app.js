
var app = angular.module("app",[]);

app.controller("defaultController", function($scope){

    $scope.provincias = [{
        codProvincia: "01",
        nombre: "Albacete"
    }, {
        codProvincia: "02",
        nombre: "Alicante/Alacant"
    }, {
        codProvincia: "03",
        nombre: "Almería"
    }];

});
