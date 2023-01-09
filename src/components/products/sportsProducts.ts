import { ProductType } from "../shared/types";
import jacket from "../../assets/arsenal-removebg-preview.png";
import predator from "../../assets/predator-removebg-preview.png";
import puma from "../../assets/puma-removebg-preview.png";
import speed from "../../assets/speed.jpeg";
import manCity from "../../assets/man-city-removebg-preview.png";
import trainer from "../../assets/trainer-removebg-preview.png";
import tennis from "../../assets/basket-removebg-preview.png";
import ball from "../../assets/football.png";
import gym from "../../assets/mercurial-removebg-preview.png";

export const sportsProducts: Array<ProductType> = [
  {
    image: jacket,
    name: "Arsenal Jersey",
    price: "12",
    category: "sports",
  },
  {
    image: predator,
    name: "Adidas predator",
    price: "32",
    category: "sports",
  },
  {
    image: speed,
    name: "Adidas Speed Portal",
    price: "45",
    category: "sports",
  },
  {
    image: puma,
    name: "Puma boots",
    price: "20",
    category: "sports",
  },

  {
    image: manCity,
    name: "Man City Jersey",
    price: "15",
    category: "sports",
  },
  {
    image: trainer,
    name: "Nike Trainer",
    price: "20",
    category: "sports",
  },
  {
    image: gym,
    name: "Nike Mercurial",
    price: "10",
    category: "sports",
  },
  {
    image: tennis,
    name: "Basket Ball",
    price: "40",
    category: "sports",
  },
  {
    image: ball,
    name: "Football leather",
    price: "20",
    category: "sports",
  },
];
