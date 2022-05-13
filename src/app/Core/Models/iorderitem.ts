import { IProduct } from "./iproduct";
export interface Iorderitem {
  quantity: number;
  price: number;
  product: IProduct;
}
