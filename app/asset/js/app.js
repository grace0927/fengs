'use strict';

var fengs = angular.module('fengs', [
    'ngRoute',
    'fengs.Home',
    'fengs.Services',
    'ngSanitize'
]);

fengs.config(['$routeProvider', function($routeProvider) {
  	$routeProvider.when('/home', {
		templateUrl: "home/index.html",
		controller: "HomeMainCtrl"
	})
	.when('/home/:postId', {
		templateUrl: "home/post-detail.html",
		controller: "PostDetailCtrl"
	})
	.when('/about', {
		templateUrl: "about/index.html",
		controller: "AboutCtrl"
	})
	.otherwise({
		templateUrl: "home/index.html",
		controller: "HomeMainCtrl"
	});
}]);