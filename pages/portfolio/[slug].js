import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export default function SinglePortfolioPage({ p }) {
  console.log('SinglePortfolioPage', p);
  const techStack = p.techStack.split(', ');
  const role = p.role.split(', ');
  return (
    <Layout>
      <div className='page-title-area item-bg1'>
        <Container>
          <h1>Portfolio Details</h1>
          <ul>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/portfolio'>
                <a>Portfolio</a>
              </Link>
            </li>
            <li>{p.title}</li>
          </ul>
        </Container>
      </div>
      <section className='portfolio-details ptb-120'>
        <Container>
          <Row className='h-100 align-items-center'>
            <Col lg='8' md='12'>
              <div className=''>
                <Image
                  src={
                    p.image ? p.image.formats.large.url : '/images/blank.jpg'
                  }
                  width={1110}
                  height={700}
                  alt='image of portfolio'
                />
              </div>
            </Col>
            <Col lg='4' md='4'>
              <div className='project-info'>
                <ul>
                  <li>
                    URL
                    <span>
                      <Link href={p.url}>
                        <a target='_blank'>{p.url}</a>
                      </Link>
                    </span>
                  </li>
                  <li>
                    Type of Project <span>{p.projectType}</span>
                  </li>
                  <li>
                    Hosting Platform <span>{p.hosting}</span>
                  </li>
                  <li>
                    Tech Stack
                    {techStack.length === 0 && <span>None</span>}
                    {techStack.map((str) => (
                      <span key={str}>{str}</span>
                    ))}
                  </li>
                  <li>
                    Role
                    {role.length === 0 && <span>None</span>}
                    {role.map((str) => (
                      <span key={str}>{str}</span>
                    ))}
                  </li>
                  <li>
                    Time <span>{p.projectTime}</span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg='12' md='8'>
              <div className='portfolio-details-content'>
                <h3>{p.title}</h3>
                <ReactMarkdown>{p.description}</ReactMarkdown>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/portfolios`);
//   const portfolios = await res.json();

//   const paths = portfolios.map((b) => ({
//     params: { slug: b.slug },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params: { slug } }) {
//   const res = await fetch(`${API_URL}/portfolios/?slug=${slug}`);
//   const portfolios = await res.json();

//   return {
//     props: {
//       p: portfolios[0],
//     },
//     revalidate: 1,
//   };
// }

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/portfolios?slug=${slug}`);
  const portfolios = await res.json();
  console.log('getServerSideProps: ', portfolios);
  return {
    props: {
      p: portfolios[0],
    },
  };
}
