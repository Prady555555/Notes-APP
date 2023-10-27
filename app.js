const express = require("express");
require("dotenv").config()
const expressLayouts = require("express-ejs-layouts");
const connectDB = require("./server/config/db")
const session = require("express-session")
const MongoStore = require("connect-mongo")
const passport = require("passport")
const methodOverride = require("method-override")



const app = express();

const port = 5000 || process.env.PORT;

// app.use for the passport sessions
app.use(session({
  secret:"keyboard cat",
  resave:false,
  saveUninitialized:true,
  store:MongoStore.create({
    mongoUrl:process.env.MONGOB_URI
  })
}))
app.use(passport.initialize());
app.use(passport.session());


// app.use for the pages
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));
app.use(expressLayouts);
app.set("layout","./layouts/main");
app.set("view engine", "ejs")
app.use(methodOverride("_method"));

// Database connection 
connectDB();

// routing the pages
app.use('/',require("./server/routes/auth"))
app.use('/',require("./server/routes/index"))
app.use('/',require("./server/routes/dashboard"))


// Direct Route for the unwanted urlss
app.get("*",(req,res)=>{
  res.render("404");
})

app.listen(port, ()=>{
  console.log(`server is running in the ${port}`)
})