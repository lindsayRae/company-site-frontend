import Link from 'next/link';
import { PER_PAGE } from '@/config/index';
import { Col, Row } from 'react-bootstrap';
import styles from '@/styles/Pagination.module.css';

export default function Pagination({ page, total }) {
  const lastPage = Math.ceil(total / PER_PAGE);

  return (
    <Row>
      <Col>
        {page > 1 && (
          <Link href={`/blog?page=${page - 1}`}>
            <a className={styles.pagBtn}>Prev</a>
          </Link>
        )}
      </Col>

      <Col className='text-right'>
        {page < lastPage && (
          <Link href={`/blog?page=${page + 1} `}>
            <a className={styles.pagBtn}>Next</a>
          </Link>
        )}
      </Col>
    </Row>
  );
}
