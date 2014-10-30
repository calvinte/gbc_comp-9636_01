

angular.module("FourSqApp", [])
	.controller("FourSqController", ['$scope', function($scope){
		var foursquareClientId = 'X2WY01O55WHFPI0DTCRHGUIX1YKBXE03U2HY3DXVCY2VAYGF';
		var foursquareClientSecret = '0RGGZ2C4J4TMRR2Y44D1FY0DZVN2VLL0FZHZPH5LB0G5LY0E';
		var map = new google.maps.Map($('#googlemap') [0], {
			zoom:16,
		});

		$scope.venues = [];
		$scope.tag = 'Beer';
		$scope.initiated = false;
		$scope.getVenues = function(){
			$.ajax({
				type:'GET',
				dataType:'jsonp',
				url:'https://api.foursquare.com/v2/venues/search?client_id='+ foursquareClientId + '&client_secret='+ foursquareClientSecret + '&v=20130815&ll=40.7,-74&query='+$scope.tag,

				success: function(response){
					console.log(response);
					$scope.venues = response.response.venues;

					$scope.$apply();
					
				}
			});
		};
		$scope.getPhotos= function(venueId, lat, lng){
			if (lat && lng){
									


				$("#googlemap").show();
				console.log("test");
				var latlng = new google.maps.LatLng (
					lat,
					lng
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

			$.ajax({
				type:'GET',
				dataType:'jsonp',
				url:'https://api.foursquare.com/v2/venues/'+venueId+'/photos?client_id='+ foursquareClientId + '&client_secret='+ foursquareClientSecret + '&v=20130815',

				success: function(response){
					console.log(response);
					$scope.photos = response.response.photos.items;
					$scope.initiated = true;
					$scope.$apply();
				}
			});
		}
		$scope.getVenues();
	
	}]);

$(document).ready(function() {
	$("body").on("click", "venue", function (){
	})
});

