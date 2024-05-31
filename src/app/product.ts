import { Period } from './period';
import { Category } from './category';

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
