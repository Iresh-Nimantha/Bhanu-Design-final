import { Typography } from "@material-tailwind/react";

const SITEMAP = [
  {
    title: "Company",
    links: ["Home", "Service", "About Us", "Contact Us"],
  },
  {
    title: "Help Center",
    links: ["Contact Us", "Facebook", "Whatsapp", "Tiktok"],
  },
];

const currentYear = new Date().getFullYear();

export function FooterWithLogo() {
  return (
    <footer className=" w-full mt-16 bg-gray-300">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-2 gap-8 py-12 md:text-center lg:text-center text-center ">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full ">
              <Typography variant="larg" color="blue-gray  ">
                {title}
              </Typography>
              <ul className="space-y-1 ">
                {links.map((link, key) => (
                  <Typography
                    key={key}
                    as="li"
                    color="blue-gray"
                    className="font-normal text-lg"
                  >
                    <a className="inline-block py-1 pr-2 transition-transform hover:scale-105">
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">Material Tailwind</a>. All
            Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
export default FooterWithLogo;
