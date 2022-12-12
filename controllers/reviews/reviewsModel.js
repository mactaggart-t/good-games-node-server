import mongoose from 'mongoose';
import reviewsSchema from './reviewsSchema'
const reviewsModel = mongoose
    .model('reviewsModel', reviewsSchema);
export default reviewsModel;