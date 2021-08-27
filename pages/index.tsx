import { FC, ReactElement } from "react";
import { Layout } from "../components/layout";
import { SearchBox } from "../components/search";
import { Hits } from "../components/Hits";

import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  connectSearchBox,
  connectHits,
} from "react-instantsearch-dom";

const searchClient = algoliasearch(
  "RY8KA2GJPX",
  "13e751a21f2ae69d7ccb7b590a0a9b3a"
);
const CustomSearchBox = connectSearchBox(SearchBox);
const CustomeHits = connectHits(Hits);

export const Home: FC = (): ReactElement => {
  return (
    <Layout title="Home">
      <InstantSearch searchClient={searchClient} indexName="dev_jobs_index">
        <CustomSearchBox autoFocus searchAsYouType={false} />

        <CustomeHits />
      </InstantSearch>
    </Layout>
  );
};

export default Home;
