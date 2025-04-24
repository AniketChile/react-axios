import React, { useEffect } from 'react';
import { getPosts } from './api/PostApi';

function App(props) {
  
  const getPostData = async () => {
    const res = await getPosts();
    console.log(res.headers);
  }

  useEffect(() => {
    getPostData()
  }, []);

  return (
    <div>
        <h1>react axios</h1>
    </div>
  );
}

export default App;