import TweetService from "../services/tweet-service";

const tweetService = new TweetService();

export const createTweet = async(req,res)=>{
    try{
        const data = req.body;
        const response = await tweetService.createTweet(data);
        return res.status(201).json({
            success : true,
            message : "Tweet created successfully",
            data : response,
            err:{}
        })
    }catch(error){
        throw res.status(500).json({
            success : false,
            message : "Tweet creatation Failed",
            data : response,
            err:{}
        })
    }
}

export const getTweet = async(req,res)=>{
    try{
        const id = req.params.id;
        const response = await tweetService.getTweet(id);

        return res.status(201).json({
            success : true,
            message : "Tweet fetched successfully",
            data : response,
            err:{}
        })
    }catch(error){
        throw res.status(500).json({
            success : false,
            message : "Tweet fetched Failed",
            data : response,
            err:{}
        })
    }
}