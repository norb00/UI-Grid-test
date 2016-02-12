var myapp = angular.module('myapp', [
            'ngRoute',
            'ngAnimate',
            'ngTouch',
            'hmTouchEvents',
            'ui.router',
            'ui.grid',
            'ui.grid.treeView',
            'ui.grid.resizeColumns',
            'ui.grid.moveColumns',
            'ui.grid.pinning',
            'ui.grid.saveState',
            'angularMoment'
]);

/*    myapp.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider,   $urlRouterProvider){
            $stateProvider.state('main', {
                url: '/',
                templateUrl: 'v1.html',
                controller: 'myctrl',
                controllerAs: 'myctrl'
            }).state('main2', {
                url: '/2',
                templateUrl: 'v2.html',
                controller: 'myctrl2',
                controllerAs: 'myctrl2'
            })
        }
    ]);*/

    myapp.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider,   $urlRouterProvider){
            $stateProvider.state('main', {
                url: '/',
                views: {
                    'p1': {
                        templateUrl: 'v1.html',
                        controller: 'myctrl',
                        controllerAs: 'myctrl'
                    },
                    'p2': {
                        templateUrl: 'v2.html',
                        controller: 'myctrl2',
                        controllerAs: 'myctrl2'
                    }
                }
            }).state('main2', {
                url: '/2',
                views: {
                    'p1': {
                        templateUrl: 'v1.html',
                        controller: 'myctrl2',
                        controllerAs: 'myctrl2'
                    },
                    'p2': {
                        templateUrl: 'v2.html',
                        controller: 'myctrl',
                        controllerAs: 'myctrl'
                    }
                }
            })
        }
    ]);
    myapp.controller('mainController', function($scope, $state){
        $state.go('main');

        $scope.onHammer = function (event) {
            console.log(event);
            $state.go('main');
            $scope.eventType = event.type;
        };

        $scope.onHammer2 = function (event) {
            console.log(event);
            $state.go('main2');
            $scope.eventType = event.type;
        };

    });

    myapp.controller('myctrl', function ($scope) {

    $scope.actualSeries = 0;

    $scope.gridOptions = {
        columnDefs: [
          {field: 'date', displayName: 'Date'},
          {field: 'value', displayName: 'Value'}
        ]
      };

    $scope.myData = [
        {
            "firstName": "Cox",
            "lastName": "Carney",
            "company": "Enormo",
            "employed": true
        },
        {
            "firstName": "Lorraine",
            "lastName": "Wise",
            "company": "Comveyer",
            "employed": false
        },
        {
            "firstName": "Nancy",
            "lastName": "Waters",
            "company": "Fuelton",
            "employed": false
        }
    ];

    $scope.myData2 = data_real;

});

myapp.controller('myctrl2', ['$scope', function ($scope) {

  $scope.myData2 = [
    {
        "firstName": "Cox",
        "lastName": "Carney",
        "company": "Enormo",
        "employed": true
    },
    {
        "firstName": "Lorraine",
        "lastName": "Wise",
        "company": "Comveyer",
        "employed": false
    },
    {
        "firstName": "Nancy",
        "lastName": "Waters",
        "company": "Fuelton",
        "employed": false
    }
];
}]);

function formatDate(s){
    return s.toLocaleDateString('en-US');
}