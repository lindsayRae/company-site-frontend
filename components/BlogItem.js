import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/BlogItem.module.css';

import { Col } from 'react-bootstrap';
import { FaAngleDoubleRight } from 'react-icons/fa';

export default function BlogItem({ b }) {
  const formateDate = (date) => {
    let dateArr = date.split('-');
    let formattedDate = `${dateArr[1]}-${dateArr[2]}-${dateArr[0]}`;
    return formattedDate;
  };

  return (
    <>
      <Col lg='4' md='6'>
        <div className='single-blog-post'>
          <div className='blog-image'>
            <Link href={`/blog/${b.slug}`}>
              <a>
                <Image
                  src={
                    b.image ? b.image.formats.small.url : '/images/blank.jpg'
                  }
                  width={350}
                  height={233}
                />
              </a>
            </Link>
            <div className='post-tag'>
              <a href='#'>{b.tag}</a>
            </div>
          </div>
          <div className='blog-post-content'>
            <span className='date'>{formateDate(b.date)}</span>
            <h3>
              <a>{b.title}</a>
            </h3>
            <p>{b.summary}</p>
            <Link href={`/blog/${b.slug}`}>
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
