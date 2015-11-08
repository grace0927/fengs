'use strict';

var fengs = angular.module('fengs', [
    'ngRoute',
    'fengs.home',
    'fengs.family',
    'fengs.about'
]);

fengs.config(['$routeProvider', function($routeProvider) {
  	$routeProvider.when('home', {
		redirectTo: '/home'
	})
	.when('/family', {
		redirectTo: '/family'
	})
	.when('about', {
		redirectTo: '/about'
	});
}]);