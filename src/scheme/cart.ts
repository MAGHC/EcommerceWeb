import { Product } from './products';

export type AddCartT = Omit<Product, 'options'> & {
  options: string;
};
