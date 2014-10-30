angular.module('instagramApp', [])
	.controller('InstaController', ['$scope', function($scope) {
		$scope.photos = [];
		$scope.tag = 'thanksgiving';
		$scope.getPhotos = function() {
			$.ajax({
				 type: 'GET',
				 dataType: 'jsonp',
				 url: 'https://api.instagram.com/v1/tags/' + $scope.tag + '/media/recent?client_id=585d00be2af34a26b0e1caa6995cf19f',
				 success: function(response) {
				 	console.log(response);
				 	$scope.photos = response.data;
				 	$scope.$apply();
				 }
			});
		};
		$scope.getPhotos();
	

	$scope.toggle = function(photo) {
        photo.myVar = !photo.myVar;
    };

	}]);