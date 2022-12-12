import reviewsModel from "./reviewsModel.js";

export const findAllReviewsFor = async (gameID) => await reviewsModel.find({gameID: gameID})

export const addReview = async (review) => await reviewsModel.create(review)

export const deleteReview = async (reviewID) => await reviewsModel.findOneAndRemove({_id: reviewID})