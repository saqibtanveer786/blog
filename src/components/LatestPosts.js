import React, { useEffect, useState } from 'react';
import Post from './Post';
// import useFetch from '../hooks/useFetch';
import '../css/latestPosts.css';

export default function LatestPosts() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/blogposts/allposts')
      .then((value) => {
        return value.json();
      })
      .then((value2) => {
        setData(value2);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <main>
        <div className="widget"></div>
        <div className="latestPostsContainer">
          <h1>Most Latest</h1>
          <div className="latestPosts">
            {data &&
              data.map((post) => {
                console.log(post);
                return <Post key={post._id} {...post} />;
              })}
          </div>
        </div>
      </main>
    </>
  );
}
