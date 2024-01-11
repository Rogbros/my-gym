import { Router, Request, Response, NextFunction } from "express";
import { getWorkouts } from "../services/workoutService";

const router = Router();

router.get("/workouts", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const workouts = await getWorkouts();
    res.render("pages/workouts/index.html", { workouts });
    console.log(workouts);
  } catch (err) {
    next(err);
  }
});

router.get("/workouts/new", async (req: Request, res: Response, next: NextFunction) => {
  res.render("pages/workouts/new.html");
});

router.post("/workouts/new", async(req: Request, res: Response, next: NextFunction) => {
  console.log(req);
  res.render("pages/workouts/new.html");
})

export default router;