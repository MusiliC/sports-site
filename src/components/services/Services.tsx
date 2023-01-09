import React from "react";
import {
  ShoppingCartIcon,
  TruckIcon,
  GiftIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { SelectedPage, ServiceType } from "../shared/types";
import Heading from "../shared/Heading";
import Service from "./Service";

const services: Array<ServiceType> = [
  {
    icon: <ShoppingCartIcon className="h-6 w-6" />,
    title: "Sports Equipments Selling",
    description:
      "All sporting equipments are available eg boots, track suits, gym equipments, on field items, and everything needed in all kind of sports",
  },
  {
    icon: <GiftIcon className="h-6 w-6" />,
    title: "Mens and Women wear",
    description:
      "Clothes, shoes, for men and women all brands, all sizes, unique and best in the market",
  },
  {
    icon: <TruckIcon className="h-6 w-6" />,
    title: "Countrywide Delivery",
    description:
      "We offer deliveries all around Kenya after purchasing from us. Sure deliveries and safe transport to all our clients.",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Services = ({ setSelectedPage }: Props) => {
  return (
    <section id="services" className="w-5/6 mx-auto min-h-full py-24 md:py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
      >
        {/* header */}

        <div className="md:my-5 md:w-3/5">
          <Heading>SERVICES WE OFFER</Heading>
          <p className="my-5 text-sm">
            Our organization offers the best services to customer's
            satisfactory. The client's needs is our priority.Below are the main
            services we offer to our clients:
          </p>
        </div>

        {/* SERVICES*/}
        <div className="mt-5 items-center justify-between gap-8 lg:flex">
          {services.map((service: ServiceType) => (
            <Service
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
