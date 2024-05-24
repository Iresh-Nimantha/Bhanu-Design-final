import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import LogoHead from "../components/LogoHead";

export function NavListMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-serif text-2xl text-shadow:0px-0px-5px-black hover:scale-105 "
      >
        <a
          href="#"
          className="flex items-center text-gray-600 focus:text-black "
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-serif text-2xl duration-5000 hover:scale-105"
      >
        <a
          href="#Service"
          className="flex items-center text-gray-600 focus:text-black"
        >
          Service
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-serif text-2xl hover:scale-105"
      >
        <a
          href="#AboutUs"
          className="flex items-center text-gray-600 focus:text-black"
        >
          About Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-serif text-2xl hover:scale-105"
      >
        <a
          href="#Contact"
          className="flex items-center text-gray-600 focus:text-black"
        >
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="m-auto my-4 px-4 max-h-[768px] w-full ">
      <Navbar className="fixed bg-gray-300 top-0 z-10 h-max max-w-full rounded-x shadow-2xll px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5  text-2xl font-bold"
          >
            Banu Design
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
      <div className="mt-4 bg-gradient-to-bl from-cyan-300 to-green-400 mx-auto max-w-full-md py-12">
        <LogoHead />
      </div>
    </div>
  );
}
export default NavListMenu;
