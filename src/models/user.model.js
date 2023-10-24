import mongoose from "mongoose";

const userCollection = 'users';

const userSchema = new mongoose.Schema({
    first_name: { 
        type: String, 
        require: true,
        trim: true
    },
    last_name: {
        type: String,
        require: true,
        trim: true
    },
    email: { 
        type: String, 
        require: true,
        trim: true,
        unique: true
    },
    age: {
        type: Number,
        require: true
    },
    password: { 
        type: String, 
        require: true 
    },
    cart: {
        type: Array,
        default: []
    },
    role: {
        type: String,
        default: 'user'
    }
}, {
    timestamps: true
});

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;