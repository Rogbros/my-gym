import prisma from "../database/prismaClient";

export async function getWorkouts() {
  const workouts = await prisma.workout.findMany();
  return workouts;  
}

export async function addWorkout(workout) {
  const newWorkout = await prisma.workout.create({ data: workout })
  return newWorkout;
}