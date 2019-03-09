export interface IProduct {
  id: number;
  title: string;
  description: string;
  photo: string;
  price: number;
  amount: number;
  type: string;
}

export interface ICart extends IProduct {
  amountInCart: number;
}
