import usersModel from "./userModel.js";

export const createUser = async (user) =>
    await usersModel.create(user)

export const findUserByUsername = async (username) =>
    await usersModel.findOne({username})


export const findUserByCredentials = async ({username, password}) =>
    await usersModel.findOne({username, password})

export const findAllUsers = async () => await usersModel.find()


export const deleteUser = async (userID) => {

}
export const updateUser = async (userID, newUser) => {

}