angular.module('productApp', []).controller('ProductsController', ['$scope', function($scope) {

	console.log(localStorage.getItem('products'));
	

		$scope.products = JSON.parse(localStorage.getItem('products')) || [{
			store: 'Walmart',
			quantity: 2,	
			item: 'Mango',	
			unitcost: 1.00,	
			totalprice: 2.00,


			number: 1,

		}];

		$scope.addProduct = function() {
	
		console.log($scope.quantity);
	
		$scope.products.push({
			number: $scope.products.length +1,
			store: $scope.store,
			quantity: $scope.quantity, 
			item: $scope.item, 
			unitcost: $scope.unitcost,
			totalprice: $scope.quantity * $scope.unitcost,

		});
		$scope.store='';
		$scope.quantity=0; 
		$scope.item='';
		$scope.unitcost=0;
		$scope.totalprice=0;

		localStorage.setItem('products', JSON.stringify($scope.products));

	}
	$scope.removeProduct = function(product) {
		var arrayIndex = $scope.products.indexOf(product);
		$scope.products.splice(arrayIndex, 1);
		
		$scope.products.forEach(function(product, i) {

			
			product.number = i + 1;
			console.log(product, i);
		});
		localStorage.setItem('products', JSON.stringify($scope.products));

	};
	
}]);
