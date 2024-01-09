import prisma from "../database/prismaClient";

export async function getWorkouts() {
  const workouts = await prisma.workout.findMany();
  return workouts;  
}