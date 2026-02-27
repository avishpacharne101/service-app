import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "electrician", "plumber", "carpenter", "painter", "gardener", "cleaner"],
        default: "user"
    }
});


const User = mongoose.model("User", userSchema);

export default User;