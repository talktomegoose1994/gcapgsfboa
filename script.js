var app=angular.module('single-page-app',['ngRoute']);


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
      
      // var Twitter = require('twitter-node-client').Twitter;
      //
      // var sendTweet(message){
      //   var text = "Overheard at GC: " + message;
      //   return ""
      // };

      // API KEY = MS7Y5S6WTM0KDdghTTM9JEqco
      // SECRET KEY = Eunc2AeV4SXnozR9Q9xhVOBDVEQ2DOWztGpnzRea9DMJw0AFNd

});
