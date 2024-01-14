import prisma from "../database/prismaClient";

export async function getUser(id: number) {
  const user = await prisma.user.findUnique({ where: { id } });
  return user;
}