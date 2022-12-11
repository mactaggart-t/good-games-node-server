import usersModel from "./userModel.js";

export const createUser = async (user) =>
    await usersModel.create(user)

export const findUserByUsername = async (username) =>
    await usersModel.findOne({username})


export const findUserByCredentials = async ({username, password, role}) =>
    await usersModel.findOne({username, password, role})

export const findAllUsers = async () => await usersModel.find()


export const deleteUser = async (userID) => {

}
export const updateUser = async (username, newUser) => {
    const filter = {username: username}
    const update = {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        role: newUser.role,
        email: newUser.email
    }
    await usersModel.findOneAndUpdate(filter, update);
}