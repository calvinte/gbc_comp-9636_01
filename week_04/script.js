angular.module('VideoGamesApp', []).controller('VideoGamesController', ['$scope', function($scope) {
		$scope.VideoGames = JSON.parse(localStorage.getItem('VideoGames')) || [{
		title:'The Last of Us',
		studio: 'Naughty Dog',
		rating:'5 stars',
		number:1,
	}];
	console.log($scope.VideoGames);
	$scope.rating = 1;

		$scope.addVideoGames = function() {
			console.log($scope.title);
			$scope.VideoGames.push({
				number: $scope.VideoGames.length + 1,
				title: $scope.title,
				studio: $scope.studio,
				rating: $scope.rating,
			});
			$scope.title = '';
			$scope.studio = '';
			$scope.rating = 1;
			
			localStorage.setItem('VideoGames', JSON.stringify($scope.VideoGames));
		

		}

		$scope.removeVideoGames = function(VideoGame){
			var arrayIndex = $scope.VideoGames.indexOf(VideoGame);
			$scope.VideoGames.splice(arrayIndex, 1);
	console.log($scope.VideoGames);
			
			$scope.VideoGames.forEach(function(VideoGame, i){
				VideoGame.number = i + 1;
				
			});

			localStorage.setItem('VideoGames', JSON.stringify($scope.VideoGames));
	};

	
}]);



