import { useState } from 'react';
import { useRouter } from 'next/router';

import { Col, Button } from 'react-bootstrap';

export default function SearchBlog() {
  const [term, setTerm] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/blog/search?term=${term}`);
    setTerm('');
  };
  return (
    <Col lg='6' className='align-center'>
      <form onSubmit={handleSubmit}>
        <div className='form-group d-flex'>
          <input
            className='form-control'
            type='text'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder='Search Blogs'
          />
          <Button className='ml-2' style={{ height: '45px' }}>
            Search
          </Button>
        </div>
      </form>
    </Col>
  );
}
