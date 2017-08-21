var React = require("react");

var helpers = require("../utils/helpers");
var SearchForm = require('./SearchForm');
var Results = require('./Results');

var Search = React.createClass({
  getInitialState: function() {
    return {
       topic: "",
       startYear: "",
       endYear: "",
       results: []
    };
  },

// This function allows childrens to update the parent .
  setTopic: function(topic, startYear,endYear) {
    this.setState({
      topic: topic,
      startYear: startYear,
      endYear: endYear
    }, this.getNYTArticles)
  },

  getNYTArticles: function () {
    var self = this;
    helpers.runQuery(this.state.topic).then(function (articles) {
      // setState of results to be the articles that I got back from NYT
      self.setState({
        results: articles
      })
    })
  },

  render: function() {
    return (
      <div className="row">

        <div className="jumbotron">
          <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
        </div>

        <div className="col-md-12">
          <SearchForm setTopic={this.setTopic}/>
        </div>

        <div className="col-md-12">
          <Results results={this.state.results}/>
        </div>

      </div>
    )
  }
});

module.exports = Search;
