var blog = angular.module('blog', []);

blog.controller('BlogCtrl', function ($scope) {
    $scope.posts = [
        {'title': 'Sample blog post',
        'create_at': 'January 1, 2014',
        'author': 'Mark',
        'content': '<p>This blog post shows a few different types of content that\'s supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>'},
        {'title': 'Another blog post',
        'create_at': 'December 23, 2013',
        'author': 'Jacob'},
        {'title': 'New feature',
        'create_at': 'December 14, 2013',
        'author': 'Chris'}
    ];
});