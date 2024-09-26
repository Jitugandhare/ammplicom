import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import ProductImage1 from '../Assets/CardImage/img-1.jpg';
import ProductImage2 from '../Assets/CardImage/img-2.jpg';
import ProductImage3 from '../Assets/CardImage/img-3.jpg';
import ProductImage4 from '../Assets/CardImage/img-4.jpg';
import ProductImage5 from '../Assets/CardImage/img-5.jpg';
import ProductImage6 from '../Assets/CardImage/img-6.jpg';
import ProductImage7 from '../Assets/CardImage/img-10.avif';
import ProductImage8 from '../Assets/CardImage/img-8.jpg';
import ProductImage9 from '../Assets/CardImage/img-9.jpg';


const products = [
    {
        id: 1,
        image: ProductImage1,
        title: 'Arterosil HP by Calroy 60 capsules',
        oldPrice: 99.00,
        price: 84.00,
    },
    {
        id: 2,
        image: ProductImage2,
        title: 'Allergy Research Group Nattokinase',
        oldPrice: 115.99,
        price: 84.00,
    },
    {
        id: 3,
        image: ProductImage3,
        title: 'Nordic Naturals ProOmega 2000',
        priceRange: '62.44 - 112.99',
    },
    {
        id: 4,
        image: ProductImage4,
        title: 'Pure Encapsulations Magnesium (glycinate)',
        priceRange: '30.36 - 97.44',
    },
    {
        id: 5,
        image: ProductImage5,
        title: 'Pure Encapsulations Magnesium (glycinate)',
        priceRange: '30.36 - 97.44',
    },{
        id: 6,
        image: ProductImage6,
        title: 'Pure Encapsulations Magnesium (glycinate)',
        priceRange: '30.36 - 97.44',
    },{
        id: 7,
        image: ProductImage7,
        title: 'Pure Encapsulations Magnesium (glycinate)',
        priceRange: '30.36 - 97.44',
    },{
        id: 8,
        image: ProductImage8,
        title: 'Pure Encapsulations Magnesium (glycinate)',
        priceRange: '30.36 - 97.44',
    },
    {
        id: 9,
        image: ProductImage9,
        title: 'Pure Encapsulations Magnesium (glycinate)',
        priceRange: '30.36 - 97.44',
    },
  
];

const MainCarousel = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 2;
        }
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = direction === 'right' ? clientWidth : -clientWidth;
            const newScrollPosition = scrollLeft + scrollAmount;

            scrollRef.current.scrollTo({ left: newScrollPosition, behavior: 'smooth' });

            setTimeout(() => {
                if (newScrollPosition <= 0) {
                    scrollRef.current.scrollTo({ left: scrollRef.current.scrollWidth / 2, behavior: 'auto' });
                } else if (newScrollPosition >= scrollRef.current.scrollWidth) {
                    scrollRef.current.scrollTo({ left: scrollRef.current.scrollWidth / 2, behavior: 'auto' });
                }
            }, 1000);
        }
    };

    return (
        <CarouselContainer>
            <Button onClick={() => scroll('left')} left>&lt;</Button>
            <ProductGrid ref={scrollRef}>
                {[...products, ...products].map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ProductGrid>
            <Button onClick={() => scroll('right')}>&gt;</Button>
        </CarouselContainer>
    );
};

export default MainCarousel;

const CarouselContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 20px;
`;

const ProductGrid = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    gap: 20px;
    width: calc(100% - 100px); 

    & > div {
        min-width: 180px;
        flex: 0 0 auto;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); 
    }

    &::-webkit-scrollbar {
        display: none; 
    }

    @media (max-width: 768px) {
        & > div {
            min-width: 150px;
        }
    }

    @media (max-width: 480px) {
        & > div {
            min-width: 120px;
        }
    }
`;

const Button = styled.button`
  background-color: white; 
  color: black;
  border: none;
  border-radius: 5px;
  padding: 15px 20px; 
  cursor: pointer;
  margin: 0 10px;
  font-size: 35px; 
  transition: background-color 0.3s, box-shadow 0.3s;

`;
