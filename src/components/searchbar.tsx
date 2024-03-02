import React from "react";
import styled from "styled-components";

const SearchBar: React.FC = () => {
  return (
    <Search>
      <Input type="text" placeholder="Search" />
    </Search>
  );
};


export default SearchBar;

const Search = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
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
