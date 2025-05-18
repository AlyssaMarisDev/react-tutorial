import userService, { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

function App() {
  const { users, isLoading, error, setUsers, setError } = useUsers();

  const handleDelete = (userId: number) => {
    const originalUsers = [...users];

    setUsers(users.filter((u) => u.id !== userId));

    const { request } = userService.delete(userId);

    request.catch((err: any) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = {
      id: 0,
      name: "Alyssa",
      email: "alyssa@example.com",
      phone: "1234567890",
    };

    setUsers([newUser, ...originalUsers]);

    const { request } = userService.create(newUser);

    request
      .then(({ data: savedUser }) => {
        setUsers([savedUser, ...originalUsers]);
      })
      .catch((err: any) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };

    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    const { request } = userService.update(updatedUser);

    request.catch((err: any) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary m-3" onClick={addUser}>
        Add User
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div className="btn-group">
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
