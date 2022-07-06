// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

const cors=require('cors')

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const capitalized = require("./utils/capitalized");
const projectName = "project";

app.locals.appTitle = `${capitalized(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const index = require("./routes/index.routes");
app.use("/", index);

const userRoutes = require("./routes/user.routes");
app.use("/user", userRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const countryRoutes = require("./routes/country.routes");
const { collection } = require("./models/User.model");
app.use("/country", countryRoutes);

//Autocomplete?
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get("/search", async(req,res)=>{
    try{
        let result = await collection.aggregate([
            {
                "$Search":{
                    "autocomplete":{
                        "query": `${request.query.query}`,
                        "path": "name.common",
                        "fuzzy": {
                            "maxEdits": 2,
                            "prefixLength": 3
                        }
                    }
                }
            }
        ]).toArray()
        this.response.send(result)
      } catch (error){
          response.status(500).send({message: error.message})
      }
})

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
