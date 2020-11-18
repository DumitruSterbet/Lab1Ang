var app = angular.module('app', []);
app.factory('productService', function() {
  var productList = [
  { model: "Asus",tip : "PC",pret: 400},
  { model: "Acer",tip : "PC",pret: 500},
  { model: "Hp",tip : "tastatura",pret: 800},
  { model: "Lenovo",tip : "PC",pret: 100},
  { model: "Asus",tip : "tastatura",pret: 50}
  ];
  var cosList = [];
  var addinCOS = function(newObj) {
      cosList.push(newObj);
  };

 var addTOCOS = function(a) {
        for (var i=0;i<productList.length;i++) {
if (i==a){
addinCOS(productList[i]);
}
  }};
  
  var addProduct = function(newObj) {
      productList.push(newObj);
  };
  
  var contrPOP = function() {
        for (var i=0;i<productList.length;i++) {
if(productList[i]==null)
productList.pop();
}
  };
  
  var delProduct = function(a) {
        for (var i=0;i<productList.length;i++) {
if (i>=a){
productList[i]=productList[i+1];
}
  }contrPOP();}

var changeProduct=function(b,c) {
        for (var i=0;i<productList.length;i++) {
if (i==b){
productList[i]=c;
}
  }};
  var getProducts = function(){
      return productList;
  };
   var getCos= function(){
      return cosList;
  };
  
  var getSumaCos= function(){var suma1=0;
  for (var i=0;i<cosList.length;i++){
      suma1=cosList[i].pret+suma1;}
      return suma1;
  };

  return {
    addProduct: addProduct,
    getProducts: getProducts,
    delProduct: delProduct,
    changeProduct: changeProduct,
    addTOCOS: addTOCOS,
    getCos: getCos,
    getSumaCos: getSumaCos
  };

});

app.controller('ProductController', function($scope, productService) {


 $scope.addcos=false;
 $scope.AddToCos = function(){
$scope.addcos=!$scope.addcos;
        };
 
 $scope.AddPC=false;
 $scope.ChangePC=false;
 $scope.DelPC=false;
    $scope.callToAddToProductList = function(){

       productService.addProduct({model: $scope.comerciant.model, tip: $scope.comerciant.tip, pret: $scope.comerciant.pret });;
       
       };
       
        $scope.callToAddCos = function(){

       productService.addTOCOS($scope.addTOcos-1); 
       
       };
       
       $scope.callToDelToProductList = function(){

       productService.delProduct($scope.deleteInd-1); 
       
       };
        $scope.callToChangeToProductList = function(){

       productService.changeProduct($scope.changeInd-1,{model: $scope.comerM.modelM, tip: $scope.comerM.tipM, pret: $scope.comerM.pretM }); 
       
       };
       $scope.addpc =function () {
        $scope.AddPC= !$scope.AddPC;
        $scope.DelPC=false;
        $scope.ChangePC=false;
       }
        $scope.delpc =function () {
        $scope.AddPC=false;
        $scope.DelPC=!$scope.DelPC;
        $scope.ChangePC=false;
       }
        $scope.changepc =function () {
        $scope.AddPC=false;
        $scope.DelPC=false;
        $scope.ChangePC=!$scope.ChangePC;;
       }
});
app.controller('CartController', function($scope, productService) {

$scope.inter='manager';
$scope.exitMenu= function () { 
document.location.href = "menu.html";}

$scope.Enter= function () { 
if($scope.inter=='manager') {
document.location.href = "index1.html";}
else {document.location.href = "index2.html";}
}




    $scope.aratalista=false;
    $scope.showCOS=false;
     $scope.ShowCos =function () {
      $scope.aratalista=false;
        $scope.showCOS= !$scope.showCOS;
        $scope.aratalistaASC=false;
        $scope.aratalistaTip=false;
       }
    $scope.products = productService.getProducts();
      $scope.arataCOS=productService.getCos();
     
     $scope.CalcSumCos= function() {
         $scope.suma=productService.getSumaCos();
    }   
    
    $scope.afisSumCos=false; 
    
    $scope.AfisSumCos =function () {
    $scope.CalcSumCos();
     $scope.afisSumCos= !$scope.afisSumCos;}
     
     
   $scope.ShowList =function () {
   $scope.showCOS=false;
        $scope.aratalista= !$scope.aratalista;
        $scope.aratalistaASC=false;
        $scope.aratalistaTip=false;
       }
       $scope.ShowListASC =function () {
       $scope.showCOS=false;
        $scope.aratalistaASC= !$scope.aratalistaASC;
         $scope.aratalista=false;
         $scope.aratalistaTip=false;
       }
    $scope.ShowListByTip =function () {
     $scope.aratalista=false;
    $scope.showCOS=false;
        $scope.aratalistaTip= !$scope.aratalistaTip;
        $scope.aratalistaASC=false;
       }
    
});
