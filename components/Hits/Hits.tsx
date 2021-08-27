import { ReactElement } from "react";
import styled from "styled-components";
import { Hit } from "./Hit";

export const Hits = ({ hits }): ReactElement => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Job Title</Th>
          <Th>Job Experiance </Th>
          <Th>Job Type</Th>
          <Th>Job Desctption</Th>
          <Th>Company Name</Th>
          <Th>Company Industry</Th>
          <Th>Location </Th>
        </tr>
      </thead>
      <tbody>
        {hits.map((hit, key) => (
          <Hit key={key} hit={hit} />
        ))}
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: helvetica;
`;

const Th = styled.th`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
  background: hsl(20, 50%, 70%);
`;
