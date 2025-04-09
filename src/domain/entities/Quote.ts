export interface Quote {
  client: string;
  products: Array<{
    name: string;
    price: number;
  }>;
  total: number;
  date: Date;
}
