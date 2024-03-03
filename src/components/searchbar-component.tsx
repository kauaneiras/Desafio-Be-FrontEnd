import React from "react";
import search from "../assets/icons/search.svg";
import { Container, InputDiv, Input, Img, Text } from "../styles/searchbar-styles.tsx";
import { SearchBarProps } from "../interfaces/searchbarprops-interface.tsx";

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