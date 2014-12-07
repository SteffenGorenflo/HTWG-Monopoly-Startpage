var startPage = angular.module('monopolyStartPage', []);

startPage.controller('Controller', [ '$scope', function($scope) {

	$scope.showAddButton = true;
	$scope.showMinusButton = false;

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
		if ($scope.players.length > 2) {
			$scope.players.splice(index, 1);	
		}

		$scope.showAddButton = true;
		
	};


	$scope.startGame = function(player) {
		// TODO
	};

	$scope.dispMinusButton = function() {


		$scope.showMinusButton = true;

	}


	// variables
} ]).directive('rowForms', function() {
	return {
		templateURL : ''// template url like "xxx.htl"
	};

});