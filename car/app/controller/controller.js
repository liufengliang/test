app.controller('homeCtrl',['$scope','dataServer',function($scope,dataServer){
    //$scope.data = arr;
    $scope.arr = [];
    $scope.i = 0;
    $scope.arr.push(dataServer.slice($scope.i, $scope.i+4));
    $scope.data = $scope.arr;
    $scope.fn = function(){
        $scope.i += 4;
        $scope.arr.push(dataServer.slice($scope.i, $scope.i+4));
        $scope.data = $scope.arr;
    }
}]);