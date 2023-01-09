import React from "react";
import { SelectedPage } from "../shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Service = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <div className="mt-5 rounded-sm border-2 border-gray-50 px-5 py-16 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-300 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>

      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-primary-300"
        onClick={() => setSelectedPage(SelectedPage.contactUs)}
        href={`#${SelectedPage.contactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </div>
  );
};

export default Service;
