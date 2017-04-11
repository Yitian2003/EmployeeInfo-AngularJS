(function (app) {
    var employeesController = function ($scope, employeeService) {
        var init = function () {
            $scope.employee = employeeService.getEmployee(0);
       };

        var index = 0;

        $scope.nextEmployee = function () {
            index++;
            if (employeeService.isOverflow(index))
            {
                index--;
            }
            $scope.employee = employeeService.getEmployee(index);

        }

        $scope.previousEmployee = function () {
            index--;
            if (index < 0) {
                index = 0;
            }
            $scope.employee = employeeService.getEmployee(index);
        }

        $scope.addEmployee = function () {
            index--;
            if (index < 0) {
                index = 0;
            }
            $scope.employee = employeeService.addEmployee(index);
        }

        $scope.deleteEmployee = function () {
         
            $scope.employee = employeeService.deleteEmployee(index);
            index--;
        }      

        init();
    };
    app.controller("employeesController", ["$scope", "employeeService", employeesController]);
}(angular.module("employeeManagementApp")));