import detailsModel from "./detailsModel.js";

export const findDetailsFor = async (username) => await detailsModel.find({username: username})

export const addDetails = async (gameID, username, lastViewed) => await detailsModel.create({gameID, username, lastViewed})

export const updateDetails = async (gameID, username, lastViewed) => {
    const filter = {gameID: gameID, username: username}
    const update = {lastViewed: lastViewed}
    await detailsModel.findOneAndUpdate(filter, update)
}

export const getDetailsPair = async (username, gameID) => await detailsModel.findOne({username: username, gameID: gameID})