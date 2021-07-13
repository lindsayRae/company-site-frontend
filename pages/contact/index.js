import Layout from '@/components/Layout';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaRegClock } from 'react-icons/fa';

import Link from 'next/link';
import styles from '@/styles/Contact.module.css';
export default function ContactPage() {
  return (
    <Layout>
      <div className='page-title-area item-bg1'>
        <Container>
          <h1>Contact Us</h1>
          <ul>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>Contact Us</li>
          </ul>
        </Container>
      </div>
      <section className='contact-area ptb-120'>
        <Container>
          <div className='section-title'>
            <span>Contact Us</span>
            <h2>Get In Touch With Us</h2>
          </div>
          <div className='row h-100 justify-content-center align-items-center'>
            <Col lg='6' md='12'>
              <Row>
                <Col lg='12' className='d-flex align-items-center pb-5'>
                  <div className={styles.iconCircle}>
                    <FaEnvelope />
                  </div>
                  <div className='ml-4'>
                    <h4>Email</h4>
                    <p>lindsay@email.com</p>
                  </div>
                </Col>
                <Col lg='12' className='d-flex align-items-center pb-5'>
                  <div className={styles.iconCircle}>
                    <FaPhoneAlt />
                  </div>
                  <div className='ml-4'>
                    <h4>Phone</h4>
                    <p>123-456-7897</p>
                  </div>
                </Col>
                <Col lg='12' className='d-flex align-items-center pb-5'>
                  <div className={styles.iconCircle}>
                    <FaRegClock />
                  </div>
                  <div className='ml-4'>
                    <h4>Hours</h4>
                    <p>Monday - Friday: 9am - 5pm</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg='6' md='12'>
              <form>
                <Row>
                  <Col lg='12'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Name'
                      />
                    </div>
                  </Col>
                  <Col lg='12'>
                    <div className='form-group'>
                      <input
                        type='email'
                        className='form-control'
                        placeholder='Email'
                      />
                    </div>
                  </Col>
                  <Col lg='12'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Phone'
                      />
                    </div>
                  </Col>
                  <Col lg='12'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Subject'
                      />
                    </div>
                  </Col>
                  <Col lg='12'>
                    <div className='form-group'>
                      <textarea
                        className='form-control'
                        placeholder='Your Message'
                        cols='30'
                        rows='5'
                      ></textarea>
                    </div>
                  </Col>
                  <Col lg='12'>
                    <Button>Send Message</Button>
                  </Col>
                </Row>
              </form>
            </Col>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
