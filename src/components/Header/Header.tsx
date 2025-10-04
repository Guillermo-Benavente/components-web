import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import SocialMedia, { SocialMediaProps } from '../SocialMedia/SocialMedia';
import style from './header.module.css';

type LinkItem = {
  label: string;
  path: string;
};

export type HeaderProps = {
  name?: string;
  links?: LinkItem[];
  socialMedia?: SocialMediaProps
  className?: string;
  isGlass?: boolean;
};

export default function Header({
  name = 'Nombre',
  links = [
    { label: 'Inicio', path: '/' },
    { label: 'Sobre mí', path: '/about' },
  ],
  socialMedia,
  className = '',
  isGlass = false,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`${style.header} ${isGlass? style.glass : ''} ${className}`}>
      <h2>{name}</h2>

      <button className={style.burger} onClick={() => setIsOpen(!isOpen)}>
        <HiOutlineMenu />
      </button>

      <div className={`${style.links} ${isOpen ? style.open : ''}`}>
        <div className={style.contentLink}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? `${style.link} ${style.active}` : style.link
              }
              to={link.path}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <SocialMedia {...socialMedia} />
      </div>
    </header>
  );
}
