export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  region: string;
  weight: number;
  flavor_profile: string[];
  grind_option: string[];
  roast_level: number;
  image_url: string;
  stock: number;
}

export interface ProductItem {
  id: number;
  name: string;
  description: string;
  price: number;
  region: string;
  weight: number;
  flavor_profile: string[];
  grind_option: string;
  roast_level: number;
  image_url: string;
  stock: number;
}

export interface FilterOptions {
  grind_options: string[];
  regions: string[];
}