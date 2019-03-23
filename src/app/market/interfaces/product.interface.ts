export interface IProductBase {
  title: string;
  description: string;
  photo: string;
  price: number;
  amount: number;
  type: string;
}

export interface IProduct extends IProductBase {
  id: number;
}

export interface ICart extends IProduct {
  amountInCart: number;
}
