import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from "../shared/types";
import Link from "./Link";
import useMediaQuery from "../../hooks/UseMediaQuery";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navigation = ({isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const links = [
    {
      name: "Home",
    },
    {
      name: "Services",
    },
    {
      name: "Products",
    },
    {
      name: "Contact Us",
    },
  ];

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBg = isTopOfPage ? "" : "bg-secondary-500 drop-shadow"
  const aboveMediumQuery = useMediaQuery("(min-width: 1060px)");

  return (
    <nav>
      <div className={`${navbarBg} flexBetween fixed top-0 z-30 w-full py-6` }>
        {/* navbar content */}
        <div className="flexBetween w-5/6 mx-auto">
          <div className="flexBetween gap-16 w-full">
            <div>
              <p className="font-bold  text-lg">MARCELO.</p>
            </div>

            {/* links - right side */}
            {aboveMediumQuery ? (
              <div className="hidden md:flex flexBetween w-full">
                <div className="flexBetween gap-8 text-sm">
                  {links.map((link) => (
                    <Link
                      page={link.name}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  ))}
                </div>

                {/* buttons */}
                <div className="flexBetween gap-8">
                  <p>Sign In</p>
                  <button>Sign Up</button>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-primary-300 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {!aboveMediumQuery && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full  w-[300px] bg-secondary-300 drop-shadow-xl">
          {/* close icon */}
          <div className="flex justify-end p-12">
            <button
              className="rounded-full  "
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <XMarkIcon className="h-6 w-6  font-bold" />
            </button>
          </div>

          {/* menu items */}

          <div className="ml-[33%] flex flex-col gap-10 text-xl">
            {links.map((link) => (
              <Link
                page={link.name}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
