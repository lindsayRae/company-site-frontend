import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Portfolio.module.css';

import { Col } from 'react-bootstrap';
import { FaAngleDoubleRight } from 'react-icons/fa';

export default function BlogItem({ p }) {
  console.log(p);
  return (
    <>
      <Col lg='4' md='6'>
        <div className='single-blog-post'>
          <div className='blog-image'>
            <Link href={`/blog/${p.slug}`}>
              <a>
                <Image
                  src={
                    p.image ? p.image.formats.small.url : '/images/blank.jpg'
                  }
                  width={350}
                  height={233}
                />
              </a>
            </Link>
          </div>

          <div className='blog-post-content'>
            <div className={styles.portfolioTag}>
              <span>{p.tag}</span>
            </div>
            <h3>
              <a>{p.title}</a>
            </h3>
            <p>{p.summary}</p>
            <Link href={`/portfolio/${p.slug}`}>
              <a className='read-more-btn'>
                Read More <FaAngleDoubleRight />
              </a>
            </Link>
          </div>
        </div>
      </Col>
    </>
  );
}
