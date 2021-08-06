import { useState } from 'react';
import Layout from '@/components/Layout';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaRegClock } from 'react-icons/fa';

import Link from 'next/link';
import styles from '@/styles/Contact.module.css';
export default function ContactPage() {
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {};
    let missingValue = false;
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      if (!field.value) {
        missingValue = true;
        return;
      }
      formData[field.name] = field.value;
    });

    if (missingValue) {
      setError('Please fill in all form fields');
      return;
    } else {
      //! https://www.youtube.com/watch?v=QrVYLLpoyMw
      //? deploy https://khushal87.hashnode.dev/linking-a-custom-domain-from-google-domains-to-vercel-app
      try {
        const response = await fetch('/api/mail', {
          method: 'post',
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log('data from api: ', data);
        if (data.status !== 'OK') {
          setError(data.message);
          return;
        } else {
          console.log('Email has been sent');
          setEmailSent(true);
        }
      } catch (err) {
        console.log('err: ', err);
        setError('Something went wrong: ', err);
      }
    }
  };

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
              {!emailSent && (
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg='12'>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Name'
                          autoComplete='off'
                          value={name}
                          name='name'
                          onChange={(event) => {
                            setError('');
                            setName(event.target.value);
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg='12'>
                      <div className='form-group'>
                        <input
                          type='email'
                          className='form-control'
                          placeholder='Email'
                          autoComplete='off'
                          name='email'
                          value={email}
                          onChange={(event) => {
                            setError('');
                            setEmail(event.target.value);
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg='12'>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Phone'
                          autoComplete='off'
                          value={phone}
                          name='phone'
                          onChange={(event) => {
                            setError('');
                            setPhone(event.target.value);
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg='12'>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Subject'
                          autoComplete='off'
                          value={subject}
                          name='subject'
                          onChange={(event) => {
                            setError('');
                            setSubject(event.target.value);
                          }}
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
                          autoComplete='off'
                          value={message}
                          name='message'
                          onChange={(event) => {
                            setError('');
                            setMessage(event.target.value);
                          }}
                        ></textarea>
                      </div>
                    </Col>
                    {error && (
                      <Col lg={12}>
                        <p className={styles.textRed}>{error}</p>
                      </Col>
                    )}
                    <Col lg='12'>
                      <Button type='submit'>Send Message</Button>
                    </Col>
                  </Row>
                </form>
              )}
              {emailSent && (
                <p>
                  Your email has been set. We will respond within 24 hrs during
                  normal business hours. Thank you!{' '}
                </p>
              )}
            </Col>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
