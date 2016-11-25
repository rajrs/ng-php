var app = angular.module('nphp', ['ui.router']);
app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'template/empform.html',
            controller: 'employeeController'
            /*resolve:{
            	friends:['$http',function ($http) {
            		 return $http.get('friends.json').then(function(response){
            		  console.log(response);
            		 return response.data;	
            		 }) 
            	}]
            }*/

        })
       
       

}])
app.controller('employeeController', ['$scope','$http', function($scope,$http) {
     function clearFields() {
                $scope.emp_no = '';
                $scope.emp_first_name = "";
                $scope.emp_last_name = '';
                $scope.emp_dept = '';
            }
    $scope.insertData= function () {
        
         $http.post('service/insert.php',{'empno':$scope.emp_no,'efname':$scope.emp_first_name,'elname':$scope.emp_last_name, 'edept':$scope.emp_dept})
         .success(function  (data, status, headers,config) {
              console.log('data inserted');              
              console.log(status); 
              console.log(headers); 
              console.log(config); 
              clearFields();
         })
    }

   
    

}]);

