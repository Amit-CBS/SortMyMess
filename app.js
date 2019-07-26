const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverrid = require('method-override');
const mongoose=require("mongoose");
const flash = require('connect-flash');
const session = require('express-session');
const passport=require('passport');


mongoose.connect("mongodb+srv://aniket1729:aniketjha@cluster0-ok85m.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true }, () => {
  console.log("Database Connected");
});

// mongoose.connect("mongodb://localhost/Mess", { useNewUrlParser: true }, () => {
//   console.log("Database Connected");
// });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverrid('_method'));

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

app.engine('handlebars', exphbs({ defaultLayout: 'layout' }));
app.set('view engine', 'handlebars');

const home=require("./routes/index");
const member=require("./routes/member");
const dashboard = require("./routes/dashboard");


app.use("/", home);
app.use("/", member);
app.use("/", dashboard);



const PORT = process.env.PORT || 4000 ;

app.listen(PORT, console.log(`Server is up-end running  ${PORT}`));
