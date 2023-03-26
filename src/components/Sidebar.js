import React from 'react';
import { Link } from 'react-router-dom';
import '../css/sidebar.css';

export default function Sidebar() {
  return (
    <div>
      <main className="sidebarMain">
        <div className="sidebarPostCRUD">
          <h4>Post Related</h4>
          <ul className="sidebarPostCRUD_Menu">
            <li>
              <Link to={'/allposts'} href="/addpost">
                All Posts
              </Link>
            </li>
            <li>
              <Link to={'/addpost'} href="/addpost">
                Add New Post
              </Link>
            </li>
            <li>
              <Link to={'/addpost'} href="/addpost">
                Most Recent
              </Link>
            </li>
            <li>
              <Link to={'/addpost'} href="/addpost">
                Most Popular
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
