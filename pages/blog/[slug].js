import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
// https://betterprogramming.pub/build-your-personal-blog-with-next-js-and-strapi-e092bf11d3db
export default function SingleBlogPage({ b }) {
  const formateDate = (date) => {
    let dateArr = date.split('-');
    let formattedDate = `${dateArr[1]}-${dateArr[2]}-${dateArr[0]}`;
    return formattedDate;
  };
  return (
    <Layout>
      <div className='page-title-area item-bg1'>
        <Container>
          <h1>Blog Details</h1>
          <ul>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/blog'>
                <a>Blogs</a>
              </Link>
            </li>
            <li>{b.title}</li>
          </ul>
        </Container>
      </div>
      <section className='blog-details-area ptb-120'>
        <Container>
          <Row>
            <Col>
              <div className='blog-details'>
                <div className='article-img'>
                  <Image
                    src={
                      b.image ? b.image.formats.large.url : '/images/blank.jpg'
                    }
                    width={1110}
                    height={700}
                    alt='image of blog'
                  />
                  <div className='date'>{formateDate(b.date)}</div>
                </div>
                <div className='article-content'>
                  <ul className='category'>
                    <li>
                      <a>{b.tag}</a>
                    </li>
                  </ul>
                  <h3>{b.title}</h3>
                  <ReactMarkdown>{b.description}</ReactMarkdown>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}
//? We thing this didn't build right because of the timing with heroku. Traversity Media Udemy Section 9 #49 min 3
// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/blogs`);
//   const blogs = await res.json();

//   const paths = blogs.map((b) => ({
//     params: { slug: b.slug },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params: { slug } }) {
//   const res = await fetch(`${API_URL}/blogs/?slug=${slug}`);
//   const blogs = await res.json();

//   return {
//     props: {
//       b: blogs[0],
//     },
//     revalidate: 1,
//   };
// }

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/blogs?slug=${slug}`);
  const blogs = await res.json();
  console.log('getServerSideProps: ', blogs);
  return {
    props: {
      b: blogs[0],
    },
  };
}
