var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

// Here we include all of the sub-components
var Saved = require("./children/Saved");
var Search = require("./children/Search");
var Results = require("./children/Results");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({

  // Here we render the function
  render: function() {
    return (
      <div className="container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button className="navbar-toggle" type="button" data-toggle="collapse">
                <a className="navbar-brand" href="/">New York Times Article Scrubber</a>
              </button>
            </div>
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/saved">Saved</Link></li>
              </ul>
            </div>
          </div>
        </nav>


        <div className="row">
          {this.props.children}
        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
