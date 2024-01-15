import { Router, Request, Response, NextFunction } from "express";
import { getWorkouts, createWorkout } from "../services/workoutService";
import { getUser } from "../services/userService";
import { body, validationResult } from "express-validator";

const router = Router();

router.get("/workouts", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const workouts = await getWorkouts();
    res.render("pages/workouts/index.html", { workouts });
  } catch (err) {
    next(err);
  }
});

router.get("/workouts/new", async (req: Request, res: Response, next: NextFunction) => {
  res.render("pages/workouts/new.html");
});

router.post("/workouts/new", body('name').notEmpty() ,async(req: Request, res: Response, next: NextFunction) => {
  try {
    const validation = validationResult(req);
    console.log(validation);
    if(!validation.isEmpty()) {
      throw({ message: "Please enter a name for a workout" });
    }
    const user = await getUser(1);
    const body = { ...req.body, userId: user.id };
    if(body.workoutDate) {
      body.workoutDate = new Date(body.workoutDate).toISOString();
    }
    const workout = await createWorkout(body);
    res.render("pages/workouts/new.html");
  } catch (err) {
    next(err);
  }
  
})

export default router;