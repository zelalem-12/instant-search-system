import { Request, Response } from 'express';

export default async ({ body }: Request, res: Response) => {
  const { searchTerm } = JSON.parse(body);
  let query = '';
  if (searchTerm) {
    query += `&search=${searchTerm}`;
  }
  if (query.length) {
    query = query.substring(1);
  }
  try {
    // const data = await fetch(`${API_URL}.json?${query}`);
    // const json = await data.json();
    // res.status(200).json(json);
    console.log('Are You Called');
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
