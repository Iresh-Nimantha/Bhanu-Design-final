import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from "@material-tailwind/react";
import { EnvelopeIcon, EnvelopeOpenIcon } from "@heroicons/react/24/outline";
import { FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";

export function SpeedDialWithTextOutside() {
  return (
    <div className=" absolute z-10">
      <div
        id="Contact"
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-black w-16 h-16 rounded-full"
      >
        <div className="absolute  inset-0 border-2 border-transparent rounded-full pointer-events-none animate-neon-border"></div>
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full left-2 top-2">
              <EnvelopeOpenIcon className="hidden  group-hover:block w-5 h-5" />
              <EnvelopeIcon className="block  group-hover:hidden w-5 h-5" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <a
              href="https://www.facebook.com/profile.php?id=61554859791220&mibextid=ZbWKwL"
              target="_blank"
            >
              <SpeedDialAction className="h-16 w-16">
                <FaFacebookF className="h-5 w-5" style={{ color: "#1877F2" }} />
                <Typography color="blue-gray" className="text-xs font-normal ">
                  Facebook
                </Typography>
              </SpeedDialAction>
            </a>
            <SpeedDialAction className="h-16 w-16">
              <FaTiktok className="h-5 w-5" style={{ color: "#010101" }} />
              <Typography color="blue-gray" className="text-xs font-normal">
                Tiktok
              </Typography>
            </SpeedDialAction>
            <a href="https://chat.whatsapp.com/L0" target="_blank">
              <SpeedDialAction className="h-16 w-16">
                <FaWhatsapp className="h-5 w-5" style={{ color: "#25D366" }} />
                <Typography color="blue-gray" className="text-xs font-normal">
                  Whatsapp
                </Typography>
              </SpeedDialAction>
            </a>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}

export default SpeedDialWithTextOutside;
