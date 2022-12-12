import * as reviewsDao from './reviewsDao.js'

const ReviewsController = (app) => {
    app.get('/api/reviews/:gameID', getReviews)
    app.get('/api/rating/:gameID', getRating)
    app.post('/api/review', addReview)
    app.delete('/api/review/:reviewID', deleteReview)
}

const getReviews = async (req, res) => {
    const gameID = req.params.gameID
    const reviews = await reviewsDao.findAllReviewsFor(gameID)
    res.json(reviews)
}
const getRating = async (req, res) => {
    const gameID = req.params.gameID
    const reviews = await reviewsDao.findAllReviewsFor(gameID)
    let totalRating = 0;
    for (const review of reviews) {
        totalRating += review.rating
    }
    const averageRating = totalRating / reviews.length
    res.json(averageRating)
}
const addReview = async (req, res) => {
    const reviewInfo = req.body
    const response = await reviewsDao.addReview(reviewInfo)
    res.json(response)
}
const deleteReview = async (req, res) => {
    const reviewID = req.params.reviewID
    const review = await reviewsDao.deleteReview(reviewID)
    res.json(review)
}

export default ReviewsController