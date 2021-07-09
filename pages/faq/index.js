import Layout from '@/components/Layout';
import styles from '@/styles/Home.module.css';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';

import { FaCaretDown } from 'react-icons/fa';

export default function FAQPage() {
  return (
    <Layout>
      <h1 style={{ marginTop: '50px' }}>My FAQ</h1>

      {/**********************
                 FAQs
        ***********************/}

      <section className='faqs welcome-services ptb-120 bg-38d16a'>
        <Container>
          <div className='section-title'>
            <h2>FAQ's</h2>
          </div>
          <Row>
            <Col>
              <Accordion defaultActiveKey='0'>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey='0'
                    className={styles.expand}
                  >
                    This is a question...
                    <FaCaretDown size={28} />
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
                    This is a question...
                    <FaCaretDown size={28} />
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
                    This is a question...
                    <FaCaretDown size={28} />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='2'>
                    <Card.Body>Hello! I'm another body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}
