module.exports = function(app){
	app.route("/").get(function(req,res){
		res.render("index",{title:"express-dine-pass"});
	})
}
