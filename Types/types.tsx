export type SignupValueType = {
  id?: number;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
};

export type LoginType = {
  email: string;
  password: string;
};

export type ProductType = {
  id?: number;
  name: string;
  category: string;
  image: string;
  price: string;
};

export type CartType = {
  id?: number;
  name: string;
  category: string;
  image: string;
  price: string;
  quantity?: number | null | undefined;
  userName: string | undefined;
};
