export type CardTypesData = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  category?: string;
};
export type FetchData = CardTypesData[] | null;

export type Slug = {
  params: {
    slug: number;
  };
};
export type FetchProductData = {
  title: string;
  brand: string;
  price: number;
  description: string;
  images: string[];
  category: string;
};
