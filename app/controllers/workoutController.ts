import { Router, Request, Response, NextFunction } from "express";
import { getWorkouts } from "../services/workoutService";

const router = Router();

router.get("/workouts", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const workouts = await getWorkouts();
    res.render('partials/workouts.html', { workouts });
    console.log(workouts);
  } catch (err) {
    next(err);
  }
})

export default router;