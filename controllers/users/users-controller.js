import * as userDao from './userDao.js'

const UserController = (app) => {
    app.post('/api/login', login);
    app.post('/api/logout', logout);
    app.post('/api/profile', profile);
    app.post('/api/signup', signup);
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
}


const signup = async (req, res) => {
    const user = req.body
    const existingUser = await userDao.findUserByUsername(user.username)
    if (existingUser) {
        res.sendStatus(403)
        return
    }
    const currentUser = await userDao.createUser(user)
    req.session['currentUser'] = currentUser
    res.json(currentUser)
}

export default UserController