const fs = require("fs"),
	path = require("path"),
	API = require("../API.js");

const NNIDAPI = new API(443, fs.readFileSync(__dirname + "/../SSLCerts/key.pem"), fs.readFileSync(__dirname + "/../SSLCerts/cert.pem"), "alpine");

NNIDAPI.addApiGetBaseFromFile("content/time_zones/US/en", path.join(__dirname + "/time_zones/US.xml"), true);
NNIDAPI.addApiGetBaseFromFile("content/agreements/Nintendo-Network-EULA/*/*", path.join(__dirname + "/notice.xml"), true);
NNIDAPI.addApiGetBaseFromString("people/*", " ", true);
NNIDAPI.addApiPostBaseFromString("people/", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><person><pid>1751637014</pid></person>', true);
NNIDAPI.addApiGetBaseFromString("admin/mapped_ids", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><mapped_ids><mapped_id><in_id> </in_id><out_id></out_id></mapped_id></mapped_ids>', true);
NNIDAPI.addApiPostBaseFromString("support/validate/email", " ", true);