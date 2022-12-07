import usersModel from "./userModel.js";

export const createUser = async (user) => {

}
export const findUserByUsername = async (username) => {

}
export const findUserByCredentials = async ({username, password}) => {
    return usersModel.findOne({username, password});
}
export const findAllUsers = async () => {

}
export const deleteUser = async (userID) => {

}
export const updateUser = async (userID, newUser) => {

}