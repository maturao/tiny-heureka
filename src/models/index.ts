export type CategoryModel = {
  categoryId: string;
  title: string;
};

export type ProductModel = {
  productId: string;
  title: string;
  categoryId: string;
};

export type OfferModel = {
  offerId: string;
  productId: string;
  title: string;
  description: string;
  url: string;
  imgUrl: string;
  price: string;
};

export type CountModel = [
  {
    count: string;
  }
];
