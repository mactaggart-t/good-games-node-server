import followersModel from "./followersModel.js";

export const findFollowersFor = async (following) => await followersModel.find({following: following})

export const findFollowingFor = async (follower) => await followersModel.find({follower: follower})

export const addFollower = async (follower, following) => await followersModel.create({follower, following})

export const removeFollower = async (follower, following) => await followersModel.findOneAndRemove({follower, following})