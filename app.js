( function () {

angular.module('Myassi',[])

.controller('Myassicontrol',LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
    $scope.Message="";  

    $scope.counthe = function(){
        var val = "";
        val = document.getElementById('lunch-menu').value;
        if(val.trim().length===0)
        {
            $scope.Message="Empty...!";
        }
        else{
            var arrayValue = val.split(',');
            var arrayDishesWithout = arrayValue.filter(function(v){
                return v.trim() !== '';
            });

            if(arrayDishesWithout.length<=3){
                $scope.Message="Enjoy!";
            }
            else{
                $scope.Message="Too much!";
            }
        }
    };



}


})();