import { Link } from 'react-router-dom';
import Template from '../Template/Template';
import Section from '../Section/Section';
import { HeaderProps } from '../Header/Header';
import { FooterProps } from '../Footer/Footer';
import style from './templatenotfound.module.css';

type TemplateNotFoundProps = {
  header?: HeaderProps;
  footer?: FooterProps;
};

export default function TemplateNotFound({ header, footer }: TemplateNotFoundProps) {
    return (
        <Template header={header} footer={footer}>
            <Section className={style.section}>
                <div className={style.content}>
                    <h1>404</h1>
                    <h2>Página no encontrada</h2>
                    <p>La ruta que intentas abrir no existe o fue movida.</p>
                    <Link to='/' className={style.link}>
                        Volver al inicio
                    </Link>
                </div>
            </Section>
        </Template>
    );
}
