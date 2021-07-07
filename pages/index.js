import Layout from '@/components/Layout';
import { Jumbotron, Container, Row, Col, Button } from 'react-bootstrap';
import styles from '@/styles/Home.module.css';

export default function HomePage() {
  return (
    <Layout>
      <Jumbotron className={styles.showcase}>
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
    </Layout>
  );
}
