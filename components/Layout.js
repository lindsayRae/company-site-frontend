import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        {/* Responsive meta tag */}
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <title>{title}</title>       
      </Head>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Lindsay's Co Development",
  description: 'webs services like websites, webapps and hosting',
  keywords: 'website, hosting, webapp',
};
