import type { NextApiRequest, NextApiResponse } from "next";
import data from "./data.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { lat, long } = req.query;
    const findLat: any = data.find((el: any) => {
      return el.lat === lat;
    });
    const findLong: any = data.find(() => {
      return findLat.long === long;
    });
    if (findLat && findLong) {
      res.status(200).json(findLat);
    } else res.status(500).end(`Method ${req.method} Not Allowed`);
  } else {
    res.status(500).end(`Method ${req.method} Not Allowed`);
  }
}
