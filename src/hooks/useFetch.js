import { useState, useEffect } from 'react';

export default function Fetch(endPoint) {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoader(true);
      const Data = await fetch(endPoint);
      const jsonData = await Data.json();
      setLoader(false);
      setData(jsonData);
    } catch (error) {
      setLoader(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return { data, loader, error };
}
