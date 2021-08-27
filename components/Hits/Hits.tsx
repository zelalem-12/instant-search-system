import { ReactElement } from "react";
import { Hit } from "./Hit";

export const Hits = ({ hits }): ReactElement => {
  return (
    <>
      {hits.map((item) => (
        <Hit key={item.data_company.company_id} item={item} />
      ))}
    </>
  );
};
