angular.module('photoApp', [])
	.controller('PhotoController', ['$scope', function($scope) {
		$scope.photoid = window.location.search.replace('?photoid=', '');
		console.log($scope.photoid);
		$scope.photos = [];
		$scope.tag = 'thanksgiving';
		$scope.getPhotos = function() {
			$.ajax({
				 type: 'GET',
				 dataType: 'jsonp',
				 url: 'https://api.instagram.com/v1/media/' + $scope.photoid + '?client_id=585d00be2af34a26b0e1caa6995cf19f',
				 success: function(response) {
				 	console.log(response);
				 	$scope.photo = response.data;
				 	$scope.$apply();
				 }
			});
		};
		$scope.getPhotos();
	}]);



