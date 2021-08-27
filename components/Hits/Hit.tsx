import styled from "styled-components";

export interface LayoutProps {
  title: string;
}

export const Hit = ({
  hit: { data_company, data_job, data_location },
}): React.ReactElement => {
  return (
    <tr>
      <Td>{data_job.job_title}</Td>
      <Td>{data_job.job_experience}</Td>
      <Td>{data_job.job_type}</Td>
      <Td>{data_job.job_description}</Td>
      <Td>{data_company.company_name}</Td>
      <Td>{data_company.company_industry}</Td>
      <Td>{data_location.location_country}</Td>
    </tr>
  );
};

const Td = styled.td``;
