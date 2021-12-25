import mongoose from "mongoose";
import { Timestamp } from "bson";

const komentars = mongoose.Schema({
    reqID: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
    userID: {
        type: Number,
        require: true
    },
    postID: {
        type: Number,
        require: true
    }
}, {
    timestamps: true,
});
export default mongoose.model("komentars", komentars);