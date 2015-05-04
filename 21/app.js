
var app = angular.module("app",[]);

app.controller("defaultController", function($scope){
    $scope.modelo={
        apellido: "García",
        showApellido: false
    }
});
