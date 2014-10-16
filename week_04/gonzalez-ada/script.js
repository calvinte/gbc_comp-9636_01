	//localStorage.setItem('caloriess', 'testing');
	//console.log(localStorage.getItem('caloriess'));
	//return;

angular.module('calorieApp', []).controller('CaloriesController', ['$scope', function($scope) {
	$scope.calories = JSON.parse(localStorage.getItem('calories')) || [{
		food:'Kellog Cereal',
		portion: '1 serving',
		calorienum: 110,
		number: 1,
}];
function sumCalories(){

	$scope.total=0;
	$scope.calories.forEach(function (calorie){
		$scope.total += parseInt(calorie.calorienum) || 0;
	})
}
sumCalories();
	$scope.addCalorie = function() {
		console.log($scope.food);
		$scope.calories.push({
					number: $scope.calories.length + 1,
					food: $scope.food, 
					portion: $scope.portion, 
					calorienum: $scope.calorienum,
				});
				$scope.food='';
				$scope.portion='';
				$scope.calorienum='';

				localStorage.setItem('calories', JSON.stringify($scope.calories));
sumCalories();
	}

	$scope.removeCalorie=function(calorie) {
		var arrayIndex = $scope.calories.indexOf(calorie);
		$scope.calories.splice(arrayIndex, 1);


		$scope.calories.forEach(function(calorie, i){
		 calorie.number= i + 1;
			console.log(calorie,i);
		});
sumCalories();
				localStorage.setItem('calories', JSON.stringify($scope.calories));

	};
}]);