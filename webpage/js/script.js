var startPage = angular.module('monopolyStartPage', []);

startPage.controller('Controller', [ '$scope', function($scope) {

	$scope.showAddButton = true;
	$scope.showMinusButton = true;
	$scope.players = [ {
		name : "",
		figure : ""
	}, {
		name : "",
		figure : ""
	} ];

	$scope.addPlayer = function() {

		$scope.players.push({
			name : "",
			figure : ""
		});

		if ($scope.players.length > 5) {
			$scope.showAddButton = false;

		}
	};
	
	$scope.rmPlayer = function(index) {

		$scope.players.splice(index, 1);

		if ($scope.players.length > 3) {
			$scope.showMinusButton = true;

		} 
	};

	$scope.master = {};

	$scope.update = function(user) {
		$scope.master = angular.copy(user);
	};

	$scope.startGame = function(player) {
		$scope.master = angular.copy(player);
	};

	$scope.addRow = function() {
		$scope.master = angular.copy("ho ho");
	}

	// variables
} ]).directive('rowForms', function() {
	return {
		templateURL : ''// template url like "xxx.htl"
	};

});