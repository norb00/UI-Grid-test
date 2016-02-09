var myapp = angular.module('myapp', [
            'ngRoute',
            'ngAnimate',
            'ngTouch',
            'ui.router',
            'ui.grid',
            'ui.grid.treeView',
            'ui.grid.resizeColumns',
            'ui.grid.moveColumns',
            'ui.grid.pinning',
            'ui.grid.saveState',
            'angularMoment'
]);

    myapp.config(['$stateProvider', '$urlRouterProvider',
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
    ]);

    myapp.controller('mainController', function($scope, $state){
        $scope.rightSwipeHandler = function($event){
            $state.go('main');
//            console.log("SWIPE: ", $event);
        }
        $scope.leftSwipeHandler = function($event){
            $state.go('main2');
//            console.log("SWIPE: ", $event);
        }
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