// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

var nytAPI = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931"

var helper = {

	runQuery: function(article) {
		console.log(article);

		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPI + "&q=";
		return.axios.get(queryURL).then(function(response) {
			if (response.data.results[0]) {
				return response.data.results[0].formatted;
			}
			return "";
		});
	},

	 getHistory: function() {
	 	return axios.get("/api/saved");
	 },

	 postHistory: function(article) {
	 	return axios.post("/api/saved", { article: article });
	 }
};

module.exports = helper;