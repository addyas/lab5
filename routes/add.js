var data = require("../data.json");

exports.addFriend = function(req, res) {  
	// Your code goes here
	var name = req.query.name;
	var description = req.query.description;
	console.log("the friend's name is: " + name);
	console.log("the friend's description: " + description);

	var newFriend  = {
        "name": name,
		"description": description,
		"imageURL": "http://lorempixel.com/400/400/people"

    };

    data["friends"].push(newFriend);
	res.render('add', data);

}