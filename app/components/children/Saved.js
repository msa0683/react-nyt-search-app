// * **Saved** - displays the Saved Articles that were searched and stored in the database
var React = require("react");

var helpers = require("../utils/helpers");

var Saved = React.createClass({
  getInitialState: function () {
    return ({
      savedArticles: []
    })
  },

  componentDidMount: function () {
    var self = this;
    helpers.getSavedArticles().then(function (response) {
      self.setState({savedArticles: response.data})
    })
  },

  handleClick: function (event) {
    var self = this;
    var articleId = event.target.dataset.articleId;
    helpers.deleteArticle(articleId).then(function () {
      var savedArticles = self.state.savedArticles.filter(function (article) {
        return article._id !== articleId
      })
      self.setState({savedArticles: savedArticles})
    })
  },

  render: function () {
    var self = this;
    var articles = this.state.savedArticles.map(function (article, index) {
      return (
        <li key={index} className="list-group-item">
          <h3>
            <span><em>{article.title}</em></span>
            <span className="btn-group pull-right">
              <a href={article.url}>
                <button className="btn btn-default">View Article</button>
              </a>
              <button className="btn btn-primary" data-article-id={article._id} onClick={self.handleClick}>Delete</button>
            </span>

          </h3>
          <p>
            {article.pub_date}
          </p>
        </li>
      )
    })
  	return (
      <div>

  		  <div className="row">
  				<div className="col-sm-12">
  					<div className="panel panel-primary">
  						<div className="panel-heading">
  							<h3 className="panel-title"><strong><i className="fa fa-table"></i> Saved Articles</strong></h3>
  						</div>
  						<div className="panel-body">
                <ul className="list-group">
                  {articles}
                </ul>
  						</div>
  					</div>
  				</div>
  			</div>

      </div>
	 );
 }
})

module.exports = Saved;
