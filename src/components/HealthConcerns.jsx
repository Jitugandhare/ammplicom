import React from 'react';
import styled from 'styled-components';

const concerns = [
  { name: 'Diabetes', image: 'https://via.placeholder.com/100' },
  { name: 'Heart Care', image: 'https://via.placeholder.com/100' },
  { name: 'Stomach Care', image: 'https://via.placeholder.com/100' },
  { name: 'Liver Care', image: 'https://via.placeholder.com/100' },
  { name: 'Bone, Joint & Muscle Care', image: 'https://via.placeholder.com/100' },
  { name: 'Kidney Care', image: 'https://via.placeholder.com/100' },
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;

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
  width: 150px;

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
  width: 150px;
  height: 150px;
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
