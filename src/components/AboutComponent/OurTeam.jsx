import React from 'react';
import './OurTeam.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import person1 from '../../assets/person1.jpg';
import person2 from '../../assets/person2.jpg';
import person3 from '../../assets/person3.jpg';

const teamMembers = [
  { name: 'KEVIN WEST', img: person1 },
  { name: '', img: person2 },
  { name: '', img: person3 },
];

const OurTeam = () => {
  return (
    <Container fluid className="our-team">
      <div className="text-center">
        <h2>OUR TEAM</h2>
        <h3>
          PROFESSIONAL <span className="highlight">TEAM</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
        </p>
      </div>
      <Row>
        {teamMembers.map((member, index) => (
          <Col md={4} key={index} className="team-member">
            <Card className="team-card">
              <Card.Img variant="top" src={member.img} alt={member.name} />
              {member.name && <div className="team-name">{member.name}</div>}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurTeam;
