import React from 'react';
import styled from 'styled-components';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <ProductImage src={product.image} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>
        {product.oldPrice && <OldPrice>Rs. {product.oldPrice}</OldPrice>}
        {product.priceRange ? (
          <DiscountPrice>Rs. {product.priceRange}</DiscountPrice>
        ) : (
          <DiscountPrice>Rs. {product.price}</DiscountPrice>
        )}
      </ProductPrice>
      <Button>Add to Cart</Button>
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  width: 250px;
  margin: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const ProductImage = styled.img`
  width: 100px;
  height: 200px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
  }
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ProductPrice = styled.p`
  font-size: 20px;
  color: #673ab7;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const OldPrice = styled.span`
  color: #e53935;
  text-decoration: line-through;
  margin-right: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const DiscountPrice = styled.span`
  color: #388e3c;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  background-color: #673ab7;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;

  &:hover {
    background-color: #5e35b1;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
    font-size: 18px;
  }
`;
