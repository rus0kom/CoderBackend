import mongoose from 'mongoose';
import { MONGO_ATLAS, MONGO_LOCAL, NODE_ENV } from '../config/config.js';

export let mongoUrl;

(NODE_ENV === 'development') ? mongoUrl = MONGO_ATLAS : mongoUrl = MONGO_LOCAL;

export const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connect = async () => mongoose.connect(mongoUrl, mongoOptions);

export default connect;