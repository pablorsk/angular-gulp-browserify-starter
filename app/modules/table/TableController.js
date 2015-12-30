'use strict';

function TableCtrl($scope, NgTableParams) {
    $scope.testVar = 'This my test for NgTableParams';

    var data = [
                { name: 'Lucas Rojo', age: 21 },
                { name: 'Pablo Reyes', age: 88 },
                { name: 'Edgardo Ponce', age: 11 },
                { name: 'Ayelen Guerra', age: 20 }
            ];
    $scope.tableReady = new NgTableParams({ count: 3 }, { data: data });
}

TableCtrl.$inject = ['$scope', 'NgTableParams'];
module.exports = TableCtrl;
