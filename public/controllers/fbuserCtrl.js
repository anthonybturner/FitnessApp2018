angular.module("app")
    .controller('fbCtrl', function($rootScope, facebook, $location, $http) {
        var self = this;
        
      
        facebook.getUser().then(function(fbUser) {

            console.log("fbuserCTRL.js: Get user");
            if (fbUser) {

                self.fbUser = fbUser;

            }
            else {
                //The user has been logged out, so redirect them to login page
               // $location.url("/authlogin");


            }
        });
        self.status = "Not Checked Yet."

        self.login = function() {

            facebook.login().then(function(fbUser) {

                self.fbUser = fbUser;
              
                $http.post('/fbLocalLogin', {
                    facebookUser: fbUser
                }).then(function(data) {
            
                    $rootScope.loggedIn = true;
                       self.fbUser = fbUser;
                    $location.url("/");

                })

            })
        }
        
         self.logout = function() {

                $rootScope.loggedIn = null;
                self.fbUser = null;
               $location.url("/login");
             
               console.log("fbUserCtrl.js: logout ");
               console.log(self.fbUser);
        }
    })