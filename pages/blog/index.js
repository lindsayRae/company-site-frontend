import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import BlogItem from '@/components/BlogItem';
import SearchBlog from '@/components/SearchBlog';

export default function BlogPage(blogs) {
  console.log(blogs);
  return (
    <Layout>
      <h1 style={{ marginTop: '50px' }}>My Blog</h1>
      <SearchBlog />
      {blogs.length === 0 && <h3>No blogs to show</h3>}

      {blogs.blogs.map((b) => (
        <BlogItem key={b.id} b={b} />
      ))}
    </Layout>
  );
}

//? runs server side
//export async function getServerSideProps(){
//? run at build time will run static pages
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/blogs?_sort=date:ASC&_limit=6`);
  const blogs = await res.json();
  console.log(blogs);
  return {
    props: { blogs },
    revalidate: 1,
  };
}
