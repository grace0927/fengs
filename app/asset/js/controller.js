'use strict';

angular.module('fengs', [
    'ngRoute',
    'fengs.home',
    'fengs.faith',
    'fengs.family',
    'fengs.knowledge',
    'fengs.life',
    'fengs.about'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
