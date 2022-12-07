import mongoose from 'mongoose';
import usersSchema from './userSchema.js'
const usersModel = mongoose
    .model('usersModel', usersSchema);
export default usersModel;