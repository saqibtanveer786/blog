import React, { useContext } from 'react';
import Post from './Post';
import '../css/latestPosts.css';
import BlogContext from '../context/BlogContext';
import { useEffect } from 'react';

export default function LatestPosts() {
  const { posts, getAllPosts } = useContext(BlogContext);

  //Initializing API Call For Getting Posts.
  useEffect(() => {
    const returnValue = getAllPosts(
      'http://localhost:5000/api/v1/blogposts/allposts'
    );

    console.log(returnValue);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <main className="latestPostsMain">
        <div className="widget"></div>
        {/* <h1>Most Latest</h1> */}
        <div className="latestPostsContainer">
          <div className="latestPosts">
            {posts &&
              posts.map((post) => {
                return <Post key={post._id} {...post} />;
              })}
          </div>
        </div>
      </main>
    </>
  );
}
