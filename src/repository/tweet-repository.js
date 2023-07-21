import Tweet from "../models/tweet.js";

class TweetRepository{ // To perform CRUD operations on Tweets

  async create(data){
    try{
        let tweet = await Tweet.create(data);
        return tweet;
    }catch(error){
        console.log(error);
        throw error;
    }
  }
  
  async getAllTweets(data){ 
    try{
        let tweets = await Tweet.find(data);
        return tweets;
    }catch(error){
        console.log(error);
        throw error;
    }
  } 

  async deleteTweet(data){
    try{
        let tweet = await Tweet.deleteOne(data);
        return  tweet;
    }catch(error){
        console.log(error);
        throw error
    }
  }

  
}

export default TweetRepository;