import { Router, Request, Response, NextFunction } from "express";
import { getWorkouts, createWorkout } from "../services/workoutService";
import { getUser } from "../services/userService";
import { body, validationResult, matchedData } from "express-validator";
import type { newWorkoutData } from "types";

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

const newWorkoutValidator = [
  body('name').notEmpty().trim().escape(),
  body('workoutDate').notEmpty().isISO8601().toDate(),
]

router.post("/workouts/new", newWorkoutValidator, async(req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(req);
    const displayErrors = errors.mapped();
    if(errors.isEmpty()) {
      const data = matchedData(req) as newWorkoutData;
      const user = await getUser(1);
      const body = { ...data, userId: user.id };
      await createWorkout(body);
      res.htmxRedirect("/workouts");
      return;
    }
    res.render("forms/workout_form.html", { errors: displayErrors })
  } catch (err) {
    next(err);
  }
  
})

export default router;