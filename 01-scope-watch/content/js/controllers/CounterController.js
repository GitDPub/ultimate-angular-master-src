function CounterController($scope) {
	this.count = 0;
	this.countList = [];
	this.increment = function increment() {
		this.count++;
		this.countList.unshift({id: this.count});
	};
	this.decrement = function decrement() {
		this.count--;
		this.countList.unshift({id: this.count});
	};
	// 1st argument is a string or a function
	// $scope.$watch('count', function(newValue, oldValue){
	// console.log(newValue, oldValue);
  // });

    // $scope.$watch(function () {
		// return this.count;
    // }.bind(this), function (newValue, oldValue) {
		// console.log(newValue, oldValue);
    // });

	// $scope.$watch(angular.bind(this, function () {
	$scope.$watchCollection(angular.bind(this, function () {
		return this.countList;
	}), function (newValue, oldValue) {
		if (newValue === oldValue) {
			return;
		}
		console.log(newValue, oldValue);
	});
	// }, true);
}

angular
	.module('app')
	.controller('CounterController', CounterController);
