angular.module('instagramApp', [])
	.controller('InstaController', ['$scope', function($scope) {
		$scope.photos = [];
		$scope.tag ='green'
		$scope.getPhotos = function () {
			$.ajax({
				type: 'GET',
				dataType: 'jsonp', 
				url: 'https://api.instagram.com/v1/tags/' + $scope.tag + '/media/recent?client_id=585d00be2af34a26b0e1caa6995cf19f', 
				success: function(responce) {
					console.log(responce);
					$scope.photos = responce.data;
					$scope.$apply();
					} 
			});

		};
		$scope.getPhotos();
	}]);


