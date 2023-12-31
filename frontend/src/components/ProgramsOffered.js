import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import '../styles/ProgramsOffered.css'
import interactions from '../images/interactions.jpg'
import mentorship from '../images/mentorship.jpg'
const programsData = [
  {
    id: 1,
    title: 'Mentorship',
    description: 'Mentorship for children in orphanages provides invaluable guidance, support, and encouragement. Through caring mentors, these children receive opportunities to develop essential life skills, build confidence, and foster meaningful connections that can positively impact their future',
    image: mentorship, // Replace this path with the actual image path
  },
  {
    id: 2,
    title: 'Interactions',
    description: 'Interaction events create heartwarming moments for the elderly and children in orphanages, as they get a chance to meet caring individuals who bring joy, laughter, and companionship. These meaningful interactions foster a sense of belonging and provide a source of happiness and cherished memories.',
    image: interactions, // Replace this path with the actual image path
  },
  
];

const ProgramsOffered = () => {
  return (
     <div className="programs" style={{ paddingTop: '5rem' }} id = "programsOffered">
      <h2>Programs Offered</h2>
      <Row>
        {programsData.map((program) => (
          <Col key={program.id} lg={4} md={6} sm={12} className="mb-4">
            <Card>
              <Card.Img variant="top" src={program.image} alt={program.title} />
              <Card.Body>
                <Card.Title>{program.title}</Card.Title>
                <Card.Text>{program.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProgramsOffered;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import '../styles/ProgramsOffered.css'
import interactions from '../images/interactions.jpg'
import mentorship from '../images/mentorship.jpg'
const programsData = [
  {
    id: 1,
    title: 'Mentorship',
    description: 'Mentorship for children in orphanages provides invaluable guidance, support, and encouragement. Through caring mentors, these children receive opportunities to develop essential life skills, build confidence, and foster meaningful connections that can positively impact their future',
    image: mentorship, // Replace this path with the actual image path
  },
  {
    id: 2,
    title: 'Interactions',
    description: 'Interaction events create heartwarming moments for the elderly and children in orphanages, as they get a chance to meet caring individuals who bring joy, laughter, and companionship. These meaningful interactions foster a sense of belonging and provide a source of happiness and cherished memories.',
    image: interactions, // Replace this path with the actual image path
  },
  
];

const ProgramsOffered = () => {
  return (
     <div className="programs" style={{ paddingTop: '5rem' }} id = "programsOffered">
      <h2>Programs Offered</h2>
      <Row>
        {programsData.map((program) => (
          <Col key={program.id} lg={4} md={6} sm={12} className="mb-4">
            <Card>
              <Card.Img variant="top" src={program.image} alt={program.title} />
              <Card.Body>
                <Card.Title>{program.title}</Card.Title>
                <Card.Text>{program.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProgramsOffered;