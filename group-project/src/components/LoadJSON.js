function load(path) {
	var json = require(path);
	var data = JSON.parse(json);
	return data;
}

export default load;
