angular.module('studentApp', []).controller('StudentsController', ['$scope', function($scope) {
		//localStorage.setItem('students', 'testing');
	    console.log(localStorage.getItem('students'));
	//'return;' stops running the code below
	
	$scope.students = JSON.parse(localStorage.getItem('students')) || [{
	//method JSON.parse allows us to transfer a local storage string into an object
	first_name: 'Serge',
	last_name: 'Fomin',
	response: 2,
	number: 1,
	}];
	UpdateChart($scope.students);
	$scope.addStudent = function() {
		console.log($scope.first_name);
		$scope.students.push({
		number: $scope.students.length + 1,
		first_name: $scope.first_name, 
		last_name: $scope.last_name, 
		response: $scope.response,
		});
		$scope.first_name = "";
		$scope.last_name = "";
		$scope.response = "";
		UpdateChart($scope.students);
		
		localStorage.setItem('students', JSON.stringify($scope.students));
	}
		
		$scope.removeStudent = function(student) {
			var arrayIndex = $scope.students.indexOf(student);
				$scope.students.splice(arrayIndex, 1);
					$scope.students.forEach(function(student, i){
					student.number = i + 1;
					});
					
		localStorage.setItem('students', JSON.stringify($scope.students));
		UpdateChart($scope.students);
		};
}]);


function UpdateChart(students) {
	var series = [];
	students.forEach(function(student) {
		series.push({
			name: student.first_name + ", " + student.last_name,
			data: [parseInt(student.response)]
		});
	});
    $('#chart').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Most performed operas'
        },
        subtitle: {
            text: 'Source: Operabase.com'
        },
		
		credits: {
            enabled: false
        },
        series: series,
    });
};