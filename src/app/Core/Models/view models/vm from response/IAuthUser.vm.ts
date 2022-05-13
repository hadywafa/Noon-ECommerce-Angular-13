export interface IAuthUser {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  message: string;
  roles: string[];
  token: string;
  isAuthenticated: boolean;
  role: string;
  expiresOn: Date;
}
