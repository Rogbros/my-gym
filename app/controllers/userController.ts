import { Router, Request, Response, NextFunction } from "express";

const router = Router();

router.get("/login", (req: Request, res: Response, next: NextFunction) => {
  res.render("pages/authenticate/login.html");
})

export default router;