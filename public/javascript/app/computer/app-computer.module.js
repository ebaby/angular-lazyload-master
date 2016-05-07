define(["require","angular","ngload","computer/app-computer.router","utils/moduleExtras"],function(require,ng,ngload,routerCfg,moduleExtras){
	var module = angular.module("app.computer",["ui.router"]);
	moduleExtras.call(module,routerCfg);
	return module;
})