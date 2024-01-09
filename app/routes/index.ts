import { Router, Request, Response } from "express";

import workouts from "../controllers/workoutController";

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.render('pages/dashboard.html', {message: 'Welcome to my life'});
});

router.use(workouts);

export default router;