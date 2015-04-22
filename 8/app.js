var app = angular.module("app",[]);

app.controller("seguroController", function($scope, $log){
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
    }

    //Servicio Log
    $log.debug("Acabamos de crear el $scope");

    $scope.disableNombreAlergia = function(){
        return ($scope.seguro.enfermedades.alergia===false)
    }

    $scope.soloMujeres = function(){
        return ($scope.seguro.sexo=='M')
    }
})
