if (typeof module !== "undefined") {
	module.exports = API;
	https = require("https"),
	express = require("express"),
	app = express();
} else {
	this.API = API;
}

function API(apiPort, sslKey, sslCert, sslPass) {
	this.apiVersion = "v1";
	this.apiPath = `/${this.apiVersion}/api`;

	https.createServer({
		key: sslKey,
		cert: sslCert,
		passphrase: sslPass
	}, app).listen(apiPort);

	app.all("*", this.serverRequest);
};

API.prototype.constructor = API;

API.prototype.serverRequest = function(req, res, next) {
	console.log("\x1b[33m%s\x1b[0m", "[API]");
	this.remoteIp = req.headers['X-Forwarded-For'] || req.connection.remoteAddress;
    console.log(`Request from ${this.remoteIp}`);
    console.log(`http://${req.headers.host}${req.url}`);
    next();
}

API.prototype.addApiGetBaseFromString = function(base, baseString, nintendoDate = false) {
	app.get(`${this.apiPath}/${base}`, function (req, res) {
		if (nintendoDate)
			res.set("X-Nintendo-Date", Date.now());

		res.send(baseString);
	});
};

API.prototype.addApiGetBaseFromFile = function(base, filePath, nintendoDate = false) {
	app.get(`${this.apiPath}/${base}`, function (req, res) {
		if (nintendoDate)
			res.set("X-Nintendo-Date", Date.now());

		res.sendFile(filePath);
	});
};

API.prototype.addApiPostBaseFromString = function(base, baseString, nintendoDate = false) {
	app.get(`${this.apiPath}/${base}`, function (req, res) {
		if (nintendoDate)
			res.set("X-Nintendo-Date", Date.now());

		res.send(baseString);
	});
};

API.prototype.addApiPostBaseFromFile = function(base, filePath, nintendoDate = false) {
	app.get(`${this.apiPath}/${base}`, function (req, res) {
		if (nintendoDate)
			res.set("X-Nintendo-Date", Date.now());

		res.sendFile(filePath);
	});
};