import style from './cardwithimage.module.css';

type CardWithImageProps = {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  isReverse?: boolean;
  isHalf?: boolean;
};

export function CardWithImage({
  title,
  description,
  image,
  imageAlt = '',
  isReverse = false,
  isHalf = false,
}: CardWithImageProps) {
  return (
    <div className={`${style.contain} ${isReverse ? style.reverse : ''}`}>
      <div className={style.context}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <img
        src={image}
        alt={imageAlt}
        className={isHalf ? style.heightImg : ''}
      />
    </div>
  );
}
