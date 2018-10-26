var app=angular.module('single-page-app',['ngRoute', './lib/index.js']);


app.config(function($routeProvider){


      $routeProvider
          .when('/',{
                templateUrl: 'landing.html'
          })
          .when('/home',{
                templateUrl: 'home.html'

          });


});


app.controller('cfgController',function($scope){

      $scope.message="";

});
