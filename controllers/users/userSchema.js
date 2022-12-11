import mongoose from 'mongoose';
const usersSchema = mongoose.Schema({
                                        username: {type: String, unique: true, required: true},
                                        password: {type: String, required: true},
                                        email: {type: String, default: ''},
                                        firstName: {type: String, default: ''},
                                        lastName: {type: String, default: ''},
                                        bio: {type: String, default: ''},
                                        favGameID: {type: String, default: ''},
                                        role: {type: String, enum: ['USER', 'ADMIN'], required: true},
                               }, {collection: 'users'});
export default usersSchema;