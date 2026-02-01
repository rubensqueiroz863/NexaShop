export type ProductProps = {
  id: number;
  name: string;
  price: number;
  query: string;
  photo: string;
  width: string;
  quantity: number;
}

export type ProductPageProps = {
  params: Promise<{
    id: number
  }>
}