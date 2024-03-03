import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f0f0f0;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-y: auto;
  background-color: white;
  border-radius: 0px 0px 8px 8px;
  &::-webkit-scrollbar {
    width: 0.05em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  &:hover {
    scrollbar-width: thin;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

const StyledList = styled.ul`
  width: 100%;
  max-height: 500px;
`;

export { Container, StyledContent, StyledList, Content};