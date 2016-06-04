'use strict';

var services = angular.module('fengs.Services', ['ngResource']);

services.factory('Post', ['$resource', 
	function($resource) {
		return $resource('src/:postId.json', {}, {
			query: {
				method: 'GET',
				params: {postId:'posts'},
				isArray: true
			}
		});
	}
]);

services.factory('About', ['$resource', 
	function($resource) {
		return $resource('api/web/', {}, {
			query: {
				method: 'GET',
				isArray: true
			}
		});
	}
]);