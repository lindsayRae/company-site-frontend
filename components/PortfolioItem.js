import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/BlogItem.module.css';

import { Col } from 'react-bootstrap';
import { FaAngleDoubleRight } from 'react-icons/fa';

export default function PortfolioItem({ p }) {
  console.log(p);
  return (
    <>
      <Col lg='4' md='6'>
        <div className={styles.singleBlogPost}>
          <div className={styles.blogImage}>
            <Link href={`/portfolio/${p.slug}`}>
              <a>
                <Image
                  src={
                    p.image ? p.image.formats.small.url : '/images/blank.jpg'
                  }
                  width={384}
                  height={233}
                  alt='image of portfolio item'
                />
              </a>
            </Link>
          </div>

          <div className={styles.blogPostContent}>
            <div className={styles.portfolioTag}>
              <span>{p.tag}</span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.summary}</p>
            <Link href={`/portfolio/${p.slug}`}>
              <a className='read-more-btn'>
                {p.title} Details <FaAngleDoubleRight />
              </a>
            </Link>
          </div>
        </div>
      </Col>
    </>
  );
}
