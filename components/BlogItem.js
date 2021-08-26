import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/BlogItem.module.css';

import { Col } from 'react-bootstrap';
import { FaAngleDoubleRight } from 'react-icons/fa';

export default function BlogItem({ b }) {
  console.log(b);
  const formateDate = (date) => {
    let dateArr = date.split('-');
    let formattedDate = `${dateArr[1]}-${dateArr[2]}-${dateArr[0]}`;
    return formattedDate;
  };

  return (
    <>
      <Col lg='4' md='6'>
        <div className={styles.singleBlogPost}>
          <div className={styles.blogImage}>
            <Link href={`/blog/${b.slug}`}>
              <a>
                <Image
                  src={
                    b.image ? b.image.formats.small.url : '/images/blank.jpg'
                  }
                  width={384}
                  height={233}
                  alt='image of blog'
                />
              </a>
            </Link>
            <div className={styles.postTag}>
              <p>{b.tag}</p>
            </div>
          </div>
          <div className={styles.blogPostContent}>
            <span className={styles.date}>{formateDate(b.date)}</span>
            <h3>{b.title}</h3>
            <p>{b.summary}</p>
            <Link href={`/blog/${b.slug}`}>
              <a className={styles.readMoreBtn}>
                Read Full Article <FaAngleDoubleRight />
              </a>
            </Link>
          </div>
        </div>
      </Col>
    </>
  );
}
