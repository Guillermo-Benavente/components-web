import {
  ReactNode,
  ReactElement,
  isValidElement,
  Children,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import style from './section.module.css';

type ImageSet = {
  avif: string;
  webp: string;
  jpg: string;
};

type SectionProps = {
  children: ReactNode;
  className?: string;
  bgImage?: string;
  carruselUrls?: ImageSet[];
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
  const [bgUrl, setBgUrl] = useState<string>();
  const imgRef = useRef<HTMLImageElement>(null);

  const updateBackground = () => {
    const realSrc = imgRef.current?.currentSrc;
    if (realSrc) setBgUrl(realSrc);
  };

  useEffect(() => {
    if (!carruselUrls?.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carruselUrls.length);
    }, carruselTime * 1000);

    return () => clearInterval(interval);
  }, [carruselUrls, carruselTime]);

  useEffect(() => {
    updateBackground();
  }, [current]);

  const currentSet = carruselUrls?.[current];

  const varCss = {
    '--section-height': height,
    '--section-height-half': heightHalf,
    '--section-height-mobile': heightMobile,
    ...(bgUrl
      ? { '--section-carrusel-bg-image': `url(${bgUrl})` }
      : {}),
    ...(bgImage
      ? {
          '--section-bg-image': `linear-gradient(var(--secondary-color-transparent, #666666bb), var(--secondary-color-transparent, #666666bb)), url(${bgImage})`,
        }
      : {}),
  } as React.CSSProperties;

  return (
    <section
      className={`
        ${style.section}
        ${isHalf ? style.heightSection : ''}
        ${isSecondary ? style.secondarySection : ''}
        ${(bgImage || carruselUrls) ? style.backgroundSection : ''}
        ${className}`}
      style={varCss}
    >
      {currentSet && (
        <picture style={{ display: 'none' }}>
          <source srcSet={currentSet.avif} type="image/avif" />
          <source srcSet={currentSet.webp} type="image/webp" />
          <img ref={imgRef} src={currentSet.jpg} onLoad={updateBackground} alt="" />
        </picture>
      )}

      {Children.map(children, (child) => {
        if (isValidElement(child) && typeof child.type !== 'string') {
          return cloneElement(child as ReactElement<{ isHalf?: boolean }>, { isHalf });
        }
        return child;
      })}
    </section>
  );
}