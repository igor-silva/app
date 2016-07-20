/*global angular*/
(function(){
    "use strict";
    
    angular.module("myApp").value("Config",{
       getUrl: "http://localhost:8080/api/" 
    });
    
    angular.module("myApp").service("Data", function($http, Config){
        this.getData = function(params){
            return  $http({
                method: "POST",
                url:Config.getUrl+"apiGet.php",
                data:params,
                headers:{
                    'Content-Type':'application/x-www-form-urlencode;charset=UTF-8'
                }
            });
        };
        
        this.postData = function(params){
            return  $http({
                method: "POST",
                url:Config.getUrl+"apiCadastro.php",
                data:params,
                headers:{
                    'Content-Type':'application/x-www-form-urlencode;charset=UTF-8'
                }
            });
        };
    });
})();