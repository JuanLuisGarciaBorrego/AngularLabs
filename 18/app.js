//inyectamos ngSanitize en app
var app = angular.module("app",[]);


app.controller("defaultController", function($scope){

    $scope.fileImg = 'angular.png';
});
