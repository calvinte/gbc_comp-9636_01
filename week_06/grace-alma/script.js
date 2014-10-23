angular.module('instagramApp', [])
	.controller('InstaController', ['$scope', function($scope) {
		var nexturl = 'https://api.instagram.com/v1/tags/' + $scope.tag + '/media/recent?client_id=585d00be2af34a26b0e1caa6995cf19f';
		var loading = false;			
		$scope.photos = [];
		$scope.tag = 'thanksgiving';
		$scope.setTag = function() {			
			$scope.photos = [];
			nexturl = 'https://api.instagram.com/v1/tags/' + $scope.tag + '/media/recent?client_id=585d00be2af34a26b0e1caa6995cf19f';
			$scope.getPhotos();
		}
		$scope.getPhotos = function() {
			if (loading) return;
			loading = true;
			$.ajax({
				 type: 'GET',
				 dataType: 'jsonp',
				 url: nexturl,
				 success: function(response) {
					nexturl  = response.pagination.next_url;
				 	console.log(response);
				 	$scope.photos = $scope.photos.concat(response.data);
				 	console.log($scope.photos);
				 	$scope.$apply();
					loading = false;
				 }
			});
		};
		$scope.getPhotos();
	}]);



