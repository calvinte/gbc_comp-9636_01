angular.module('productApp', []).controller('ProductsController', ['$scope', function($scope) {

	console.log(localStorage.getItem('products'));
	

		$scope.products = JSON.parse(localStorage.getItem('products')) || [{
			quantity: '2 pcs',	
			item: 'Mango',	
			cost: 1.00,	
			store: 'Metro',
			number: 1,

		}];

		$scope.addProduct = function() {
	
		console.log($scope.quantity);
	
		$scope.products.push({
			number: $scope.products.length +1,
			quantity: $scope.quantity, 
			item: $scope.item, 
			cost: $scope.cost,
			store: $scope.store,
		});
		$scope.quantity=''; 
		$scope.item='';
		$scope.cost=0;
		$scope.store='';

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
