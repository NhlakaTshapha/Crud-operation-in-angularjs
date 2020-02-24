var app = angular.module('myapp', []);
app.controller('mycontroller', function ($scope) {
    console.log("In mycontroller");

    //variable storing new user info
    $scope.newuser = {};
    $scope.message = "";

    //varible for editing users
    $scope.clickednewuser = {};

    $scope.users = [
        {username:"nhlaka",fullname:"Nhlakanipho Tshapha",email:"nhlakatshapha@gmail.com"},
        { username: "Mshazi", fullname: "Mluleki Nzuza", email: "mluleki@gmail.com" },
        { username: "sbusiso", fullname: "Sbusiso Ndlovu", email: "sbundlovu@gmail.com" }
    ];

    // this is a save button 
    $scope.saveUser = function () {

      // adding a newuser to the list of users
        $scope.users.push($scope.newuser);
      // pass a successful message 
        $scope.message = "New user added Successfully";

        $scope.newuser = {};
    }


    //this function for selecting a user to update
    $scope.selectuser = function (user) {
        console.log(user);
        //stores information of the cliked user
        $scope.clickednewuser = user;
    }

    //this is button for updating user info
    $scope.updateuser = function () {
        console.log("updating...");
        $scope.message = "User updated successfully";
    }

    //this is for deleting a selected user
    $scope.deleteuser = function (user) {
        $scope.users.splice($scope.users.indexOf($scope.clickednewuser), 1);
        $scope.message = "User Deleted successfully";
    }


    $scope.clearmessage = function () {
        $scope.message = "";
    }
});