import mongoose from 'mongoose';

const schema = new mongoose.Schema ({
    id: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: String,
    lastname: String,
    image: { type: String }
});

mongoose.set('strictQuery', false);

const UserSchema = new mongoose.Schema(schema, { driver: mongoose.ObjectId });
const Users = mongoose.model('users', UserSchema);

export default Users;