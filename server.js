const express = require("express")
const cors = require("cors")
const cookieParser = require('cookie-parser');
const jwt = require("jsonwebtoken")

const app = express()
const port = 8000

app.use(cors({credentials: true, origin: '*'}));
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

require("./config/mongoose.config")
require('dotenv').config();

const authorRoutes = require('./routes/user.routes') // name isn't used anywhere else
authorRoutes(app)

app.listen(port, () => console.log(`EXPRESS LISTENING ON ${port}`))