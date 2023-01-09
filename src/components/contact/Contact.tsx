import React from "react";
import { SelectedPage } from "../shared/types";
import { motion } from "framer-motion";
import Heading from "../shared/Heading";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.contactUs)}
      >
        <div className="mx-auto md:w-3/5">
          <Heading>CONTACT US</Heading>
          <p className="text-sm my-1">
            For any enquiries reach out to us, will get an immediate response
            and help. Thank you
          </p>
        </div>

        {/* form */}

        <div className="w-full md:w-4/5 lg:w-3/5 my-6 mx-auto">
          <form action="">
            <label htmlFor="">Your name:</label>
            <input type="text" name="" className="inputStyles" id="" />
            <label htmlFor="">Your email:</label>
            <input type="text" name="" className="inputStyles" id="" />
            <label htmlFor="">Message:</label>
            <textarea name="" id="" className="inputStyles" rows={4}></textarea>
            <div className="flex justify-center">
              <button className="mx-auto">Submit</button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
