import mongoose from "mongoose";
const { Schema } = mongoose;

const tweetSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    likes: {
      type: Number,
    },
    noOfRetweets: {
      type: Number,
    },
    comment: {
      type: String,
    },
  });
  
const Tweet = mongoose.model("Tweet2",tweetSchema);
export default Tweet;  