import {Router,Request, Response } from 'express';

const router = Router();


router.post('/',async (req:Request, res:Response) => {
    try {
        const {title,content} = await req.body;
        console.log(title,content);
    }catch (error){
        console.log('ERROR');
    }
});

export default router;
