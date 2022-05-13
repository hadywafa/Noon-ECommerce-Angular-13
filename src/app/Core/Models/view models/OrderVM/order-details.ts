import { DeliveryStatus } from "src/app/Core/Enums/delivery-status";
import { IProduct } from "../../iproduct";

export interface OrderDetails {


id:number,
deliveryStatus:DeliveryStatus,
deliveryStatusDescription:string,
totalPrice:number,
products:IProduct[]



}
