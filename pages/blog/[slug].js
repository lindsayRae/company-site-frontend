import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import Image from 'next/image';

export default function SingleBlogPage({ b }) {
  console.log(b);
  return (
    <Layout>
      <h1 style={{ marginTop: '50px' }}>{b.title}</h1>
      {b.image && (
        <>
          <div>
            <Image src={b.image.formats.medium.url} width={960} height={600} />
          </div>
          <div>
            <p>{b.description}</p>
          </div>
        </>
      )}
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/blogs`);
  const blogs = await res.json();
  console.log('getStaticPaths: ', blogs);

  const paths = blogs.map((b) => ({
    params: { slug: b.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/blogs/?slug=${slug}`);
  const blogs = await res.json();
  console.log('getStaticProps: ', blogs);
  return {
    props: {
      b: blogs[0],
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps({ query: { id }}) {

//   const res = await fetch(`${API_URL}/api/blogs/${id}`)
//   const blogs = await res.json()
//   console.log(blogs)
//   return {
//     props: {
//       b: blogs[0]
//     }
//   }
// }
