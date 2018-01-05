var app = angular.module("demoApp", []);
app.controller("demoCtrl", function($scope) {
    $scope.book = "The Alchemist";
    $scope.author = "Paulo Coelho";
});
app.controller("DateCtrl", function($scope, $timeout) {
	$scope.now = 'Loading...';
	var updateTime = function() {
		$timeout(function(){
			$scope.now = new Date();
			updateTime();
		}, 1000);
	};
	updateTime();
});
app.filter('truncate', function() {
	return function (input, charCount) {
		var output = input;
		if(output.length > charCount) {
			output = output.substr(0,charCount -3) + '...';
		}
		return output;
	};
});