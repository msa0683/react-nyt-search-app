// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");
var ReactRouter = require("react-router");
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

// My Components
var Main = require("./components/Main");
var Search = require("./components/children/Search");
var Saved = require("./components/children/Saved");

// This code here allows us to render our main component (in this case Main)

ReactDOM.render(
		<Router history={hashHistory}>
			<Route path="/" component={Main}>
				<IndexRoute component={Search}/>
        <Route path="/search" component={Search}/>
				<Route path="/saved" component={Saved}/>
			</Route>
		</Router>,
	document.getElementById('app')
);
