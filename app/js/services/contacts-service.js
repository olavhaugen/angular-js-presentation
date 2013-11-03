angular.module('myApp').factory('ContactsService', function ($http, $q) {
	return {
		getAll: function () {
			var deferred = $q.defer();

			$http.get('api/contacts.json').success(function (contacts) {
				deferred.resolve(contacts);
			}, function (error) {
				deferred.reject(error);
			});

			return deferred.promise;
		}
	};
});