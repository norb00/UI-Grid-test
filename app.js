var myapp = angular.module('myapp', [
            'ngRoute',
            'ngAnimate',
            'ngTouch',
            'hmTouchEvents',
            'ui.router',
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

    myapp.controller('mainController', ['$scope', function($scope){

        $scope.onHammerLeft = function (event) {
            $scope.showp2 = true;
            console.log($scope.showp1);
            console.log($scope.showp2);
            console.log($scope.showp3);
            console.log($scope.showp4);
        };

        $scope.onHammerRight = function (event) {
            $scope.showp1 = true;
            console.log($scope.showp1);
            console.log($scope.showp2);
            console.log($scope.showp3);
            console.log($scope.showp4);
        };
        $scope.onHammerUp = function (event) {
            console.log(event);
            $scope.showp4 = true;
            console.log($scope.showp1);
            console.log($scope.showp2);
            console.log($scope.showp3);
            console.log($scope.showp4);
        };
        $scope.onHammerDown = function (event) {
            $scope.showp3 = true;
            console.log($scope.showp1);
            console.log($scope.showp2);
            console.log($scope.showp3);
            console.log($scope.showp4);
        };

        $scope.setVisible = function (panel) {
              $scope[panel] = true;
        }

        $scope.hidePanel = function (panel, $event) {
            console.log(panel, $event);
            $scope[panel] = false;
        }

    }]);


