import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SearchBlog() {
  const [term, setTerm] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/blog/search?term=${term}`);
    setTerm('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder='Search Blogs'
        />
      </form>
    </div>
  );
}
