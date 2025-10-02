import { SiX, SiInstagram, SiYoutube, SiTiktok } from 'react-icons/si';
import style from './socialmedia.module.css';

type SocialMediaItem = {
  icon: 'X' | 'Instagram' | 'Youtube' | 'Tiktok';
  url: string;
};

type SocialMediaProps = {
  size?: number;
  color?: string;
  links?: SocialMediaItem[];
  className?: string;
};

const iconMap = {
  X: SiX,
  Instagram: SiInstagram,
  Youtube: SiYoutube,
  Tiktok: SiTiktok
};

export default function SocialMedia({
  size = 20,
  color = '#eeeeeedd',
  links = [
    { icon: 'X', url: '' },
    { icon: 'Instagram', url: '' },
    { icon: 'Youtube', url: '' },
    { icon: 'Tiktok', url: '' }
  ],
  className = ''
}: SocialMediaProps) {
  return (
    <div className={`${style.content} ${className}`}>
      {links.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <a
            key={link.icon}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            className={style.size}
            style={{'--socialmedia-size': `${size}px`} as React.CSSProperties}
          >
            <Icon size={size} color={color} />
          </a>
        );
      })}
    </div>
  );
}
