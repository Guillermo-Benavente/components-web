import { ReactNode } from 'react';
import style from './cardwithimage.module.css';

type CardWithImageProps = {
  children: ReactNode;
  image: string;
  imageAlt?: string;
  isReverse?: boolean;
  isHalf?: boolean;
};

export default function CardWithImage({
  children,
  image,
  imageAlt = '',
  isReverse = false,
  isHalf = false,
}: CardWithImageProps) {
  return (
    <div className={`${style.contain} ${isReverse ? style.reverse : ''}`}>
      <div className={style.context}>
        {children}
      </div>
      <img
        src={image}
        alt={imageAlt}
        className={isHalf ? style.heightImg : ''}
      />
    </div>
  );
}
