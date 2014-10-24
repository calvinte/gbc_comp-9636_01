

angular.module("FourSqApp", [])
	.controller("FourSqController", ['$scope', function($scope){
		var foursquareClientId = 'X2WY01O55WHFPI0DTCRHGUIX1YKBXE03U2HY3DXVCY2VAYGF';
		var foursquareClientSecret = '0RGGZ2C4J4TMRR2Y44D1FY0DZVN2VLL0FZHZPH5LB0G5LY0E';

		$scope.venues = [];
		$scope.tag = 'Beer'
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
		$scope.getPhotos= function(venueId){

			$.ajax({
				type:'GET',
				dataType:'jsonp',
				url:'https://api.foursquare.com/v2/venues/'+venueId+'/photos?client_id='+ foursquareClientId + '&client_secret='+ foursquareClientSecret + '&v=20130815',

				success: function(response){
					console.log(response);
					$scope.photos=response.response.photos.items;
					$scope.$apply();
				}
			});
		}
		$scope.getVenues();
	
	}]);