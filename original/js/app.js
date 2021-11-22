document.onload = function() {
  document.getElementById("root").innerHTML = header;
}

angular.module("exampleApp", [])

.controller("defaultCtrl", function ($scope) {
    
    $scope.counter = 0;
    console.log('jquery', $('.panel-body'))
    $scope.incrementCounter = function () {
        $scope.counter++;
    }
})