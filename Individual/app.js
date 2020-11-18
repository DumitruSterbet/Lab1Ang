        
          
        var studentApp = angular.module('studentApp', []);

            
    studentApp.directive('myDirective', function() {// directiva ce se foloseste la inregistrare pentru validarea datelor
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function myValidation(value) {
                if (value.length > 3) {// daca lungimea textului este > 3
                    mCtrl.$setValidity('charE', true);
                } else {
                    mCtrl.$setValidity('charE', false);
                }
                return value;
            }
            mCtrl.$parsers.push(myValidation);
        }
    };
});

        studentApp.controller("ctrController", function ($scope, $http) {

$scope.inreg=true;// pentru afisarea si ascunderea formularului de inregistrare

            $scope.originalStudent = {// date valide ce se afiseaza la intrare in formularul de inregistrare
                login: 'Dumitru',
                password: 'Sterbet',
                email: 'd.sterbet@inbox.ru'
                };
          
           // copiere pentru afisare la inceput a datelor valide
            $scope.student = angular.copy($scope.originalStudent);
        

            $scope.submitStudnetForm = function () {  
           $scope.logare=true;// ascunderea inregistrarii
           $scope.inreg=false;//afisarea meniului de logare
            $scope.autStudent=$scope.student; 
            $scope.student='';
          // memorarea datelor introduse

            };

            // functia pentru resetarea valorilor  prin nularea lor
            $scope.resetForm = function () { 
              $scope.student='';
            };
            


  // formularul de logare
  //
  //
  //
  //
           

$scope.validare = function () {  // Functia pentru validarea accesului in aplicatie
// daca loginul si parola coincide cu cea inregistrata
    if ($scope.student.login==$scope.autStudent.login &&
   $scope.student.password==$scope.autStudent.password) 
    {$scope.logare=false;document.location.href = "menu.html";} 
    
else {$scope.message='Asa utilizator nu exista mai incearca sa introduci';}

// Daca asa utilizator nu sa inregistrat
}
 $scope.submitLogForm = function () { 
            $scope.validare();// tastarea submit cu trecerea validarii
            };
$scope.resetFormLog = function () { // resetarea 
             $scope.student=''; 
            };

    }); 