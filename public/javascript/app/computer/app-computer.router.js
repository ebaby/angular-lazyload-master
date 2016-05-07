define([],function(){
	var basePath = {
		computer:globalConfig.appPath+"computer/"
	}
	return {
		defaultRoutePath:"/",
		lazyCfg:{
			"stateName":"app.computer",
            "urlPrefix":"/computer",
            "type":"ngload",
            "src":basePath.computer+'app-computer.module.js'
		},
		routers:{
			"app.computer":{
				url:"/computer",
				dependencies:[
					basePath.computer + "computer.controller.js"
				],
				views:{
					"content@app":{
						templateUrl:basePath.computer+"computer.html",
						controller:"ComputerCtrl"
					}
				}
			},
			"app.computer.detail":{
				url:"/detail/:id",
				dependencies:[
					basePath.computer + "detail/detail.controller.js"
				],
				views:{
					"content@app":{
						templateUrl:basePath.computer+"detail/detail.html",
						controller:"DetailCtrl"
					}
				}
			}
		}
	}
})