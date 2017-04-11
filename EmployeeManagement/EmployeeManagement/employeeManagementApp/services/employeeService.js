
(function (app) {

    var employee =
                  [  
                      {
                          Id : 1,
                          FirstName: "Jose",
                          LastName: "Vowels",
                          Company: "ACME",
                          JobTitle: "Software Developer",
                          BusinessPhone: "5593346999",
                          HomePhone: "5468546525",
                          MobilePhone: "8525646587",
                          FaxNumber: "9785465854",
                          Street: "60 Hill Road ",
                          City: "Auckland",
                          State: "",
                          Country: "NZ",
                          Email: "PamelaJCallaghan@rhyta.com",
                          WebPage: "JesseAIrvine.dayrep.com",
                          Notes: " "                          
                      },
                      {
                           Id : 2,
                           FirstName: "Andrew",
                           LastName: "Mowry",
                           Company: "ACME",
                           JobTitle: "Software Developer",
                           BusinessPhone: "465478987",
                           HomePhone: "4658978878",
                           MobilePhone: "6987984658",
                           FaxNumber: "3235654658",
                           Street: "21 Melm Street",
                           City: "Wellington",
                           State: "",
                           Country: "NZ",
                           Email: "ClydeRPrice@jourrapide.com",
                           WebPage: "ClydeRPrice.jourrapide.com",
                           Notes: " "
                       },
                        {
                            Id: 3,
                            FirstName: "Milton",
                            LastName: "White",
                            Company: "ACME",
                            JobTitle: "Product Manager",
                            BusinessPhone: "9879855465",
                            HomePhone: "6547898787",
                            MobilePhone: "2325659658",
                            FaxNumber: "4658798854",
                            Street: "12 Charles Street",
                            City: "Auckland",
                            State: "",
                            Country: "NZ",
                            Email: "JohnGHaines@armyspy.com",
                            WebPage: "FurnishingExperts.com",
                            Notes: " "
                        },
                  ];


    var employeeService = function () {
        var employeeFactory = {};

        employeeFactory.getEmployee = function (index) {
            var returnEmployee = [];
            if (employeeFactory.isOverflow(index))
            {
                index = 0;
            }
            returnEmployee.push(employee[index]);
            return returnEmployee;
        };

        employeeFactory.isOverflow = function (index){

            return (employee.length <= index)
        };

        employeeFactory.addEmployee = function (index) {
            var returnEmployee = [];
            var newIndex = employee.length + 1;
            employee.push(employeeFactory.newItem(newIndex));
            returnEmployee.push(employee[employee.length - 1]);
            return (returnEmployee)
        };

        employeeFactory.deleteEmployee = function (index) {
            var returnEmployee = [];

            employee.splice(index,1);
           if (employee.length <= index)
           {
               index = employee.length -1;
           }
           returnEmployee.push(employee[index]);
            return (returnEmployee)
        };

        employeeFactory.newItem = function (index) {

            var newItem = {

                Id: index,
                FirstName: "",
                LastName: "",
                Company: "",
                JobTitle: "",
                BusinessPhone: "",
                HomePhone: "",
                MobilePhone: "",
                FaxNumber: "",
                Street: "",
                City: "",
                State: "",
                Country: "",
                Email: "",
                WebPage: "",
                Notes: ""
            }
            return newItem;

        }

        return employeeFactory;
    };
    app.factory("employeeService", employeeService);

}(angular.module("employeeManagementApp")));