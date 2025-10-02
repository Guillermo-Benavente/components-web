import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import SocialMedia from '../SocialMedia/SocialMedia';
import style from './header.module.css';

type LinkItem = {
  label: string;
  path: string;
};

export type HeaderProps = {
  name?: string;
  links?: LinkItem[];
  socialSize?: number;
  socialColor?: string;
  className?: string;
};

export default function Header({
  name = 'Nombre',
  links = [
    { label: 'Inicio', path: '/' },
    { label: 'Sobre mí', path: '/about' },
  ],
  socialSize,
  socialColor,
  className = ''
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`${style.header} ${className}`}>
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

        <SocialMedia size={socialSize} color={socialColor} />
      </div>
    </header>
  );
}
