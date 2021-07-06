import Head from 'next/head';
import { useRouter } from 'next/router'
import styles from '@/styles/Layout.module.css';
import Header from './Header';
import Footer from './Footer';
import Showcase from './Showcase';


export default function Layout({ title, keywords, description, children }) {
  const router = useRouter()

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
      {/* {router.pathname === '/' && <Showcase />} */}
      <div>{children}</div>
      <Footer />
     
    
    </div>
  );
}

Layout.defaultProps = {
  title: "Lindsay's Co Development",
  description: 'webs services like websites, webapps and hosting',
  keywords: 'website, hosting, webapp',
};
