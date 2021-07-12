import Layout from '@/components/Layout';
import { API_URL, PER_PAGE } from '@/config/index';
import PortfolioItem from '@/components/PortfolioItem';
import Pagination from '@/components/Pagination';
import { Container, Row } from 'react-bootstrap';

import Link from 'next/link';

export default function PortfolioPage({ portfolios, page, total }) {
  console.log(portfolios);
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
            <li>
              <Link href='/blog'>
                <a>Portfolio</a>
              </Link>
            </li>
          </ul>
        </Container>
      </div>
      <section className='blog-area ptb-120'>
        <Container>
          <Row className='justify-content-md-center pb-5'></Row>
          <Row>
            {portfolios.length === 0 && <h3>No portfolio items to show</h3>}
            {portfolios.map((p) => (
              <PortfolioItem key={p.id} p={p} />
            ))}
          </Row>
          <Pagination page={page} total={total} />
        </Container>
      </section>
    </Layout>
  );
}

//? runs server side
export async function getServerSideProps({ query: { page = 1 } }) {
  //? Calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;
  console.log('start', start);
  //? Fetch total/count
  const totalRes = await fetch(`${API_URL}/portfolios/count`);

  const total = await totalRes.json();

  // Need to build an

  //? Fetch Blogs
  const portfolioRes = await fetch(
    `${API_URL}/portfolios?_limit=${PER_PAGE}&_start=${start}`
  );
  const portfolios = await portfolioRes.json();

  console.log('**', portfolios, page);
  return {
    props: { portfolios, page: +page, total },
  };
}
