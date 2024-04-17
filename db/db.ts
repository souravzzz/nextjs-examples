import { User, Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(user: User) {
  return await prisma.user.create({ data: user });
}

export async function getUser(id: number) {
  return await prisma.user.findUnique({ where: { id } });
}

export async function getAllUsers() {
  return await prisma.user.findMany();
}

export async function createPost(post: Post) {
  return await prisma.post.create({ data: post });
}

export async function getPost(id: number) {
  return await prisma.post.findUnique({ where: { id } });
}

export async function getAllPosts() {
  return await prisma.post.findMany();
}
