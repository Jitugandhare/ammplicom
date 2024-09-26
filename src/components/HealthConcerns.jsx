import React from 'react';
import styled from 'styled-components';
import Image1 from "../Assets/HealthConcern/die.jpg";
import Image2 from "../Assets/HealthConcern/heart.jpg";
import Image3 from "../Assets/HealthConcern/stomac.jpg";
import Image4 from "../Assets/HealthConcern/liver.jpg";
import Image5 from "../Assets/HealthConcern/joint.jpg";
import Image6 from "../Assets/HealthConcern/kidney.jpg"

const concerns = [
  { name: 'Diabetes', image: Image1 },
  { name: 'Heart Care', image: Image2 },
  { name: 'Stomach Care', image: Image3 },
  { name: 'Liver Care', image: Image4 },
  { name: 'Bone, Joint & Muscle Care', image: Image5 },
  { name: 'Kidney Care', image: Image6 },
];

const HealthConcerns = () => {
  return (
    <Container>
      <Heading>Shop by Health Concerns</Heading>
      <ConcernList>
        {concerns.map((concern, index) => (
          <ConcernItem key={index}>
            <ConcernImage src={concern.image} alt={concern.name} />
            <ConcernName>{concern.name}</ConcernName>
          </ConcernItem>
        ))}
      </ConcernList>
    </Container>
  );
};

export default HealthConcerns;

const Container = styled.div`
// border:2px solid red;
  padding: 20px;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const ConcernList = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    flex-direction: column; 
    align-items: center; 
    gap: 10px;
  }
`;

const ConcernItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;

  @media (max-width: 1024px) {
    width: 130px;
  }

  @media (max-width: 768px) {
    width: 120px;
  }

  @media (max-width: 480px) {
    width: auto; 
  }
`;

const ConcernImage = styled.img`
  border-radius: 8px;
  width: 180px;
  height: 180px;
  object-fit: cover;

  @media (max-width: 1024px) {
    width: 90px;
    height: 90px;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 480px) {
    width: 70px;
    height: 70px;
  }
`;

const ConcernName = styled.p`
  margin-top: 10px;
  font-size: 1rem;

  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
