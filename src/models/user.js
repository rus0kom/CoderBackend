import mongoose from "mongoose";
const bcrypt = require('bcryptjs');

const userCollection = 'users';

const userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true }
}, {
    timestamps : true
});

userSchema.methods.encrypPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

userSchema.methods.matchPassword = function(password) {
    return bcrypt.compare(password, this.password);
}

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;