export type Category = {
  id: string;
  name: string;
  description: string | null;
  image: string;
  createdAt: string;
  updatedAt: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  images: string[] | null;
  price: number;
  slug: string;
  createdAt: string;
  updatedAt: string;
  category: Category;
};

