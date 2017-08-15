// import React from "react";

// class Search extends React.Component{

// 	getInitialState: function() {
// 		return { term: "" };
// 	},

// 	handleChange: function(event) {

// 				this.setState({ term: event.target.value });
// 	},

// 	handleSubmit: function(event) {
// 		event.preventDefault();
// 		this.props.setTerm(this.state.term);
//    		this.setState({ term: "" });
//  	},
//      // // * **Search** - queries the NYT API for articles. Displays API search results from another 
//      // possible **Query** component and **Results** component. Gives the user the ability to save an 

//      // article to their Saved Articles.

// 	render: function() {
// 	    return (

// 		<div class="row">
// 			<div class="col-sm-12">
// 			<br>
// 				<div class="panel panel-primary">
// 					<div class="panel-heading">
// 						<h3 class="panel-title"><strong><i class="fa  fa-list-alt"></i>Search Parameters</strong></h3>
// 					</div>
// 					<div class="panel-body">
// 						<form role="form">
// 						  <div class="form-group">
// 						    <label for="search">Search Term:</label>
// 						    <input type="text" class="form-control" id="searchTerm">
// 						  </div>

// 						  <div class="form-group">
// 						    <label for="pwd">Number of Records to Retrieve:</label>
// 							<select class="form-control" id="numRecordsSelect">
// 								<option value="1">1</option>

// 								<option value="5" selected="">5</option>
// 								<option value="10">10</option>
// 							</select>			  
// 						  </div>


// 						  <div class="form-group">
// 						    <label for="startYear">Start Year (Optional):</label>
// 						    <input type="text" class="form-control" id="startYear">
// 						  </div>


// 						  <div class="form-group">
// 						    <label for="endYear">End Year (Optional):</label>
// 						    <input type="text" class="form-control" id="endYear">
// 						  </div>


// 						  <button type="submit" class="btn btn-default" id="runSearch"><i class="fa fa-search"></i> Search</button>
// 	  					  <button type="button" class="btn btn-default" id="clearAll"><i class="fa fa-trash"></i> Clear Results</button>

// 						</form>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	   );
// 	};
// };
