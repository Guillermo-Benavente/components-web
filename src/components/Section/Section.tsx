import { ReactNode, ReactElement, isValidElement, Children, cloneElement, useEffect, useState } from 'react';
import style from './section.module.css';

type SectionProps = {
  children: ReactNode;
  className?: string;
  bgImage?: string;
  carruselUrls?: string[];
  carruselTime?: number;
  isWhite?: boolean;
  isSecondary?: boolean;
  isHalf?: boolean;
  height?: string;
  heightHalf?: string;
  heightMobile?: string;
};

export default function Section({
  children,
  className = '',
  bgImage,
  carruselUrls,
  carruselTime = 5,
  isSecondary = false,
  isHalf = false,
  height,
  heightHalf,
  heightMobile,
}: SectionProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carruselUrls.length);
    }, carruselTime * 1000);

    return () => clearInterval(interval);
  }, [carruselUrls, carruselTime]);

  const varCss = {
    '--section-height': height,
    '--section-height-half': heightHalf,
    '--section-height-mobile': heightMobile,
    '--section-carrusel-bg-image': `url(${carruselUrls[current]})`,
    '--section-bg-image': `linear-gradient(var(--secondary-color-transparent, #666666bb), var(--secondary-color-transparent, #666666bb)), url(${bgImage})`
  } as React.CSSProperties;

  return (
    <section
      className={`
        ${style.section} 
        ${isHalf ? style.heightSection : ''} 
        ${isSecondary ? style.secondarySection : ''}
        ${bgImage ? style.backgroundSection : ''}
        ${carruselUrls ? style.backgroundSection : ''}
        ${className}`}
      style={varCss}
    >
      {Children.map(children, (child) => {
        if (isValidElement(child) && typeof child.type !== 'string') {
          return cloneElement(
            child as ReactElement<{ isHalf?: boolean }>,
            { isHalf }
          );
        }
        return child;
      })}
    </section>
  );
}