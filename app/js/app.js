angular.module('myApp', ['ngRoute']).config(function ($routeProvider){
	$routeProvider
		.when('/', { 
			templateUrl: 'templates/home.html', 
			controller: 'HomeCtrl' 
		})
		.when('/contacts', { 
			templateUrl: 'templates/contacts.html', 
			controller: 'ContactsCtrl' 
		})
		.otherwise({ 
			redirectTo: '/'
		});
});

angular.module('myApp').controller('HomeCtrl', function ($scope){
	$scope.message = "Hello world!";
});

angular.module('myApp').controller('ContactsCtrl', function ($scope, ContactsService){
	ContactsService.getAll().then(function (contacts) {
		$scope.contacts = contacts;
	});
});