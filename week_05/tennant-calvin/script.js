angular.module('instagramApp', [])
	.controller('InstaController', ['$scope', function($scope) {
		$scope.photos = [];
		$scope.getPhotos = function() {
			$.ajax({
				type: "GET",
				dataType: "jsonp",
				cache: false,
				url: 'https://api.instagram.com/v1/users/10206720/media/recent?client_id=585d00be2af34a26b0e1caa6995cf19f',
				success: function(response) {
					console.log(response);
					$scope.photos = response.data;
					$scope.$apply();
				}
			});
		};
		$scope.getPhotos();

}]);


