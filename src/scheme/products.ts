export type Product = {
  id: string;
  description: string;
  hotsale: boolean;
  imgs: string[];
  options: string[];
  title: string;
  price: number;
  categorie: string;
};

export type NewProductType = Omit<Product, 'id' | 'imgs'>;
