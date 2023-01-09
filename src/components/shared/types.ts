export enum SelectedPage {
  Home = "home",
  Services = "services",
  Products = "products",
  contactUs = "contactus",
}

export interface ServiceType {
  icon: JSX.Element;
  title: string;
  description: string;
}
export interface ProductType {
  image: string;
  name: string;
  price: string;
  category: string;
}
