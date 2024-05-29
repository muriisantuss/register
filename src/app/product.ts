import { Category } from "./category";
import { Period } from "./period";

export interface Product {
  id: number;
  name: string;
  categoryId: number;
  description: string;
  price: string;
  quantity: number;
  active: boolean;
  period: Period;
}
