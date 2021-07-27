import Link from 'next/link';
import styles from '@/styles/Footer.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='ptb-120 pb-0' className={styles.footerArea}>
      <Container>
        <Row>
          <Col lg='3' md='6' sm='6'>
            <div className={styles.singleFooterWidget}>
              <div className={styles.logo}>
                <Link href='#'>
                  <a>Rizzy</a>
                </Link>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
          <Col lg='3' md='6' sm='6'>
            <div className='ml-4' className={styles.singleFooterWidget}>
              <h3>Quick Links</h3>
              <ul className={styles.list}>
                <li>
                  <Link href='/'>
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href='/services'>
                    <a>Services</a>
                  </Link>
                </li>
                <li>
                  <Link href='/portfolio'>
                    <a>Portfolio</a>
                  </Link>
                </li>
                <li>
                  <Link href='/faq'>
                    <a>FAQs</a>
                  </Link>
                </li>
                <li>
                  <Link href='/blog'>
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href='/contact'>
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg='3' md='6' sm='6'>
            <div className={styles.singleFooterWidget}>
              <h3>Recent Posts</h3>
              <ul className={styles.footerRecentPosts}>
                <li>
                  <Link href='/blog/this-is-blog-one'>
                    <a>This is Blog One</a>
                  </Link>
                  <span>July 1st, 2021</span>
                </li>
                <li>
                  <Link href='/blog/this-is-blog-two'>
                    <a>This is Blog Two</a>
                  </Link>
                  <span>July 2nd, 2021</span>
                </li>
                <li>
                  <Link href='/blog/this-is-blog-three'>
                    <a>This is Blog Three</a>
                  </Link>
                  <span>July 3rd, 2021</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg='3' md='6' sm='6'>
            <div className={styles.singleFooterWidget}>
              <h3>Get In Touch</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className={styles.footerContactInfo}>
                <li>
                  <FaPhoneAlt />
                  <span>Phone: </span>303-123-1234
                </li>
                <li>
                  <FaEnvelope />
                  <span>Email: </span>lindsay@company.com
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <div className={styles.copyRightArea}>
          <Row>
            <Col lg='6' md='6' className={styles.textLeft}>
              <p>Copyright &copy; Rizzy 2021</p>
            </Col>
            <Col lg='6' md='6' className={styles.textRight}>
              <p>
                Designed by{' '}
                <Link href='https://envytheme.com' target='_blank'>
                  <a>EnvyTheme</a>
                </Link>
              </p>
            </Col>
          </Row>
        </div>
      </Container>
      <img
        src='/images/line-bg.png'
        className={styles.lineBG}
        alt='image of lines'
      />
      <div className={styles.shape23}>
        <Image
          src='/images/shapes/23.png'
          width={215}
          height={192}
          alt='image of circle shapes'
        />
      </div>
      <div className={styles.shape24}>
        <Image
          src='/images/shapes/24.png'
          width={215}
          height={192}
          alt='image of circle shapes'
        />
      </div>
      <div className={styles.shape27}>
        <Image
          src='/images/shapes/27.png'
          width={116}
          height={116}
          alt='image of circle shapes'
        />
      </div>
    </footer>
  );
}
