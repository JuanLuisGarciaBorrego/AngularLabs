
var app = angular.module("app",[]);

app.controller("defaultController", function($scope){
    $scope.valor={
        numero:25,
        texto:"Juan Luis",
        fecha: new Date()
    }
});
