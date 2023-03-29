import React from 'react';
import Sidebar from '../components/Sidebar';
import '../css/dashboard.css';
import LatestPosts from '../components/LatestPosts';
import CategoryCards from '../components/CategoryCards';

export default function Dashboard() {
  return (
    <>
      <div className="mainContainer">
        <Sidebar />
        <div className="mainStuff">
          <div className="dashboardTop"></div>
          <CategoryCards />
          <LatestPosts />
        </div>
      </div>
    </>
  );
}
