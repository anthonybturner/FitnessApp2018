angular.module("app")
    .controller('logoutCtrl', function($http, $scope, $rootScope, panel, editpanel, alert) {

        $rootScope.title = "logged out";

        var self = this;
        self.header = "Fitness and Nutrition tracker";
        self.pageDescription = "Track your daily, weekly, monthly, and yearly nutrition, goals and exercises.";

        self.register = function() {

        }

       
console.log("logging out");
    })