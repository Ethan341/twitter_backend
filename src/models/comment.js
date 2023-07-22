import mongoose from "mongoose";
const { Schema } = mongoose;

const commentSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId
    },
    comment: {
      type: String,
    },
    onModel: {
        type:String,
        required: true,
        enum: ["Tweet","Comment"]
    },
    commentable: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'
    }
  });
  
const Commnet = mongoose.model("Tweet",commentSchema);
export default Commnet;  