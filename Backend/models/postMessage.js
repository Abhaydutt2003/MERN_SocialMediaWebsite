import mongoose from "mongoose";
const Schema = mongoose.Schema;

//MongoDb always creates an index for _id, which can be further used in react
const PostSchema = new Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,//will convert file to a string using base64
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
});

export default mongoose.model("PostMessage",PostSchema);