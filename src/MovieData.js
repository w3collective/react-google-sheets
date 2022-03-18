import React, { useState } from "react";
import Papa from "papaparse";

const MovieData = () => {
  const [data, setData] = useState({});
  Papa.parse("https://docs.google.com/spreadsheets/d/1SJ8LxWmaxKBTgDJLvfD9NZLctBT931x19--qH2yLxck/pub?output=csv", {
    download: true,
    header: true,
    complete: (results) => {
      setData(results.data);
    },
  });
  const movies = Array.from(data);
  return (
    <ul>
      {movies.map((data) => (
        <li key={data.movie}>
          {data.movie} ({data.year}) - Rating {data.rating}
        </li>
      ))}
    </ul>
  );
};
export default MovieData;
