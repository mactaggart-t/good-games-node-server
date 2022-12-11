import mongoose from 'mongoose';
const followersSchema = mongoose.Schema({
                                        following: {type: String, required: true},
                                        follower: {type: String, required: true}
                                    }, {collection: 'followers'});
export default followersSchema;