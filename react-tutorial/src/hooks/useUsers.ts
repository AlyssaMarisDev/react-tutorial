import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);

    const { request, cancel } = userService.getAll();

    request
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err: any) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, []);

  return { users, isLoading, error, setUsers, setError };
};

export default useUsers;
