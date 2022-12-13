import * as detailsDao from './detailsDao.js'

const DetailsController = (app) => {
    app.get('/api/details/:username', getDetails)
    app.post('/api/details', addDetails)
}

const getDetails = async (req, res) => {
    const username = req.params.username
    const details = await detailsDao.findDetailsFor(username)
    res.json(details)
}

const addDetails = async (req, res) => {
    const detail = req.body
    const exists = await detailsDao.getDetailsPair(detail.username, detail.gameID)
    if (exists) {
        await detailsDao.updateDetails(detail.gameID, detail.username, detail.lastViewed)
    }
    else {
        await detailsDao.addDetails(detail.gameID, detail.username, detail.lastViewed)
    }
    const updatedDetails = await detailsDao.findDetailsFor(detail.username)
    res.json(updatedDetails)
}


export default DetailsController