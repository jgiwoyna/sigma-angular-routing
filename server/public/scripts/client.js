var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/mulder' ,{
      templateUrl: '/views/templates/mulder.html',
      controller: 'MulderController',
      controllerAs: 'mulder'
    })
    .when('/scully' ,{
      templateUrl: '/views/templates/scully.html',
      controller: 'ScullyController',
      controllerAs: 'scully'
    })
    .when('/dalecooper' ,{
      templateUrl: '/views/templates/dalecooper.html',
      controller: 'DaleCooperController',
      controllerAs: 'dalecooper'
    })
    .otherwise({
      redirectTo: 'home'
    });

}]);

app.controller('HomeController', function() {
  console.log('home controller running');
  var self = this;
  self.message = "Home controller is the best!";

});

app.controller('MulderController', function() {
  console.log('Mulder controller running');
  var self = this;
  self.message = "Mulder controller is the best!";

});

app.controller('ScullyController', function() {
  console.log('scully controller running');
  var self = this;
  self.message = "Scully controller is the best!";

});

app.controller('DaleCooperController', function() {
  console.log('dale cooper controller running');
  var self = this;
  self.message = "Dale Cooper controller is the best!";

});
