import mongoose from "mongoose";

const userCollection = 'users';

const userSchema = new mongoose.Schema({
    username: { 
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
    password: { 
        type: String, 
        require: true 
    }
}, {
    timestamps: true
});

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;