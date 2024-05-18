import { Category } from "./category";

export interface Product {
  id: number;
  name: string;
  category: Category;
  description: string;
  price: string;
  quantity: number;
}
