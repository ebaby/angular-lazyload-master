define(["require","angular"],function(require,ng){
	var module = ng.module("app.computer");
	module.controller('ComputerCtrl', ['$scope', '$state',function($scope,$state){
		$scope.title = "computer";
		$scope.comItems = [{id:1,name:'dell',url:'#/computer/detail/1'},{id:2,name:'hp',url:'#/computer/detail/2'},{id:3,name:'lenovo',url:'#/computer/detail/3'}];

		$scope.goDetail = _goDetail;
		function _goDetail(com){
			$state.go("app.computer.detail",{id:com.id})

		}
	}])
});