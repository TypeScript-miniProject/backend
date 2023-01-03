import { Router, Request, Response, NextFunction } from "express";
import Query from "mysql2/typings/mysql/lib/protocol/sequences/Query";
import Posts from "../models/posts";
const router = Router();

router.delete("/:postId", async (req: Request, res: Response) => {
  try {
    const { postId } = req.params;
    console.log(typeof postId);

    const post = await Posts.findByPk(postId);
    if (!post)
      return res.status(404).send(`${postId}번째 post를 찾을 수 없습니다.`);
    await Posts.destroy({ where: { postId } });
    return res.status(200).send(`${postId}번째 post를 삭제했습니다.`);
  } catch (error) {
    console.error(error);
    return res.send(`요청하신 post 삭제에 실패했습니다.`);
  }
});

export default router;
