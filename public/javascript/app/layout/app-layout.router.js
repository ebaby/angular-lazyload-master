define([],function(){
	var basePath = {
		layout:globalConfig.appPath+"layout/"
	}
	return {
		defaultRoutePath:"/",
		lazyCfg:{
			"stateName":"app",
            "urlPrefix":"/",
            "type":"ngload",
            "src":basePath.layout+'app-layout.module.js'
		},
		routers:{
			"app":{
				url:"",
				dependencies:[
					basePath.layout+"home.controller.js"
				],
				views:{
					"header":{
						templateUrl:basePath.layout+"header.html"
					},
					"":{
						templateUrl:basePath.layout+"home.html",
						controller:"HomeCtrl"
					},
					"content@app":{
						templateUrl:basePath.layout+"main.html",
					}
				}
			},
		}
	}
})