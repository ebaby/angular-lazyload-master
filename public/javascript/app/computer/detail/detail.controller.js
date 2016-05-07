define(["require","angular"],function(require,ng){
	var module = ng.module("app.computer");
	module.controller('DetailCtrl', ['$scope','$state',function($scope,$state){
		console.log($state.params);
		$scope.vm = {
			id:$state.params.id
		}
	}])
});