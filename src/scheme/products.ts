export type Product = {
  id: string;
  description: string;
  hotsale: boolean;
  imgs: string[] | string;
  options: string[] | string;
  title: string;
  price: number;
  categorie: string;
};

export type NewProductType = Omit<Product, 'id' | 'imgs'>;
