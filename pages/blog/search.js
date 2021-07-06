import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import BlogItem from '@/components/BlogItem';
import qs from 'qs';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SearchPage(blogs) {
  console.log(blogs);
  const router = useRouter();

  return (
    <Layout>
      <h1 style={{ marginTop: '50px' }}>
        Search Results for {router.query.term}
      </h1>
      <Link href='/blog'>Go Back</Link>
      {blogs.length === 0 && <h3>No blogs to show</h3>}

      {blogs.blogs.map((b) => (
        <BlogItem key={b.id} b={b} />
      ))}
    </Layout>
  );
}

//? runs server side
export async function getServerSideProps({ query: { term } }) {
  //? to search 1 field:
  //? const res = await fetch(`${API_URL}/blogs?title_contains=${term}`);

  const query = qs.stringify({
    _where: {
      _or: [{ title_contains: term }, { description_contains: term }],
    },
  });
  const res = await fetch(`${API_URL}/blogs?${query}`);
  const blogs = await res.json();
  console.log(blogs);
  return {
    props: { blogs },
  };
}
