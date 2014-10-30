angular.module('instagramApp',[])
	.controller('InstaController', ['$scope', function($scope){

		var nexturl = '';
		var loading = false;

		$scope.photos = [];
		$scope.tag='tree';

		$scope.setTag = function() {			
			$scope.photos = [];
			nexturl = 'https://api.instagram.com/v1/tags/' + $scope.tag + '/media/recent?client_id=585d00be2af34a26b0e1caa6995cf19f';
			$scope.getPhotos();
		}
		$scope.getPhotos=function(){
			if (loading) return;
			loading = true;
			$.ajax({
				type: 'GET',
				dataType: 'jsonp',
				 url: nexturl,
				success: function(response) {
					nexturl  = response.pagination.next_url;
					console.log(response);
					$scope.photos=response.data;
					// $scope.photos=$scope.photos.concat(response.data);
					$scope.$apply();
					loading = false;
				}
			}); 
		};
		$scope.setTag();
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
								var image = new google.maps.MarkerImage("https://s3.amazonaws.com/assets.getcoveredamerica.org/wp-content/uploads/icon_locator.gif", null, null, null, new google.maps.Size(34, 34));
								var marker = new google.maps.Marker({
									position: latlng,
									map: map,
									icon:image, 
								});


			map.setCenter(latlng);
		} else {
			$("#googlemap").hide();
		}
	})
});


	
