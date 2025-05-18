import HttpService, { Entity } from "./http-service";

const apiEndpoint = "/users";

export interface User extends Entity {
  name: string;
  email: string;
}

class UserService extends HttpService<User> {
  constructor() {
    super(apiEndpoint);
  }
}

export default new UserService();
