var React = require("react");

var helpers = require("../utils/helpers");

var Results = React.createClass({
	handleClick: function (event) {
		event.preventDefault();
		var articleId = event.target.dataset.articleId;
		var selectedArticle = this.props.results.filter(function (article) {
			return (article._id === articleId)
		});
		var article = {
			title: selectedArticle[0].headline.main,
			url: selectedArticle[0].web_url
		}
		helpers.saveArticle(article)
	},

	render: function() {
		var self = this;
		var articles = this.props.results.map(function (article, index) {
			return (
				<li key={index} className="list-group-item">
					<h3>
						<span><em>{article.headline.main}</em></span>
						<span className="btn-group pull-right">
							<a href={article.web_url}>
								<button className="btn btn-default">View Article</button>
							</a>
							<button className="btn btn-primary" data-article-id={article._id} onClick={self.handleClick}>Save</button>
						</span>

					</h3>
					<p>
						{article.pub_date}
					</p>
				</li>
			)
		})
		return(
			<div className="panel-body">
				<ul className="list-group">
					{articles}
				</ul>
			</div>
		)
	}
})

module.exports = Results;
