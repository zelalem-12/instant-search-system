import { ReactElement } from "react";
import styled from "styled-components";
import { Hit } from "./Hit";

export const Hits = ({ hits }): ReactElement => {
  return (
    <>
      <ResultHeader>
        <Header3>companey Data</Header3>
        <Header3>Data Job</Header3>
        <Header3>Data Location</Header3>
      </ResultHeader>
      {hits.map((item) => (
        <Hit key={item.data_company.company_id} item={item} />
      ))}
    </>
  );
};

const ResultHeader = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 0 12rem;
  margin-top: 2rem;
  color: #fff; ;
`;

const Header3 = styled.h3`
  max-width: 33%;
  text-align: left;
  border-bottom: #fff solid 0.2r;
`;
