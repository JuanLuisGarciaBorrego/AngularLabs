var app = angular.module("app",[]);

app.controller("defaultController", function($scope, $timeout){
    $scope.producidoEvento="Nooo";

    $timeout(function() {
        $scope.producidoEvento="Sii =)";
    },4000);

});
