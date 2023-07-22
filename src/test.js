import Hashtag from './models/hashtag.js';
import Tweet from './models/tweet.js';
import TweetRepository from './repository/tweet-repository.js';
import TweetService from './services/tweet-service.js';

export async function test(){


    let tweetService = new TweetService()
    tweetService.createTweet({
        content : "Hello There This is #first tweet",
        likes : 3,
        noOfRetweets : 2,
        Comment : "Hii There"
      })
    // console.log("Test Code is Running");
    // const tweetRepo = new TweetRepository();
    // let tweetsCollection = await tweetRepo.getAllTweets()
    //let tweet = await tweetRepo.deleteTweet({_id:'64a304c2fe8afd832f58fb77'});
    //console.log(tweet);
    //console.log(tweetsCollection);
    //createTweet();
    //createHashtag();
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