import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterSection>
          <h3>Company</h3>
          <ul>
            <li><a href="#why">Why shop with us?</a></li>
            <li><a href="#shipping">Shipping</a></li>
            <li><a href="#returns">Returns</a></li>
            <li><a href="#about">About us</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Security & Privacy</h3>
          <ul>
            <li><a href="#secure">Secure Website</a></li>
            <li><a href="#pci">PCI Compliance</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Subscribe</h3>
          <SubscribeSection>
            <form>
              <label htmlFor="email">Email address:</label>
              <InputWrapper>
                <input type="email" id="email" placeholder="Email address" required />
                <button type="submit">Sign up</button>
              </InputWrapper>
            </form>
          </SubscribeSection>
        </FooterSection>

        <DisclaimerSection>
          <p>
            *Statements made on this website have not been evaluated by the U.S.
            Food and Drug Administration. These products are not intended to
            diagnose, treat, cure, or prevent any disease. Information provided
            by this website or this company is not a substitute for individual
            medical advice.
          </p>
        </DisclaimerSection>
      </FooterGrid>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #4b006e; 
  color: white;
  padding: 40px 20px;
`;

const FooterGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px;

  h3 {
    font-size: 1.8rem; 
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px; 
    font-size: 1rem; 
  }

  a {
    color: white;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SubscribeSection = styled.div`
  form {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 8px; 
      font-size: 1rem; 
    }
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    padding: 12px; 
    margin-bottom: 12px; 
    border-radius: 4px;
    border: none;
    width: 90%; 
    font-size: 1rem; 
  }

  button {
    background-color: transparent;
    color: white;
    border: 2px solid white; 
    border-radius: 5px;
    padding: 12px; 
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem; 
    transition: background-color 0.3s; 
    width: 100px; 

    &:hover {
      background-color: #d3c0f0;
    }
  }
`;

const DisclaimerSection = styled.div`
  max-width: 300px;
  font-size: 1rem; 
  line-height: 1.5;
  margin-top: 10px;

  @media (max-width: 768px) {
    margin-top: 20px;
    text-align: left;
    max-width: 100%; 
  }
`;
