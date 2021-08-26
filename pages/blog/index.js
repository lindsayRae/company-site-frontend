import Layout from '@/components/Layout';
import { API_URL, PER_PAGE } from '@/config/index';
import BlogItem from '@/components/BlogItem';
import SearchBlog from '@/components/SearchBlog';
import Pagination from '@/components/Pagination';
import { Container, Row } from 'react-bootstrap';

import styles from '@/styles/BlogSlug.module.css';
import Link from 'next/link';

export default function BlogPage({ blogs, page, total }) {
  console.log('BlogPage', blogs);
  return (
    <Layout>
      <div className='page-title-area item-bg1'>
        <Container>
          <h1>Our Blogs</h1>
          <ul>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>Blogs</li>
          </ul>
        </Container>
      </div>
      <section className={styles.blogDetailsArea}>
        <Container>
          <Row className='justify-content-md-center pb-5'>
            <div className='section-title'>
              <h2>Blog Articles</h2>
            </div>
          </Row>
          <Row className='justify-content-md-center pb-5'>
            <SearchBlog />
          </Row>
          <Row>
            {blogs.length === 0 && <h3>No blogs to show</h3>}
            {blogs.map((b) => (
              <BlogItem key={b.id} b={b} />
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
  //? run at build time will run static pages
  //export async function getStaticProps() {

  //? Calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  //? Fetch total/count
  const totalRes = await fetch(`${API_URL}/blogs/count`);

  const total = await totalRes.json();

  // Need to build an

  //? Fetch Blogs
  const blogRes = await fetch(
    `${API_URL}/blogs?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
  );
  const blogs = await blogRes.json();

  console.log('**', blogs, page);
  return {
    props: { blogs, page: +page, total },
  };
}
