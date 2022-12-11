import * as userDao from './userDao.js'
import {updateUser} from "./userDao.js";

const UserController = (app) => {
    app.post('/api/login', login);
    app.post('/api/logout', logout);
    app.post('/api/profile', profile);
    app.post('/api/signup', signup);
    app.post('/api/update', update)
}

const login = async (req, res) => {
    const credentials = req.body
    const existingUser = await userDao.findUserByCredentials(credentials)
    if (existingUser) {
        req.session['currentUser'] = existingUser
        res.json(existingUser)
        return
    }
    res.sendStatus(403)
}


const logout = async (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
}


const profile = async (req, res) => {
    const username = req.body.username
    const user = await userDao.findUserByUsername(username)
    res.json({user: user})
}


const signup = async (req, res) => {
    const user = {...req.body, email: '', firstName: '', lastName: ''}
    const existingUser = await userDao.findUserByUsername(user.username)
    if (existingUser) {
        res.sendStatus(403)
        return
    }

    const currentUser = await userDao.createUser(user)
    req.session['currentUser'] = currentUser
    res.json(currentUser)
}

const update = async (req, res) => {
    const newUser = req.body;
    const existingUser = await userDao.findUserByUsername(newUser.username)
    if (!existingUser) {
        res.sendStatus(403)
        return
    }
    await updateUser(newUser.username, newUser)
    req.session['currentUser'] = newUser
    res.json({user: newUser})
}

export default UserController