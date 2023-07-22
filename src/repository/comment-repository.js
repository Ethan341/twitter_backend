import Commnet from "../models/comment.js";

class CommnetRepository extends CRUDRepository{ 
  constructor(){
    super(Like);
  }
}

export default CommnetRepository;