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


const logout = (req, res) => {
}


const profile = (req, res) => {
}


const signup = (req, res) => {
}

export default UserController