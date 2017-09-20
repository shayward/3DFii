const fs = require("fs"),
	https = require("https"),
	express = require("express"),
	path = require("path"),
	app = express();

https.createServer({
	key: fs.readFileSync(__dirname + "/ssl/key.pem"),
	cert: fs.readFileSync(__dirname + "/ssl/cert.pem"),
	passphrase: "alpine"
}, app).listen(443);

var logger = function(req, res, next) {
    console.log("GOT_REQUEST");
    next();
}

app.all("*", logger);

app.get("/v1/api/content/time_zones/US/en", function (req, res) {
	res.set("X-Nintendo-Date", Date.now());
	res.sendFile(path.join(__dirname + "/time_zones/en-US.xml"));
});

app.get("/v1/api/content/agreements/Nintendo-Network-EULA/US/@latest", function (req, res) {
	res.set("X-Nintendo-Date", Date.now());
	res.sendFile(path.join(__dirname + "/eula/en-US.xml"));
});

app.get("/v1/api/people/*", function (req, res) {
	res.set("X-Nintendo-Date", Date.now());
	res.send(" ");
});

app.post("/v1/api/people/", function (req, res) {
	res.set("X-Nintendo-Date", Date.now());
	res.send('<?xml version="1.0" encoding="UTF-8" standalone="yes"?><person><pid>1751637014</pid></person>');
});

app.get("/v1/api/admin/mapped_ids", function (req, res) {
	res.set("X-Nintendo-Date", Date.now());
	res.send('<?xml version="1.0" encoding="UTF-8" standalone="yes"?><mapped_ids><mapped_id><in_id> </in_id><out_id></out_id></mapped_id></mapped_ids>');
});

app.post("/v1/api/support/validate/email", function (req, res) {
	res.set("X-Nintendo-Date", Date.now());
	res.send(" ");
});