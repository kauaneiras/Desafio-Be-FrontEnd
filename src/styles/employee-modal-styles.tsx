import styled from 'styled-components';

const ContainerOpen = styled.div`
  background-color: #fff;
  display: none;
  @media (max-width: 768px) {
    display: block;
    flex-direction: column;
  }
`;

const ContainerClosed = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
  flex-direction: column; 
`;

const ContentClosed = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 60px;
  padding: 0 20px;
`;

const ContentOpen = styled.div`

`;



const CloseButton = styled.span`
 
`;

const OpenButton = styled.button`

`;

const Image = styled.img`
    width: 34px;
    height: 34px;
    border-radius: 50%;
`;

const Text = styled.p``;

export { ContainerOpen, ContainerClosed, ContentOpen, ContentClosed, CloseButton, OpenButton, Text, Image};
