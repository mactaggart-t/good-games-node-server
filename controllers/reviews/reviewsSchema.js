import mongoose from 'mongoose';
const reviewsSchema = mongoose.Schema({
                                          review: {type: String, required: true},
                                          rating: {type: Number, required: true},
                                          username: {type: String, required: true},
                                          gameID: {type: String, required: true}
                                        }, {collection: 'reviews'});
export default reviewsSchema;