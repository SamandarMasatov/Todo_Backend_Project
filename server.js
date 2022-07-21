const express = require('express')
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const session = require("express-session");
const methodOverride = require("method-override");
const cors = require("cors");
const path = require("path"); 
const mongoose = require("mongoose");
const sessionValues = require("./config/sesion");
const MongoDBSession = require("connect-mongodb-session")(session);
const MongoURI = "mongodb://localhost:27017/Shervue";


mongoose
    .connect(MongoURI, {  
      useNewUrlParser: true, 
      // useCreateIndex: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => { 
      console.log(`Mongodb is running`);
    });
  const store = new MongoDBSession({
    uri: MongoURI,
    collection: "MYSession",
  });

  app.use(
    methodOverride("_method", {
      methods: ["POST", "GET"],
    })
  );

  app.use(bodyParser.json());
  // app.use(express.urlencoded({ extended: false }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());

  
  app.use(express.static(path.join(__dirname, "public")));
  app.use(cors());
  app.use(
    session({ 
      secret: "secret",
      saveUninitialized: false,
      store: store,
      resave: false,

      cookie: {
        httpOnly: true,
        maxAge: sessionValues.session_time,
        sameSite: "strict",
      },
    })
  );


  app.use("/file", require('./router/file'))
  app.use("/todo", require('./router/todo'))


  const port = 5057;   
app.listen(port, () => {
  console.log(`Server is running in ${port}`);
});