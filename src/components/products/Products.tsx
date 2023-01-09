import React from "react";
import { SelectedPage, ProductType } from "../shared/types";
import { motion } from "framer-motion";
import Heading from "../shared/Heading";
import { sportsProducts } from "./sportsProducts";
import { clothesProducts } from "./clothesProducts";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Products = ({ setSelectedPage }: Props) => {
  return (
    <section id="products" className="w-full z-10 py-24 bg-secondary-500">
      <motion.div>
        <div className="mx-auto w-5/6">
          <div className="md:w-3/5">
            <Heading>FEATURED PRODUCTS.</Heading>
            <p className="py-5 text-sm">
              The following are top trending products selection from the store.
            </p>
          </div>

          {/* products */}
          <div className="w-full my-4 grid lg:grid-cols-2 gap-10">
            {/* sports */}

            <div className="productMain">
              {sportsProducts &&
                sportsProducts.map((product) => (
                  <div className="products">
                    <div className="">
                      <img
                        src={product.image}
                        className="productImage"
                        alt=""
                      />
                    </div>
                    <div className="productDesc">
                      <h1>{product.name}</h1>
                      <p>{`$${product.price}`}</p>
                    </div>
                  </div>
                ))}
            </div>

            {/* mens/women wear */}

            <div className="productMain">
              {clothesProducts &&
                clothesProducts.map((product) => (
                  <div className="products">
                    <div className="">
                      <img
                        src={product.image}
                        className="productImage"
                        alt=""
                      />
                    </div>
                    <div className="productDesc">
                      <h1>{product.name}</h1>
                      <p>{`$${product.price}`}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Products;
