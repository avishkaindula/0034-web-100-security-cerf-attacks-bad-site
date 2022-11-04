const path = require("path");

const express = require("express");

const demoRoutes = require("./routes/demo");

// This site doesn't have to use ExpressJS / NodeJS
// It could also be a simple static site (i.e. just HTML + CSS)

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

app.use(demoRoutes);

app.listen(8000);
// This will listen to port 8000 instead of port 3000. So now we can run 2 servers simultaneously
// inside localhost port 3000 and localhost port 8000.
// We can manage this ports with two separate integrated terminals.
