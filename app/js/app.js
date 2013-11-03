angular.module('myApp', ['ngRoute']).config(function ($routeProvider){
	$routeProvider
		.when('/', { templateUrl: 'templates/home.html', controller: 'HomeCtrl' })
		.otherwise({ redirectTo: '/'});
});

angular.module('myApp').controller('HomeCtrl', function ($scope, ContactsService){
	$scope.message = "Hello world!";

	ContactsService.getAll().then(function (contacts) {
		$scope.contacts = contacts;
	});
});