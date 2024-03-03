import styled, {keyframes, css} from 'styled-components';
import { ContainerClosedProps } from '../interfaces/containerclosedprops-interface.tsx';

const slideIn = keyframes`
  from {height: 0;}
  to {height: 120px;}
`;

const ContainerOpen = styled.div`
  background-color: #fff;
  display: none;
  transition: height 0.3s ease; 
  animation: ${slideIn} 0.3s ease forwards;
  padding-bottom: 25px;

  @media (max-width: 768px) {
    display: block;
    flex-direction: column;
  }
`;

const ContainerClosed = styled.div<ContainerClosedProps>`
  display: none;
  flex-direction: column; 
  justify-content: space-between;
  transition: height 0.3s ease; 

  @media (max-width: 768px) {
    display: flex;
  }

  ${({ showModal }) => showModal && css`
    box-shadow: none; 
  `}
`;

const ContentClosed = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 60px;
  box-shadow: 1px 1px 2px 1px #00000033;
`;

const ContentOpen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  height: 120px;
  padding: 0 20px;
`;

const OpenCloseButton = styled.img`
  width: 32px;
  height: 32px;
`;

const ContainerText = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed #DFDFDF;
  align-items: flex-start;
`;

const Title = styled.h3`
  font-weight: bold;
  margin: 0; 
  align-self: flex-end; 

`;

const Image = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
`;

const Container = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h3`
  margin: 0;
`;

export { ContainerOpen, ContainerClosed, ContentOpen, ContentClosed, OpenCloseButton, Text, Image, Container, Title, ContainerText};
