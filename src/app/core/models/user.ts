export interface IUser {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}

export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;

  constructor(user: IUser ) {
    this.id = user.id;
    this.username = user.username;
    this.password = user.password;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
  }
}
