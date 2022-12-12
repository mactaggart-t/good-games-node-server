import mongoose from 'mongoose';
import reviewsSchema from './reviewsSchema.js'
const reviewsModel = mongoose
    .model('reviewsModel', reviewsSchema);
export default reviewsModel;