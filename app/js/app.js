angular.module('myApp', ['ngRoute']).config(function ($routeProvider){
	$routeProvider
		.when('/', { templateUrl: 'templates/home.html', controller: 'HomeCtrl' })
		.otherwise({ redirectTo: '/'});
});

angular.module('myApp').controller('HomeCtrl', function ($scope){
	$scope.message = "Hello world!";
});