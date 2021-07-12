import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { FaChevronUp } from 'react-icons/fa';
export default function Layout({ title, keywords, description, children }) {
  const scrollTop = () => {
    console.log('hello');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
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
      <div>{children}</div>
      <Footer />
      <div className='go-top' onClick={scrollTop}>
        <FaChevronUp />
      </div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Lindsay's Co Development",
  description: 'webs services like websites, webapps and hosting',
  keywords: 'website, hosting, webapp',
};
