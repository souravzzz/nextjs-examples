import { getAllUsers } from "@/db/db";

export async function GET() {
  const users = await getAllUsers();
  return Response.json(users);
}
