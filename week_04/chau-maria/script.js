angular.module('guestApp', []).controller('GuestsController', ['$scope', function($scope) {
	//localStorage.setItem('students', 'testing');
	console.log(localStorage.getItem('guests'));
	//return;

	$scope.guests = JSON.parse(localStorage.getItem('guests'))  || [{
		last_name: 'Chau', 
		first_name: 'Maria',
		twitter_username: 'malouchau',
		number: 1,
		dish_requested: 'Salmon'
	}];
	
	$scope.addGuest = function() {
		console.log($scope.first_name);
		$scope.guests.push({
			number: $scope.guests.length + 1,
			first_name: $scope.first_name, 
			last_name: $scope.last_name, 
			twitter_username: $scope.twitter_username,
			dish_requested: $scope.dish_requested,
		});

		$scope.first_name = '';
		$scope.last_name = '';
		$scope.twitter_username = '';
		$scope.dish_requested = '';

		localStorage.setItem('guests', JSON.stringify($scope.guests));
	}
	$scope.removeGuest = function(guest) {
		var arrayIndex = $scope.guests.indexOf(guest);
		$scope.guests.splice(arrayIndex, 1);
		
		$scope.guests.forEach(function(guest, i) {
			guest.number = i + 1;
			console.log(guest, i);
		});

		localStorage.setItem('guests', JSON.stringify($scope.guests));

	};
}]); 