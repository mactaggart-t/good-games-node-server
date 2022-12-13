import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import session from 'express-session'
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4,
}
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
                          || 'mongodb://localhost:27017/goodgames'
mongoose.connect(CONNECTION_STRING, options);
const app = express()
app.use(cors({
                 credentials: true,
                 origin: 'http://localhost:3000'}))
app.use(session({
                    secret: 'change to env var',
                    resave: false, saveUninitialized: true,
                    cookie: {secure: false}
}))
app.use(express.json());
import UserController from "./controllers/users/users-controller.js"
import FollowersController from "./controllers/followers/followers-controller.js";
import ReviewsController from "./controllers/reviews/reviews-controller.js";
import DetailsController from "./controllers/details/details-controller.js";
UserController(app)
FollowersController(app)
ReviewsController(app)
DetailsController(app)
app.listen(process.env.PORT || 4000);