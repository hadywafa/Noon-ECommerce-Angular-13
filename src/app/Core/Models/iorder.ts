import { Iorderitem } from "./iorderitem";
export interface Iorder {
  id: number;
  deliveryStatus: string;
  deliveryStatusDescription: string;
  totalPrice: number;
  orderItems: Iorderitem[];
}
