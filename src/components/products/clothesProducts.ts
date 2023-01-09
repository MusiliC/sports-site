import { ProductType } from "../shared/types";
import j1 from "../../assets/j1.jpg";
import airMax from "../../assets/airmax-removebg-preview.png";
import jordanHigh from "../../assets/jordanHigh-removebg-preview.png";
import winterBoots from "../../assets/winter-boots-removebg-preview.png";
import sneakers from "../../assets/sneakers.png";
import summer from "../../assets/collection-removebg-preview.png";
import track from "../../assets/suit.png";
import women from "../../assets/handbag-removebg-preview.png";
import men from "../../assets/men-removebg-preview.png";
import menCasual from "../../assets/men-casual-removebg-preview.png";

export const clothesProducts: Array<ProductType> = [
  {
    image: airMax,
    name: "Nike AirMax",
    price: "35",
    category: "clothes",
  },
  {
    image: sneakers,
    name: "Rubber Sneakers",
    price: "10",
    category: "clothes",
  },

  {
    image: winterBoots,
    name: "Winter Boots",
    price: "20",
    category: "clothes",
  },
  {
    image: jordanHigh,
    name: "AirJordan J1",
    price: "45",
    category: "clothes",
  },
  {
    image: men,
    name: "Mens wear",
    price: "50",
    category: "clothes",
  },
  {
    image: women,
    name: "Dior Handbag",
    price: "60",
    category: "clothes",
  },
  {
    image: track,
    name: "Italian Suit",
    price: "35",
    category: "clothes",
  },
  {
    image: menCasual,
    name: "Men casual wear",
    price: "42",
    category: "clothes",
  },
  {
    image: summer,
    name: "Summer wear",
    price: "35",
    category: "clothes",
  },
];
