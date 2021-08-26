import { FC, ReactElement, useState } from 'react';

import { Job } from '../lib/api';
import { Layout } from '../components/layout';
import { SearchBox } from '../components/search';

interface HomeProps {
  jobs: Job[];
}

export const Home: FC<HomeProps> = ({ jobs }): ReactElement => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobList, setJobList] = useState(jobs);
  const handleSearch = () => {
    setJobList(jobs);
    // fetch('/api', {
    //   method: 'post',
    //   body: JSON.stringify({
    //     searchTerm,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then(setJobList)
    //   .catch(console.log);
  };

  const changeHandler = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };
  return (
    <Layout title="Home">
      <SearchBox
        searchTerm={searchTerm}
        changeHandler={changeHandler}
        onSearch={handleSearch}
      />
      <div className="responsive">
        {jobList.map((job) => (
          <h3 key={job.id} {...job} />
        ))}
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  try {
    // const data = await fetch(`${API_URL}.json`);
    // const json = await data.json();
    return {
      props: {
        jobs: [],
      },
    };
  } catch (err) {
    return {
      props: {
        jobs: [],
      },
    };
  }
};

export default Home;
