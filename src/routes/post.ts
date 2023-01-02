import {Router,Request, Response } from 'express';
import Posts from '../models/posts'

const router = Router();

router.post('/',async (req:Request, res:Response) => {
    try {
        const {title,content} = req.body;
        await Posts.create({title, content});
    }catch (error){
        console.log(error);
    }
});

export default router;
