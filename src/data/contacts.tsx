import type { ReactElement } from "react";
import { FaGithub, FaGoogle, FaTelegramPlane } from "react-icons/fa";

export interface IContact {
  href: string;
  label: string;
  icon: ReactElement;
}

export const contacts: IContact[] = [
  {
    href: "mailto:alebedev424@gmail.com",
    label: "GMail",
    icon: <FaGoogle />,
  },
  {
    href: "https://github.com/alebedev85",
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "https://t.me/andrei_lebedev",
    label: "Telegram",
    icon: <FaTelegramPlane />,
  },
];
