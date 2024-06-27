//Types and interfaces that are used across the components

interface CardTypesData {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  category?: string;
}
type FetchData = CardTypesData[] | null;

interface Slug {
  params: {
    slug: number;
  };
}
interface FetchProductData {
  id: number;
  title: string;
  brand: string;
  price: number;
  description: string;
  images: string[];
  category: string;
}
export type { CardTypesData, FetchData, Slug, FetchProductData };
