import React from "react";
import styled from "styled-components";
import search from "../assets/icons/search.svg";

interface SearchBarProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchText, setSearchText }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <Container>
      <Text>Funcionários</Text>
      <InputDiv>
          <Input type="text" placeholder="Pesquisar" value={searchText} onChange={handleInputChange}/>
          <Img src={search} alt="search"/>
      </InputDiv>
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

const InputDiv = styled.div`
    display: flex;
    align-items: center;
    width: 287px;
    height: 48px;
    border-radius: 8px;
    border: 1px solid #DFDFDF;
    border-radius: 5px;
    padding: 12px, 16px, 12px, 16px;
    font-size: 16px;
    background-color: white;
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    margin-left: 15px;
    padding: 12px, 16px, 12px, 16px;
    font-size: 16px;
    background-color: transparent;
    outline: none;

    &::placeholder {
        color: #9E9E9E;
    }

    &:focus {
        &::placeholder {
            color: #000;
        }
    }
`;

const Img = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 15px;
    cursor: pointer;
`;

const Text = styled.h1`
    color: black;
    width: 20%; 
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
