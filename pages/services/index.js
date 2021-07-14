import Layout from '@/components/Layout';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

export default function FAQPage() {
  return (
    <Layout>
      <div className='page-title-area item-bg1'>
        <Container>
          <h1>Our Services</h1>
          <ul>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>Services</li>
          </ul>
        </Container>
      </div>
      <section className='why-choose-us-area ptb-120'>
        <Container>
          <Row className='row h-100 align-items-center'>
            <Col lg='6' md='12'>
              <div className='why-choose-us-img'>
                <img
                  src='/images/1.jpg'
                  height={565}
                  width={490}
                  className='front-img'
                />
                <img
                  src='/images/2.jpg'
                  height={565}
                  width={490}
                  className='back-img'
                />
              </div>
            </Col>
            <Col lg='6' md='12'>
              <div className='why-choose-us-content'>
                <div className='section-title'>
                  <span>Most Popular</span>
                  <h2>Custom Web App Development </h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  cursus rhoncus diam in facilisis. Nulla imperdiet felis ut
                  erat posuere pellentesque. Aliquam urna orci, sollicitudin ut
                  sagittis sit amet, mattis in purus. Vestibulum auctor
                  tincidunt ornare. Duis tortor lorem, ullamcorper in magna
                  efficitur, porta dictum justo. Vestibulum ligula purus,
                  ultrices quis lectus vel, convallis ornare nisl. Mauris
                  efficitur erat felis, sed viverra risus luctus eu. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus.{' '}
                </p>
              </div>
            </Col>
          </Row>
          <Row className='row h-100 align-items-center'>
            <Col lg='6' md='12'>
              <div className='why-choose-us-content'>
                <div className='section-title'>
                  <span>Most Popular</span>
                  <h2>Cloud Hosting</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  cursus rhoncus diam in facilisis. Nulla imperdiet felis ut
                  erat posuere pellentesque. Aliquam urna orci, sollicitudin ut
                  sagittis sit amet, mattis in purus. Vestibulum auctor
                  tincidunt ornare. Duis tortor lorem, ullamcorper in magna
                  efficitur, porta dictum justo. Vestibulum ligula purus,
                  ultrices quis lectus vel, convallis ornare nisl. Mauris
                  efficitur erat felis, sed viverra risus luctus eu. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus.{' '}
                </p>
              </div>
            </Col>
            <Col lg='6' md='12'>
              <div className='why-choose-us-img'>
                <img
                  src='/images/1.jpg'
                  height={565}
                  width={490}
                  className='front-img'
                />
                <img
                  src='/images/2.jpg'
                  height={565}
                  width={490}
                  className='back-img'
                />
              </div>
            </Col>
          </Row>
          <Row className='row h-100 align-items-center'>
            <Col lg='6' md='12'>
              <div className='why-choose-us-img'>
                <img
                  src='/images/1.jpg'
                  height={565}
                  width={490}
                  className='front-img'
                />
                <img
                  src='/images/2.jpg'
                  height={565}
                  width={490}
                  className='back-img'
                />
              </div>
            </Col>
            <Col lg='6' md='12'>
              <div className='why-choose-us-content'>
                <div className='section-title'>
                  <span>Most Popular</span>
                  <h2>Email Marketing</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  cursus rhoncus diam in facilisis. Nulla imperdiet felis ut
                  erat posuere pellentesque. Aliquam urna orci, sollicitudin ut
                  sagittis sit amet, mattis in purus. Vestibulum auctor
                  tincidunt ornare. Duis tortor lorem, ullamcorper in magna
                  efficitur, porta dictum justo. Vestibulum ligula purus,
                  ultrices quis lectus vel, convallis ornare nisl. Mauris
                  efficitur erat felis, sed viverra risus luctus eu. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus.{' '}
                </p>
              </div>
            </Col>
          </Row>
          <Row className='row h-100 align-items-center'>
            <Col lg='6' md='12'>
              <div className='why-choose-us-content'>
                <div className='section-title'>
                  <span>Most Popular</span>
                  <h2>Digital Marketing</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  cursus rhoncus diam in facilisis. Nulla imperdiet felis ut
                  erat posuere pellentesque. Aliquam urna orci, sollicitudin ut
                  sagittis sit amet, mattis in purus. Vestibulum auctor
                  tincidunt ornare. Duis tortor lorem, ullamcorper in magna
                  efficitur, porta dictum justo. Vestibulum ligula purus,
                  ultrices quis lectus vel, convallis ornare nisl. Mauris
                  efficitur erat felis, sed viverra risus luctus eu. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus.{' '}
                </p>
              </div>
            </Col>
            <Col lg='6' md='12'>
              <div className='why-choose-us-img'>
                <img
                  src='/images/1.jpg'
                  height={565}
                  width={490}
                  className='front-img'
                />
                <img
                  src='/images/2.jpg'
                  height={565}
                  width={490}
                  className='back-img'
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}
