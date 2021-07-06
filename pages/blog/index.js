import Layout from '@/components/Layout';
import { API_URL, PER_PAGE } from '@/config/index';
import BlogItem from '@/components/BlogItem';
import SearchBlog from '@/components/SearchBlog';
import Pagination from '@/components/Pagination';

export default function BlogPage({ blogs, page, total }) {
  return (
    <Layout>
      <h1 style={{ marginTop: '50px' }}>My Blog</h1>
      <SearchBlog />
      {blogs.length === 0 && <h3>No blogs to show</h3>}

      {blogs.map((b) => (
        <BlogItem key={b.id} b={b} />
      ))}

      <Pagination page={page} total={total} />
    </Layout>
  );
}

//? runs server side
export async function getServerSideProps({ query: { page = 1 } }) {
  console.log(page);
  //? run at build time will run static pages
  //export async function getStaticProps() {

  //? Calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  //? Fetch total/count
  const totalRes = await fetch(`${API_URL}/blogs/count`);
  const total = await totalRes.json();

  //? Fetch Blogs
  const blogRes = await fetch(
    `${API_URL}/blogs?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
  );
  const blogs = await blogRes.json();

  return {
    props: { blogs, page: +page, total },
  };
}
