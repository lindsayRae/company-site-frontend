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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('heard');

    if (!name) {
      setError('You must include a name');
      return;
    }
    if (!email) {
      setError('You must include a email');
      return;
    }
    if (!phone) {
      setError('You must include a phone');
      return;
    }
    if (!subject) {
      setError('You must include a subject');
      return;
    }
    if (!message) {
      setError('You must include a message');
      return;
    }

    let body = {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    };

    console.log(body);
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //       'Content-type': 'application/json',
    //     },
    //     body: JSON.stringify(body),
    //   });

    //   const data = await response.json();

    //   if (data.status !== 200) {
    //     setError(data.message);
    //     return;
    //   } else {
    //     setMessageSent(true);
    //   }
    // } catch (err) {
    //   setError('Something went wrong: ', err);
    //   setMessageSent(false);
    // }
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
            </Col>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
