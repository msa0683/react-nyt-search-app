// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

var nytAPI = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931"

var helper = {

	runQuery: function(topic) {
		console.log(topic);

		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPI + "&q=" + topic;
		return axios.get(queryURL).then(function(responseObj) {
			if (responseObj.data.response.docs) {
				return responseObj.data.response.docs;
			}
			return [];
		});
	},

	 getSavedArticles: function() {
	 	return axios.get("/api/saved");
	 },

	 saveArticle: function(article) {
	 	return axios.post("/api/saved", article);
	 },

	 deleteArticle: function(articleId) {
	 	return axios.delete("/api/saved/" + articleId)
	 },


};

module.exports = helper;
