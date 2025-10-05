import { ReactNode } from 'react';
import style from './cardwithimage.module.css';

type ImageSet = {
  avif: string;
  webp: string;
  jpg: string;
};

type CardWithImageProps = {
  children: ReactNode;
  image: ImageSet;
  imageAlt?: string;
  isReverse?: boolean;
  isHalf?: boolean;
};

export default function CardWithImage({
  children,
  image,
  imageAlt = '',
  isReverse = false,
}: CardWithImageProps) {
  return (
    <div className={`${style.contain} ${isReverse ? style.reverse : ''}`}>
      <div className={style.context}>
        {children}
      </div>
      <picture>
        <source srcSet={image.avif} type="image/avif" />
        <source srcSet={image.webp} type="image/webp" />
        <img src={image.jpg} alt={imageAlt} />
      </picture>
    </div>
  );
}
