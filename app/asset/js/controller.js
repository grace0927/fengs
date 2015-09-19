var fengs = angular.module('fengs', [
    'ngRoute',
    'fengs.home',
    'fengs.faith',
    'fengs.family',
    'fengs.knowledge',
    'fengs.life',
    'fengs.about'
]);

fengs.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);

fengs.controller('FengsCtrl', function ($scope) {

});