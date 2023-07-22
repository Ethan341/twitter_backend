import HashtagRepository from "../repository/hashtag-repository.js"; 
import TweetRepository from "../repository/tweet-repository.js";

class TweetService{
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async createTweet(data){
        let tags = data.content.match(/#\w+/g).map((tagName)=>{ return tagName.substring(1).toLowerCase()});
        console.log("Hashtags are " + tags);
        let tweet = await this.tweetRepository.create(data);
        console.log("Tweet created",tweet);
        let requestData = {text : tags};
        let alreadyPresentTags = await this.hashtagRepository.getHashtagByName(requestData);
        console.log("Tags alreadyPresentTags   = "+alreadyPresentTags);
        // let textNameOfAlreadyPresentTags = alreadyPresentTags.map((tag)=> { return tags.text})
        // let newTags = tags.filter((tagName)=>{ return textNameOfAlreadyPresentTags.includes(tagName)});
        // newTags = newTags.map(tag => {
        //     return {
        //         text : tag,
        //         tweets: [tweet.id]
        //     }
        // })
        // await this.hashtagRepository.bulkCreate(newTags);

        // alreadyPresentTags.forEach((hashtag)=>{
        //     hashtag.tweet.push(tweet.id);
        //     hashtag.save();
        // })
        return tweet;
    }

    async getTweet(tweetId){
        const tweet = await this.tweetRepository.getTweet(tweetId)
        return tweet;
    }
}

export default TweetService;

// {
//     content : "Hello There This is first tweet",
//     likes : 3,
//     noOfRetweets : 2,
//     Comment : "Hii There"
//   } 