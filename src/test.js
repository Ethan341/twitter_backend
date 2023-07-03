import Hashtag from './models/hashtag.js';
import Tweet from './models/tweet.js';

export function test(){
    console.log("Test Code is Running");
    //createTweet();
    createHashtag();
}

function createTweet(){
    Tweet.create({
        content : "Hello There This is first tweet",
        likes : 3,
        noOfRetweets : 2,
        Comment : "Hii There"
      }).then((resoonse)=>{
        console.log("Received response is",resoonse)
      })
}

function createHashtag(){
    Hashtag.create({
        text: "travel",
        tweets: ['6496dbaf794c0949895245c1']
    })
}