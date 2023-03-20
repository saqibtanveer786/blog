import React from 'react';
import Post from './Post';
import '../css/latestPosts.css';

export default function LatestPosts() {
  return (
    <>
      <main>
        <div className="widget"></div>
        <div className="latestPostsContainer">
          <h1>Most Latest</h1>
          <div className="latestPosts">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </main>
    </>
  );
}
