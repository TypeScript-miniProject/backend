import {Router,Request, Response } from 'express';
import Posts from '../models/posts'

const router = Router();

router.post('/',async (req:Request, res:Response) => {
    try {
        const {title,content} = await req.body;
        await Posts.create({title:"title", content:"content"});
    }catch (error){
        console.log(error);
    }
});

export default router;
