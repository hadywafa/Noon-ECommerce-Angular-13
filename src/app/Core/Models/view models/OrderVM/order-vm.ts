import { DeliveryStatus } from 'src/app/Core/Enums/delivery-status';

export interface OrderVM {
  id: number;
  deliveryStatus: DeliveryStatus;
  totalPrice: number;
  orderDate: any;
}
