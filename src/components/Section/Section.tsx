import { ReactNode, ReactElement, Children, cloneElement, CSSProperties } from 'react';
import style from './section.module.css';

type SectionProps = {
  children: ReactNode;
  className?: string;
  bgImage?: string;
  isWhite?: boolean;
  isSecondary?: boolean;
  isHalf?: boolean;
};

export function Section({
  children,
  className = '',
  bgImage,
  isWhite = false,
  isSecondary = false,
  isHalf = false,
}: SectionProps) {
  const sectionStyle: CSSProperties = {
    backgroundImage: bgImage
      ? `linear-gradient(var(--secondary-color-transparent, #666666bb), var(--secondary-color-transparent, #666666bb)), url(${bgImage})`
      : undefined,
    color: isWhite ? '#eee' : '#333',
    backgroundColor: isSecondary ? 'var(--secondary-color, #666)' : 'var(--primary-color, #bbb)',
  };

  return (
    <section
      className={`${style.section} ${isHalf ? style.heightSection : ''} ${className}`}
      style={sectionStyle}
    >
      {Children.map(children, (child) => {
        if (child && typeof child === 'object' && 'props' in child) {
          return cloneElement(child as ReactElement<{ isHalf?: boolean }>, { isHalf });
        }
        return child;
      })}
    </section>
  );
}