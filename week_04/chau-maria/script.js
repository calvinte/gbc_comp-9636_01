angular.module('menuOrderApp', []).controller('menuOrdersController', ['$scope', function($scope) {
	//localStorage.setItem('students', 'testing');
	console.log(localStorage.getItem('menuorders'));
	//return;

	$scope.menuorders = JSON.parse(localStorage.getItem('menuorders'))  || [{
		guest_name: 'Chau', 
		appetizer: 'Scallops',
		main_course: 'Salmon',
		number: 1,
		drink: 'Martini',
		dessert: 'Cheesecake', 
	}];
	
	$scope.addMenuOrder = function() {
		console.log($scope.guest_name);
		$scope.menuorders.push({
			number: $scope.menuorders.length + 1,
			guest_name: $scope.guest_name, 
			appetizer: $scope.appetizer, 
			main_course: $scope.main_course,
			drink: $scope.drink,
			dessert: $scope.dessert,
		});

		$scope.guest_name = '';
		$scope.appetizer = '';
		$scope.main_course = '';
		$scope.drink = '';
		$scope.dessert = '';

		localStorage.setItem('menuorders', JSON.stringify($scope.menuorders));
	}
	$scope.removeMenuOrder = function(menuorder) {
		var arrayIndex = $scope.menuorders.indexOf(menuorder);
		$scope.menuorders.splice(arrayIndex, 1);
		
		$scope.menuorders.forEach(function(menuorder, i) {
			menuorder.number = i + 1;
			console.log(menuorder, i);
		});

		localStorage.setItem('menuorders', JSON.stringify($scope.menuorders));

	};
}]); 