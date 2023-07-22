import Hashtag from "../models/hashtag.js";
import CRUDRepository from "./crud-repository.js";

class HashtagRepository extends CRUDRepository{ // To perform CRUD operations on Tweets
  constructor(){
    super(Hashtag);
  }
  async create(data){
    try{
        let Hashtag = await Hashtag.create(data);
        return Hashtag;
    }catch(error){
        console.log(error);
        throw error;
    }
  }

  async bulkCreate(data){
    try{
        let hashTags = await Hashtag.insertMany(data);
        return hashTags;
    }catch(error){
        console.log(error);
        throw error;
    }
  }
 

  async deleteHashtag(data){
    try{
        let Hashtag = await Hashtag.deleteOne(data);
        return  Hashtag;
    }catch(error){
        console.log(error);
        throw error
    }
  }

  async getHashtagByName(data){
    try{
        let hashtag = await Hashtag.findOne(data);
        return hashtag;
    }catch(error){
        console.log(error);
        throw error;
    }
  }
}

export default HashtagRepository;