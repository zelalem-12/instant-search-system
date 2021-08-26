import { FC, ReactElement, KeyboardEvent, ChangeEvent } from 'react';
import styled from 'styled-components';

export interface SearchBoxProps {
  searchTerm: string;
  onSearch: () => void;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  // onTypingMessage: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox: FC<SearchBoxProps> = ({
  searchTerm,
  changeHandler,
  onSearch,
}): ReactElement => {
  return (
    <SearchBoxContainer>
      <Header1>inploi Test Application</Header1>
      <FormContainer>
        <Input
          type="text"
          placeholder="Search for anything..."
          value={searchTerm}
          onChange={changeHandler}
        />
        <Button onClick={onSearch}>Search</Button>
      </FormContainer>
    </SearchBoxContainer>
  );
};

const SearchBoxContainer = styled.div`
  width: 100%;
  height: 760px;
  top: 0;
  left: 0;
  text-align: center;
  overflow: auto;
  background-image: linear-gradient(
    to right,
    #4f48e0,
    #5300c1,
    #6d00bc,
    #8200b8,
    #a6417e,
    #cc2389
  );
`;
const Header1 = styled.h1`
  position: relative;
  top: 30%;
  color: #fff;
  font-weight: bold;
  font-size: 4rem;
  padding-bottom: 5rem;
`;
const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 35%;
  width: 84%;
  left: 8%;
  border: 0.04rem solid #222;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 2rem;
`;

const Input = styled.input`
  width: 85%;
  margin-right: 0.5rem;
  padding: 0.5rem;
  border: 0;
  font-size: large;
  font-weight: bold;
  outline: none;
`;

const Button = styled.button`
  width: 12%;
  padding: 2rem;
  border: 0;
  border-radius: 1rem;
  background-color: rgb(38, 9, 226);
  display: flex;
  text-align: center;
  justify-content: center;
  color: #fff;
  &:hover {
    background-color: rgb(38, 9, 26);
  }
`;
