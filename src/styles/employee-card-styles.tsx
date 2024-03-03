import styled from "styled-components";

const StyledListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  box-shadow: 0px 1px 2px 0px #00000033;
  @media (max-width: 768px) {
    display:none;
  }
`;

const StyledImage = styled.img`
  min-width: 34px;
  min-height: 34px;
  max-width: 40px;
  max-height: 40px;
  border-radius: 50%;
`;

const Text = styled.h3`
  color: black;
  width: 20%; 
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ContainerImg = styled.div`
  width: 12%;
  min-height: 49px;
  max-height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = styled.h3`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: black;
    width: 28%;
`;

export { StyledListItem, StyledImage, Text, ContainerImg, Name };
