import mongoose from 'mongoose';
import detailsSchema from './detailsSchema.js'
const detailsModel = mongoose
    .model('detailsModel', detailsSchema);
export default detailsModel;