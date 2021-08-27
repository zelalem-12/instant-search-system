import styled from "styled-components";

export const Hit = ({ item }): React.ReactElement => {
  return (
    <SearchList key={item.data_company.company_id}>
      <SearchListItem>
        <ul>
          <List>company_id: {item.data_company.company_id}</List>
          <List>company_industry: {item.data_company.company_industry}</List>
          <List>company_name: {item.data_company.company_name}</List>
          <List>company_size: {item.data_company.company_size}</List>
          <List>
            company_type:
            {item.data_company.company_type}
          </List>
        </ul>
      </SearchListItem>
      <SearchListItem className="search-list-item">
        <ul>
          <List>job_title: {item.data_job.job_title}</List>
          <List>job_type: {item.data_job.job_type}</List>
          <List>job_pubListshed_at: {item.data_job.job_updated_at}</List>
          <List>job_updated_at: {item.data_job.job_updated_at}</List>
          <List>job_url: {item.data_job.job_url}</List>
          <List>job_viewse: {item.data_job.job_views}</List>
          <List>job_wage: {item.data_job.job_wage}</List>
        </ul>
      </SearchListItem>
      <SearchListItem>
        <ul>
          <List>
            location_address_1: {item.data_location.location_address_1}
          </List>
          <List>
            location_address_2: {item.data_location.location_address_2}
          </List>
          <List>company_name: {item.data_location.company_name}</List>
          <List>location_city: {item.data_location.location_city}</List>
          <List>location_country: {item.data_location.location_country}</List>
          <List>location_postcode: {item.data_location.location_postcode}</List>
        </ul>
      </SearchListItem>
    </SearchList>
  );
};

const SearchList = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 1rem 3rem;
  border: #fff solid 0.2rem;
  border-radius: 2rem;
  padding: 2rem 2rem;
  background-color: #f1f1f1;
`;

const SearchListItem = styled.div`
  max-width: 33%;
  text-align: left;
  background-color: #fff;
  padding: 1rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 0.5rem #888888;
`;

const List = styled.li`
  list-style: none;
  text-decoration: none;
  padding: 0.5rem;
  border-bottom: #888888 dashed 0.1rem;
`;
