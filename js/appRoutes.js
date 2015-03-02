angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
        // home page
        .when('/', {
            templateUrl: 'partials/home',
            controller: 'MainController'
        })

        .when('/nerds', {
            templateUrl: 'partials/nerd',
            controller: 'NerdController'
        })

        .when('/geeks', {
            templateUrl: 'partials/geek',
            controller: 'GeekController'
        })

        // nerds page that will use the NerdController
        .when('/members', {
            templateUrl: 'partials/member',
            controller: 'MemberController'
        });
	$locationProvider.html5Mode(true);

}]);