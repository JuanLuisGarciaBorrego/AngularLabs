var app = angular.module("app",[]);

app.controller("seguroController", function($scope, $log, $http){
    $scope.seguro = {
        nif:"",
        nombre:"",
        ape1:"",
        edad: undefined,
        sexo: "",
        casado: false,
        coverturas: {
            oftalmologia: false,
            dental: false,
            fecundacionInVitro:false
        },
        enfermedades:{
            corazon:false,
            estomacal: false,
            rinyones: false,
            alergia: false,
            nombrealergia: ""
        },
        fechaCreacion:new Date()
    };

    //Servicio Log
    $log.debug("Acabamos de crear el $scope");

    $scope.disableNombreAlergia = function(){
        return ($scope.seguro.enfermedades.alergia===false)
    };

    $scope.soloMujeres = function(){
        return ($scope.seguro.sexo=='M')
    };

    //http
    var config={
        method:"GET",
        url: "datos.json"
    };

    var response = $http(config);

    response.success(function(data,status, headers, config){
        $scope.seguro = data;
    });

    response.error(function(data, status, headers, config){
       alert("Ha fallado la petición. Estado HTTP:"+status);
    });

});
