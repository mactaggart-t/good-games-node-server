import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import session from 'express-session'
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
                          || 'mongodb://localhost:27017/goodgames'
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(session({
                    secret: 'change to env var',
                    resave: false, saveUninitialized: true,
                    cookie: {secure: false}
}))
app.use(express.json());
import UserController
    from "./controllers/users/users-controller.js"
UserController(app)
app.listen(process.env.PORT || 4000);