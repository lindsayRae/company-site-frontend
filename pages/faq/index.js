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

      <section className='faq-area ptb-120'>
        <Container>
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
      </section>
    </Layout>
  );
}
