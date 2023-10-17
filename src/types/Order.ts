export type Order = {
  id: number;
  userId: number;
  productIds?: number[] | ProductId[];
};

type ProductId = {
  id: number;
};