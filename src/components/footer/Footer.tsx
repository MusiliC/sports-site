import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-secondary-500 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2  md:mt-0">
          <h1 className="text-xl font-bold">MARCELO.</h1>
          <p className="my-5">
            Our organization offers the best services to customer's
            satisfactory. The client's needs is our priority. <br />
            Located Nairobi, CBD, opposite Naivas, Luthuli lane.
          </p>
          <p className="font-bold">Marcelo sports, all rights reserved @2023</p>
        </div>
        <div className="mt-16 basis-1/4  md:mt-0">
          <div className="font-bold">Links</div>
          <p>Learn More</p>
          <p>Home.</p>
          <p>Services.</p>
          <p>Products.</p>
        </div>
        <div className="mt-16 basis-1/4  md:mt-0">
          <div className="font-bold">Contact Us</div>
          <p>Twitter.</p>
          <p>Gmail.</p>
          <p>Fcebook.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
