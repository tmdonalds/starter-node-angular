/**
 * Created by trevor on 3/1/15.
 */
angular.module('MemberCtrl', []).controller('MemberController', function($scope) {
    $scope.tagline = 'Members to the rescue!';
    console.log('wooohooooo');
    $scope.myData = [{name: "Moroni", age: 50},
        {name: "Tiancum", age: 43},
        {name: "Jacob", age: 27},
        {name: "Nephi", age: 29},
        {name: "Enos", age: 34}];
    $scope.gridOptions = { data: 'myData' };

});