import { UserAddress } from "src/app/Core/Models/user-address";

export interface Iuser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isActive: boolean;
  balance: number;
  role: string;
  phone: string;
  addresses: UserAddress[];
}
