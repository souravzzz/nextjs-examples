import { User } from "@prisma/client";

type UserListProps = {
  users: User[];
};

export default function UserList({ users }: UserListProps) {
  return (
    <div className="mt-8 w-1/2 bg-red-50 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Users</h2>
      <table className="mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
