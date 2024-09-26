<OverlayText>
    Immune Support
    <Button>Shop now</Button>
</OverlayText>

const OverlayText = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
color: white;
font-size: 3vw;
font-weight: bold;
text-align: center;
padding: 0 10px; 

@media (max-width: 768px) {
  font-size: 5vw; 
}
`;

const Button = styled.button`
background-color: #5e35b1;
color: white;
border: none;
padding: 10px 20px;
font-size: 3vw; 
margin-top: 20px;
cursor: pointer;
border-radius: 5px;

&:hover {
  background-color: #7e57c2;
}

@media (max-width: 768px) {
  font-size: 4vw; 
  padding: 8px 16px;
}
`;