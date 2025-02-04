import mongoose from "mongoose";

const Feedback_Schema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name is required"]
    },
    content:{
        type:String,
        required:[true,"Content required"]
    }
})

const FeedBack = mongoose.models.Feedback || mongoose.model("Feedback", Feedback_Schema);
export default FeedBack