import React from 'react';
import Sidebar from '../components/Sidebar';
import '../css/dashboard.css';
import LatestPosts from '../components/LatestPosts';

export default function Dashboard() {
  return (
    <>
      <div className="mainContainer">
        <Sidebar />
        <div className="mainStuff">
          <div className="dashboardTop"></div>
          <LatestPosts />
        </div>
      </div>
    </>
  );
}
