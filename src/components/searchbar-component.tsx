import React from "react";
import styled from "styled-components";
import search from "../assets/icons/search.svg";

const SearchBar: React.FC = () => {
  return (
    <Container>
      <Text>Funcionários</Text>
      <Input type="text" placeholder="Pesquisar" />
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: 95%;
    margin-top: 100px;
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 300px;
    height: 40px;
    border: 1px solid #00000033;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    outline: none;
    box-shadow: 0px 2px 8px 0px #00000033;
`;

const Text = styled.h1`
    color: black;
    width: 20%; 
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
