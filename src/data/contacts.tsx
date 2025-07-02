import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import type { ReactElement } from 'react';

export interface IContact {
  href: string;
  label: string;
  icon: ReactElement;
}

export const contacts: IContact[] = [
  {
    href: 'https://github.com/yourusername',
    label: 'GitHub',
    icon: <FaGithub />,
  },
  {
    href: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn',
    icon: <FaLinkedin />,
  },
  {
    href: 'https://t.me/yourusername',
    label: 'Telegram',
    icon: <FaTelegramPlane />,
  },
];