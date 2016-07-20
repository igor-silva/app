/*global angular*/
(function(){
    "use strict";
    angular.module("myApp").controller("initCtrl", function($scope, Data){
        $scope.home = "Contatos";
        $scope.perfil = "Perfil";
        
        $scope.contatos = [];
        
        var getData = function(){
            var params = {
                counter:$scope.contatos.length,
                token:"1f3d2gs3f2fg3as2fdg3re2t1we46er45"
            };
           Data.getData(params).success(function(data){
               $scope.contatos = data;
            }).error(function(){
                console.log(data ? data : "Não foi possível acessar o servidor");
            });
        };
        getData();
    });
})();