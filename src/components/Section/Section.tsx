import { ReactNode, ReactElement, isValidElement, Children, cloneElement } from 'react';
import style from './section.module.css';

type SectionProps = {
  children: ReactNode;
  className?: string;
  bgImage?: string;
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
  isSecondary = false,
  isHalf = false,
  height,
  heightHalf,
  heightMobile,
}: SectionProps) {

  const varBgImage = {
    '--section-height': height,
    '--section-height-half': heightHalf,
    '--section-height-mobile': heightMobile,
    '--section-bg-image': `linear-gradient(var(--secondary-color-transparent, #666666bb), var(--secondary-color-transparent, #666666bb)), url(${bgImage})`
  } as React.CSSProperties;

  return (
    <section
      className={`
        ${style.section} 
        ${isHalf ? style.heightSection : ''} 
        ${isSecondary ? style.secondarySection : ''}
        ${bgImage ? style.backgroundSection: ''}
        ${className}`}
      style={varBgImage}
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