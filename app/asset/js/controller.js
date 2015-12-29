'use strict';

var home = angular.module('fengs.Home', ['ngRoute']);

home.controller('HomeMainCtrl', ['$scope', 'Post',
	function($scope, Post) {
		$scope.posts = Post.query();
	}
]);

home.controller('AboutCtrl', ['$scope', 'About', 
	function($scope, About) {
		$scope.name = "Jianyu Feng";
		$scope.blocks = About.query();
	}
]);


home.controller('PostDetailCtrl', ['$scope', '$routeParams', 'Post', '$http',
	function($scope, $routeParams, Post, $http) {
		$scope.html = "";
		/*
		$scope.url = 'home/post/' + $routeParams.postId + '.html';
		$http({
			method: 'GET',
			url: $scope.url,
			header: {
				'Content-type': 'text/html'
			}
		}).then(function(response){
			$scope.html = response.data;
		});
		*/
		$scope.post = Post.get({postId: $routeParams.postId}, function(post) {
			$http({
				method: 'GET',
				url: post.url,
				header: {
					'Content-type': 'text/html'
				}
			}).then(function(response){
				$scope.html = response.data;
			});
		});
	}
]);

home.directive('postList', [ 
	function() {
		return {
			scope: {
				posts: '='
			},
			link: function(scope, elem, attr) {
				elem.css({
					margin: "1px"
				});
			},
			templateUrl: "home/post-list.html"
		};
	}
]);