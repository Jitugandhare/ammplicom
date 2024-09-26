import React from 'react';
import styled from 'styled-components';
import Image1 from '../Assets/Infosection/img-1.png'

const InfoSection = () => {
    return (
        <Container>
            <ImageWrapper>
                <Image src={Image1} alt="Info Image" />
            </ImageWrapper>
            <TextWrapper>
                <Paragraph>
                    <h1>Lorem ipsum heading main patterns</h1>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                    fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                    rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis
                    eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                    elementum semper nisi. Aenean vulputate eleifend tellus. Aenean
                    leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                    lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                    viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
                    imperdiet.
                </Paragraph>
                <KnowMoreButton>Know More</KnowMoreButton>
            </TextWrapper>
        </Container>
    );
};

export default InfoSection;


const Container = styled.div`
  display: flex;
  align-items: flex-start; 
  height: 100%;
  padding: 20px;
  width: 84%;
  margin: auto; 
  gap: 0; 

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center; 
  }
`;

const ImageWrapper = styled.div`
  flex: 1; 
  max-width: 100%; 
  height: 600px;
`;

const Image = styled.img`
  max-width: 90%; 
  height: auto; 
  border-radius: 8px; 
`;

const Paragraph = styled.p`
  font-size: 1.2rem; 
  margin: 0; 
  margin-bottom: 10px; 

  @media (max-width: 768px) {
    text-align: center; 
  }
`;

const TextWrapper = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  max-width: 50%; 
`;

const KnowMoreButton = styled.button`
  background-color: #673ab7; 
  color: white;
  width: 40%; 
  border: none;
  padding: 10px 15px;
  margin-top:50px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5e35b1; 
  }

  @media (max-width: 768px) {
    width: 100%; 
  }
`;
