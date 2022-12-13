import * as followersDao from './followersDao.js'
import * as usersDao from '../users/userDao.js'

const FollowersController = (app) => {
    app.post('/api/followers', getFollowers)
    app.post('/api/following', getFollowing)
    app.post('/api/follow', addFollower)
    app.delete('/api/unfollow/:usernames', removeFollower)
}

const getFollowers = async (req, res) => {
    const username = req.body.username
    const followers = await followersDao.findFollowersFor(username)
    const players = []
    for (let follower of followers) {
        const userModel = await usersDao.findUserByUsername(follower.follower)
        players.push(userModel)
    }
    res.json(players)
}

const getFollowing = async (req, res) => {
    const username = req.body.username
    const followers = await followersDao.findFollowingFor(username)
    const players = []
    for (let follower of followers) {
        const userModel = await usersDao.findUserByUsername(follower.following)
        players.push(userModel)
    }
    res.json(players)
}

const addFollower = async (req, res) => {
    const {follower, following} = req.body
    await followersDao.addFollower(follower, following)
    const newFollower = await usersDao.findUserByUsername(follower)
    res.json(newFollower)
}

const removeFollower = async (req, res) => {
    const usernames = JSON.parse(req.params.usernames)
    const follower = usernames.currentUser
    const following = usernames.username
    const removed = await followersDao.removeFollower(follower, following)
    res.json(removed)
}

export default FollowersController