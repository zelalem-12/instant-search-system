import { FC, ReactElement, useState, KeyboardEvent, ChangeEvent } from "react";
import styled from "styled-components";

interface SearchBoxType {
  refine: (term: string) => void;
}

export const SearchBox: FC<SearchBoxType> = ({ refine }): ReactElement => {
  const [searchTerm, setSearchTerm] = useState("");

  const onKeyEnterSendMessage = (
    event: KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.code === "Enter") {
      refine(searchTerm);
    }
  };
  const onChangeEvent = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const value = event.target.value || "";
    setSearchTerm(value);
  };
  if (!searchTerm) refine("");
  return (
    <SearchBoxContainer>
      <Header1>inploi Test Application</Header1>
      <FormContainer>
        <Input
          type="search"
          placeholder="Search for anything..."
          value={searchTerm}
          onChange={onChangeEvent}
          onKeyDown={onKeyEnterSendMessage}
        />
        <Button onClick={() => refine(searchTerm)}>Search</Button>
      </FormContainer>
    </SearchBoxContainer>
  );
};

const SearchBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 760px;
  top: 0;
  left: 0;
  text-align: center;
  background: rgba(1, 117, 255, 1);
  background: -webkit-linear-gradient(
    bottom left,
    rgba(1, 117, 255, 1),
    rgba(255, 1, 52, 1)
  );
  background: -moz-linear-gradient(
    bottom left,
    rgba(1, 117, 255, 1),
    rgba(255, 1, 52, 1)
  );

  background: linear-gradient(
    to right,
    rgba(1, 100, 250, 1),
    rgba(200, 1, 52, 0.8)
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
  padding: 0.2rem;
  border: 0;
  font-size: large;
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
  font-size: 2rem;
  font-weight: bold;
`;
