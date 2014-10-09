//console.log(angular);
angular.module('studentApp', []).controller('StudentController', ['$scope', function($scope) {
	$scope.students = JSON.parse(localStorage.getItem('students')) || [{
first_name: "calvin",
last_name: 'Tennant',
Twitter_Username: 'c11t_',
number: 1,
	}];
	//localStorage.setItem('students', 'testing');
	//console.log(localStorage.getItem('students'));
	//return;
	//$scope.students = [
		//{index: 1, first_name: 'Calvin', last_name: 'Tennant', Twitter_Username: 'c11t_'},
		//{index: 2, first_name: 'Jason', last_name: 'McPherson', Twitter_Username: 'jM88'},
	//];
	
	$scope.addStudent = function(){
		console.log($scope.first_name);
		$scope.students.push({
			number: $scope.students.length + 1,
			first_name: $scope.first_name, 
			last_name: $scope.last_name, 
			Twitter_Username: $scope.Twitter_Username
		});
			$scope.first_name = '';
			$scope.last_name = '';
			$scope.Twitter_Username = '';

			localStorage.setItem('students', JSON.stringify($scope.students));	
		}
	
	$scope.removeStudent = function(student) {
		var arrayIndex = $scope.students.indexOf(student);
		$scope.students.splice(arrayIndex, 1);

		$scope.students.forEach(function(student, i){
			student.number = i + 1;
			console.log( i);
		});

		localStorage.setItem('students', JSON.stringify($scope.students));
	};
}]);