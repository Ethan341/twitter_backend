import express from "express";

const router = express.Router();

router.post('/tweets',()=>{
    console.log("Request Received");
})

export default router;