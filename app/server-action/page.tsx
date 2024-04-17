import { createUser, getAllUsers } from "@/db/db";
import { revalidatePath } from "next/cache";

async function addUser(formData: FormData) {
  "use server";
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  await createUser({ name, email });
  revalidatePath("/server-action");
}

async function UsersList() {
  const users = await getAllUsers();

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name}: {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

async function UserAddForm() {
  return (
    <form className="p-8" action={addUser}>
      <label className="block">
        <span className="text-lg font-semibold">Name</span>
        <input
          type="text"
          name="name"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </label>
      <label className="block mt-4">
        <span className="text-lg font-semibold">Email</span>
        <input
          type="email"
          name="email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </label>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Add User
      </button>
    </form>
  );
}

export default async function ServerActionPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold">Server Action Page</h1>

      <div className="flex justify-around">
        <UserAddForm />
        <UsersList />
      </div>
    </div>
  );
}
