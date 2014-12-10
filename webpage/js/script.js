var startPage = angular.module('monopolyStartPage', ['ngAnimate']);

startPage.controller('Controller',  function($scope, $timeout) {

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

	$scope.icons = ['1','2','3','4','5','6'];

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

			$timeout(function () { $scope.showAlert = false; }, 1500);

		} else {
			// add to available icons
			$scope.icons.push($scope.players[index].figure);
			$scope.icons.sort();

			// delete existing user
			$scope.players.splice(index, 1);

			// show the the plus button
			$scope.showAddButton = true;
		}
		
	};

	$scope.updatePlayerIcon = function(index,select) {
		$scope.players[index].figure = select;

		console.log($scope.players);

		// delete from available icons		
		$scope.icons.splice($scope.icons.indexOf(select),1);
	}

	$scope.startGame = function() {
		$scope.alertMessage = "BLAAAA";
		$scope.showAlert = true;

		$timeout(function () { $scope.showAlert = false; }, 3000);
		
	};




	// variables

});