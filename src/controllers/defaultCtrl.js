// import axios from 'axios'
// angular.module('app', [])

// .controller('defaultCtrl', function($scope) {
//     $scope.products = []
//     // 'https://react-quiz-dc68a-default-rtdb.europe-west1.firebasedatabase.app/quizes.json'
//     axios.get('https://react-quiz-dc68a-default-rtdb.europe-west1.firebasedatabase.app/quizes.json')
//     .then(function(e) {
      

//       $scope.products = e.data['-Mo5_GU3P5zNbferEhuw']
//       $scope.$apply();
//     })

    
// })  

angular.module("app", [])

.controller("defaultCtrl", function ($scope, $http) {

    $http.get("productData.json").success(function (data) {
        $scope.products = data;
    });

})