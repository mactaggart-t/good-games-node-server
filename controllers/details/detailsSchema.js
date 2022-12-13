import mongoose from 'mongoose';
const detailsSchema = mongoose.Schema({

                                          gameID: {type: String, required: true},
                                          username: {type: String, required: true},
                                          lastViewed: {type: Date, required: true}
                                        }, {collection: 'details'});
export default detailsSchema;