var startPage = angular.module('monopolyStartPage', []);

startPage.controller('Controller', [ '$scope', function($scope, $timeout) {

	$scope.showAddButton = true;
	$scope.showMinusButton = false;
	$scope.showAlert = false;
	$scope.alertMessage;

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
		if ($scope.players.length < 3) {

			$scope.alertMessage = "Mindestens 2 Spieler";
			$scope.showAlert = true;

			$timeout(function () { $scope.showAlert = false; }, 3000);

		} else {
			$scope.players.splice(index, 1);
			$scope.showAddButton = true;
		}
		
	};


	$scope.startGame = function() {
		$scope.alertMessage = "BLAAAA";
		$scope.showAlert = true;

		$timeout(function () { $scope.showAlert = false; }, 3000);
		
	};


	// variables
} ]).directive('rowForms', function() {
	return {
		templateURL : ''// template url like "xxx.htl"
	};

});