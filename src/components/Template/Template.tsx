import { ReactNode } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

type TemplateProps = {
  children: ReactNode;
};

export function Template({ children }: TemplateProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
