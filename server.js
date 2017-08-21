// Include Server Dependencies
const express = require ("express");
const bodyParser = require ("body-parser");
const logger = require ("morgan");
const mongoose = require ("mongoose");

// Require History Schema
const Article =  require ("./models/Article");

// Create Instance of Express
const app = express();
// Sets an initial port. We'll use this later in our listener
const PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI);	
} else {
	mongoose.connect("mongodb://127.0.0.1:27017")
}

const db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//ROUTES

// * `/api/saved` (get) -  components will use this to query MongoDB for all saved articles
app.get("/api/saved", function(req, res) {
	Article.find({}).limit(5).exec(function(err,doc) {
    console.log('hello')
    console.log(arguments)
		if (err) {
			console.log(err)
		}
		else {
			res.send(doc);
		}
	});
});

// * `/api/saved` (post) -  components will use this to save an article to the database
app.post("/api/saved", function(req, res) {
	Article.create({
		title: req.body.title,
		date: Date.now(),
		url:  req.body.url
	}, function(err) {
		if (err) {
			console.log(err)
		}
		else {
			res.send("SAVED SEARCH")
		}
	});
});

//* `/api/saved` (delete) -  components will use this to delete a saved article in the database
app.delete("/api/saved/:id", function (req, res) {
  	Article.remove({"_id": req.params.id}, function(err, doc) {
  		if (err) {
  			console.log(err)
  		}
  		else {
  			res.send("Deleted")
  		}
  	});
});

// Will load  single HTML page (with ReactJS) in public/index.html.
app.get("*", function(req, res) {
	res.sendFile(__dirname +"/public/index.html")
});

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
