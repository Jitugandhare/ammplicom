import React from 'react';
import styled from 'styled-components';
import Image1 from "../Assets/featured/multi.jpg";
import Image3 from "../Assets/featured/nervous.webp";
import Image2 from "../Assets/featured/omega-3.jpg";
import Image4 from "../Assets/featured/Gastrointestinal.webp";
import Image5 from "../Assets/featured/Joint Health.avif";
import Image6 from "../Assets/featured/Household.avif";

const products = [
  { name: 'Multivitamins', image: Image1 },
  { name: 'Omega - 3', image: Image2 },
  { name: 'Nervous system support', image: Image3 },
  { name: 'Gastrointestinal Health', image: Image4 },
  { name: 'Joint Health', image: Image5 },
  { name: 'Household Essentials', image: Image6 },
];

const HealthProductsList = () => {
  return (
    <Container>
      <Heading>Proven Bestsellers</Heading>
      <br />
      <ProductList>
        {products.map((product, index) => (
          <ProductItem key={index}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
          </ProductItem>
        ))}
      </ProductList>
    </Container>
  );
};

export default HealthProductsList;

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const ProductList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    justify-content: center; 
    gap: 15px;
  }

  @media (max-width: 480px) {
    flex-direction: column; 
    align-items: center; 
    gap: 10px;
  }
`;

const ProductItem = styled.div`
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

const ProductImage = styled.img`
  border-radius: 50%;
  width: 180px; 
  height: 180px; 
  object-fit: cover;

  @media (max-width: 1024px) {
    width: 110px; 
    height: 110px; 
  }

  @media (max-width: 768px) {
    width: 100px; 
    height: 100px; 
  }

  @media (max-width: 480px) {
    width: 90px; 
    height: 90px; 
  }
`;

const ProductName = styled.p`
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
