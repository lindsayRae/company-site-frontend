import Layout from '@/components/Layout';
import { API_URL, PER_PAGE } from '@/config/index';
import PortfolioItem from '@/components/PortfolioItem';
import { Container, Row } from 'react-bootstrap';

import styles from '@/styles/BlogSlug.module.css';
import Link from 'next/link';

export default function PortfolioPage({ portfolios }) {
  console.log('PortfolioPage', portfolios);
  return (
    <Layout>
      <div className='page-title-area item-bg1'>
        <Container>
          <h1>Our Portfolio</h1>
          <ul>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>Portfolio</li>
          </ul>
        </Container>
      </div>
      <section className={styles.blogDetailsArea}>
        <Container>
          <Row className='justify-content-md-center pb-5'>
            <div className='section-title'>
              <h2>Check out our Projects</h2>
            </div>
          </Row>
          <Row>
            {portfolios.length === 0 && <h3>No portfolio items to show</h3>}
            {portfolios.map((p) => (
              <PortfolioItem key={p.id} p={p} />
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

//? runs server side
export async function getServerSideProps() {
  //? Calculate start page
  // const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;
  // console.log('start', start);
  //? Fetch total/count
  // const totalRes = await fetch(`${API_URL}/portfolios/count`);

  // const total = await totalRes.json();

  // Need to build an

  //? Fetch Portfolios
  const portfolioRes = await fetch(`${API_URL}/portfolios`);
  const portfolios = await portfolioRes.json();

  console.log('**', portfolios);
  return {
    props: { portfolios },
  };
}
