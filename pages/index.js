import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { Jumbotron, Container, Row, Col, Button } from 'react-bootstrap';
import styles from '@/styles/Home.module.css';
import {
  FaLaptopCode,
  FaMixcloud,
  FaChartLine,
  FaEnvelopeOpenText,
  FaRegLightbulb,
  FaClipboardList,
} from 'react-icons/fa';

export default function HomePage() {
  return (
    <Layout>
      {/**********************
               JUMBOTRON
        ***********************/}
      <Jumbotron className={styles.showcase} style={{ marginBottom: 0 }}>
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 6 }}>
              <h1 className='header'>
                We Listen, Collaborate & Deliver to get your Company where it
                needs to go.
              </h1>
              <p>We create custom, scalable web applications.</p>
              <Button variant='primary'>Tell us about your project</Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      {/**********************
               SERVICES
        ***********************/}

      <section className='welcome-services ptb-120 bg-38d16a'>
        <Container>
          <div className='section-title'>
            <span>Our Services</span>
            <h2>choose which services are right for your needs</h2>
          </div>
          <Row>
            <Col lg='3' md='6'>
              <div className='single-services' style={{ height: '222px' }}>
                <div className='icon'>
                  <FaLaptopCode />
                </div>
                <h3>Custom Web App Development</h3>
              </div>
            </Col>
            <Col lg='3' md='6'>
              <div className='single-services' style={{ height: '222px' }}>
                <div className='icon'>
                  <FaMixcloud />
                </div>
                <h3>Cloud Hosting</h3>
              </div>
            </Col>
            <Col lg='3' md='6'>
              <div className='single-services' style={{ height: '222px' }}>
                <div className='icon'>
                  <FaChartLine />
                </div>
                <h3>Digital Marketing</h3>
              </div>
            </Col>
            <Col lg='3' md='6'>
              <div className='single-services' style={{ height: '222px' }}>
                <div className='icon'>
                  <FaEnvelopeOpenText />
                </div>
                <h3>Email Marketing</h3>
              </div>
            </Col>
            <Col lg='12' className='more-services-btn'>
              <Link href='/services'>
                <a className='btn btn-primary'>Read More</a>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/**********************
               TESTIMONIAL
        ***********************/}

      <section className='cta-about'>
        <Container fluid>
          <Row>
            <Col lg='6' md='6' className='p-0'>
              <div className='cta-about-image'>
                {/* Photo by <a href="https://unsplash.com/@kobuagency?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">KOBU Agency</a> on <a href="https://unsplash.com/s/photos/team?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}

                <Image
                  src='/images/testimonials.jpg'
                  width={960}
                  height={700}
                />
              </div>
            </Col>
            <Col lg='6' md='6' className='p-0 testimonal-block'>
              <div className='section-title pt-5 '>
                <h2>Testimonials</h2>
              </div>
              <div className='single-feedback '>
                <p>
                  "Quis ipsum suspendisse ultrices gravida. Risus commodo
                  viverra maecenas accumsan lacus vel facilisis. Consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua."
                </p>
                <h3>
                  Kylee Hanhold<span>Owner at Shirley Sei Bella Salon</span>
                </h3>
              </div>
              {/* <Image
                src='/images/Quote.png'
                // className='quote-img'
                alt='quote'
                width={395}
                height={263}
              /> */}
            </Col>
          </Row>
        </Container>
      </section>

      {/**********************
               PROCESS
        ***********************/}

      <section className='how-we-work bg-image ptb-120'>
        <Container>
          <div className='section-title'>
            <span>Our Process</span>
            <h2>preview your experience</h2>
          </div>
          <Row>
            <Col lg='3' md='6' sm='6'>
              <div className='single-work-box'>
                <div className='number'>01</div>
                <h3>Define Business Objectives & Requirements</h3>
                <ul className='process-list'>
                  <li>Who is your target audience?</li>
                  <li>Trying to drive eCommerce?</li>
                  <li>Trying to drive more people to your location?</li>
                  <li>Trying to build brand awareness?</li>
                </ul>
                <FaRegLightbulb className='process-icons' />
              </div>
            </Col>
            <Col lg='3' md='6' sm='6'>
              <div className='single-work-box'>
                <div className='number'>02</div>
                <h3>Create An Action Plan</h3>
                <ul className='process-list'>
                  <li>Do you need to redesign your website?</li>
                  <li>Do you need A/B testing?</li>
                  <li>Do you need better analytics?</li>
                  <li>What is you timeline?</li>
                </ul>
                <FaClipboardList className='process-icons' />
              </div>
            </Col>
            <Col lg='3' md='6' sm='6'>
              <div className='single-work-box'>
                <div className='number'>03</div>
                <h3>Prototyping</h3>
                <ul className='process-list'>
                  <li>Generate user stores</li>
                  <li>Building out site mockups</li>
                  <li>Validating user flow</li>
                </ul>
                <FaLaptopCode className='process-icons' />
              </div>
            </Col>
            <Col lg='3' md='6' sm='6'>
              <div className='single-work-box'>
                <div className='number'>04</div>
                <h3>Development & Deployment</h3>
                <ul className='process-list'>
                  <li>Build a dev test environment</li>
                  <li>QA process</li>
                  <li>Deployment</li>
                  <li>Hosting and monitoring</li>
                </ul>
                <FaMixcloud className='process-icons' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/**********************
                 FOUNDERS NOTE
        ***********************/}
      <section className='how-we-work ptb-120'>
        <Container>
          <div className='section-title'>
            <h2>Founders Note</h2>
          </div>
          <p className='text-center'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis."
          </p>
          <p className='text-center'>- Lindsay Aiello</p>
          <Row></Row>
        </Container>
      </section>
    </Layout>
  );
}
