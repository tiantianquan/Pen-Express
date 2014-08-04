var app = angular.module('PenApp',['ngSanitize','contenteditable']);

app.controller('PenCtrl',function($scope,$http){
//    $scope.article ={
////        title:'',
//        content:''
//    };
    $scope.article;

    $scope.getData = function(){
        $http.get('/get-data')
            .success(function(data){
                $scope.article = data;
            });
    };
    $scope.postData = function(){
        $http.post('/post-data', $scope.article)
            .success(function(data){

            })
            .error(function(data){

            });
    };
})