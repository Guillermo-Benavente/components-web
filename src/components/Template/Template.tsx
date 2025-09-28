import { ReactNode } from 'react';
import Header, { HeaderProps } from '../Header/Header';
import Footer, { FooterProps } from '../Footer/Footer';

type TemplateProps = {
  children: ReactNode;
  header?: HeaderProps;
  footer?: FooterProps;
};

export default function Template({ children, header, footer }: TemplateProps) {
  return (
    <>
      <Header {...header} />
      {children}
      <Footer {...footer} />
    </>
  );
}
