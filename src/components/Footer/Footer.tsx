import style from './footer.module.css';

type FooterProps = {
  year?: number;
  author?: string;
  creditText?: string;
  className?: string;
};

export default function Footer({
  year = new Date().getFullYear(),
  author = 'Nombre del Artista',
  creditText = 'Todos los derechos reservados.',
  className = ''
}: FooterProps) {
  return (
    <footer className={`${style.footer} ${className}`}>
      <p>© {year} {author}.</p>
      <p className={style.credit}>{creditText}</p>
    </footer>
  );
}