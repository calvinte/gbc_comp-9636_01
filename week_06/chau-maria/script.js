angular.module('instagramApp', [])
	.controller('InstaController', ['$scope', function($scope) {
		$scope.photos = [];
		$scope.tag = 'thanksgiving';
		$scope.getPhotos = function() {
			$.ajax({
				type: 'GET',
				dataType: 'jsonp',
				url: 'https://api.instagram.com/v1/tags/' + $scope.tag + '/media/recent?client_id=585d00be2af34a26b0e1caa6995cf19f',
				success: function(response){
					console.log(response);
					$scope.photos = response.data;
					$scope.$apply();
					console.log(response);
				}
			})
		};
		$scope.getPhotos();
	}]);

	$(document).ready(function() {
	var map = new google.maps.Map($('#googlemap') [0], {
		zoom:16,
	});
	$("body").on("click", ".photo", function (){
		var data=$(this).data();
		if (data.lat && data.long){


			$("#googlemap").show();
			console.log("test");
			console.log($(this).data());
			var latlng = new google.maps.LatLng (
				data.lat,
				data.long
			);
			map.setCenter(latlng);
		} else {
			$("#googlemap").hide();
		}
	})
});
