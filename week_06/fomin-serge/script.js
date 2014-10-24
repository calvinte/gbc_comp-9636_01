angular.module('instagramApp', [])
	.controller('InstaController', ['$scope', function($scope) {
		var nexturl = '';
		var loading = false;
		$scope.tag = 'puccini';
		$scope.photos = [];
		$scope.setTag = function()  {
			$scope.photos = [];
			nexturl = 'https://api.instagram.com/v1/tags/' + $scope.tag + '/media/recent?client_id=585d00be2af34a26b0e1caa6995cf19f';
			$scope.getPhotos();
		};
		$scope.getPhotos = function () {
			if (loading) return;
			console.log('getting page');
			loading = true;
			console.log(nexturl);
			$.ajax({
				type: "GET",
				dataType: "jsonp",
				cache: false,
				url: nexturl,
				success: function(response) {
				console.log(response);
					nexturl = response.pagination.next_url;
					$scope.photos = $scope.photos.concat(response.data);
					$scope.$apply();
					loading = false;
				}
			});
			return false;
		};
		$scope.setTag();
	}])
	$(document).ready(function() {
		$('.swipebox' ).swipebox();
	});
	