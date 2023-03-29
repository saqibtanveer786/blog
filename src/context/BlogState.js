import BlogContext from './BlogContext';
import React, { useState } from 'react';

export default function BlogState(props) {
  const [posts, setPosts] = useState(null);

  //FUNCTION TO MANAGE API CALLS
  async function apiCallForPosts(endPoint, method, params, body) {
    const data = await fetch(endPoint, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(body),
    });
    const jsonData = await data.json();
    setPosts(jsonData);
    return jsonData;
  }
  return (
    <BlogContext.Provider value={{ posts, apiCallForPosts }}>
      {props.children}
    </BlogContext.Provider>
  );
}
