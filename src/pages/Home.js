import React from 'react';
import Hero from '../components/Hero';
import LatestPosts from '../components/LatestPosts';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <>
      <Hero />
      <div
        className="homeSide&Posts"
        style={{
          display: 'flex',
          paddingBlockStart: '10vh',
          paddingInlineStart: '10px',
        }}
      >
        <Sidebar />
        <LatestPosts />
      </div>
    </>
  );
}
