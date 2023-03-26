import { useState, useEffect } from 'react';

export default async function Fetch(endPoint) {
  const [data, setData] = useState([]);
  // const [loader, setLoader] = useState(false);
  // const [error, setError] = useState(null);

  async function fetchData() {
    try {
      // setLoader(true);
      const response = await fetch(endPoint);
      const jsonData = await response.json();
      // setLoader(false);
      setData(jsonData);
      return data;
    } catch (error) {
      // setLoader(false);
      // setError(error);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line
    return fetchData();
  });
}
