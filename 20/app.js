
var app = angular.module("app",[]);

app.controller("defaultController", function($scope){

    $scope.localidades = [
        {
            idLocalidad:1,
            nombre: "Estepa"
        },
        {
            idLocalidad:2,
            nombre: "Casariche"
        },
        {
            idLocalidad:3,
            nombre: "Gilena"
        }

    ]
});
