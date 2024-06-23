export type CardTypesData = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  category?: string;
};
export type FetchData = CardTypesData[] | null;
