import Layout from '@/components/Layout';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
//import Accordion from 'react-bootstrap/Accordion';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

import { FaAngleDown } from 'react-icons/fa';

export default function FAQPage() {
  return (
    <Layout>
      <div className='page-title-area item-bg1'>
        <Container>
          <h1>FAQs</h1>
          <ul>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>FAQ</li>
          </ul>
        </Container>
      </div>

      <section className='team-details-area ptb-120'>
        <Container>
          <Row className='align-items-center'>
            <Col>
              <div className='section-title'>
                <span>Frequently Asked Questions</span>
                <h2>You Asked, We answered</h2>
              </div>
            </Col>
          </Row>
          <Row className='h-100 align-items-center'>
            <Col lg='12'>
              <div className='team-details-info'>
                <h3>This is question number one.</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  at ultricies felis. Fusce gravida tempor pretium. Nunc auctor
                  ex eget tempor accumsan. Vestibulum elementum at nulla ut
                  tempor. Sed interdum auctor enim, non sagittis magna pharetra
                  eget. Vestibulum eget molestie augue, non eleifend nunc.
                  Aliquam venenatis, nisl sed porttitor feugiat, lectus elit
                  blandit augue, eu auctor leo ipsum non velit.
                </p>
              </div>
            </Col>
            <Col lg='12' className='pt-5'>
              <div className='team-details-info'>
                <h3>This is question number two.</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  at ultricies felis. Fusce gravida tempor pretium. Nunc auctor
                  ex eget tempor accumsan. Vestibulum elementum at nulla ut
                  tempor. Sed interdum auctor enim, non sagittis magna pharetra
                  eget. Vestibulum eget molestie augue, non eleifend nunc.
                  Aliquam venenatis, nisl sed porttitor feugiat, lectus elit
                  blandit augue, eu auctor leo ipsum non velit.
                </p>
              </div>
            </Col>
            <Col lg='12' className='pt-5'>
              <div className='team-details-info'>
                <h3>This is question number three.</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  at ultricies felis. Fusce gravida tempor pretium. Nunc auctor
                  ex eget tempor accumsan. Vestibulum elementum at nulla ut
                  tempor. Sed interdum auctor enim, non sagittis magna pharetra
                  eget. Vestibulum eget molestie augue, non eleifend nunc.
                  Aliquam venenatis, nisl sed porttitor feugiat, lectus elit
                  blandit augue, eu auctor leo ipsum non velit.
                </p>
              </div>
            </Col>
            <Col lg='12' className='pt-5'>
              <div className='team-details-info'>
                <h3>This is question number four.</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  at ultricies felis. Fusce gravida tempor pretium. Nunc auctor
                  ex eget tempor accumsan. Vestibulum elementum at nulla ut
                  tempor. Sed interdum auctor enim, non sagittis magna pharetra
                  eget. Vestibulum eget molestie augue, non eleifend nunc.
                  Aliquam venenatis, nisl sed porttitor feugiat, lectus elit
                  blandit augue, eu auctor leo ipsum non velit.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section className='faq-area ptb-120'>
        <Container>
          <div className='section-title'>
            <span>Frequently Asked Questions</span>
            <h2>You Asked, We answered</h2>
            <div className='faq-accordion'>
              <h3>This is question number one.</h3>
            </div>

            <div className='faq-accordion'>
            <Accordion defaultActiveKey='0'>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey='0'
                  className={styles.expand}
                >
                  <FaAngleDown size={28} className='mr-2' />
                  This is a question...
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='0'>
                  <Card.Body>Hello! Here is the answer</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey='1'
                  className={styles.expand}
                >
                  <FaAngleDown size={28} className='mr-2' />
                  This is a question...
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='1'>
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey='2'
                  className={styles.expand}
                >
                  <FaAngleDown size={28} className='mr-2' />
                  This is a question...
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='2'>
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </Container>
      </section> */}
    </Layout>
  );
}
