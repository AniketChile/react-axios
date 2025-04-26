import React, { useEffect, useState } from 'react';
import { getPosts } from './api/PostApi';
import "./App.css";
import Posts from './components/Posts';
function App(props) {
  const [data, setData] = useState([]);

  const getPostData = async () => {
    const res = await getPosts();
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <Posts data={data}/>
  );
}

export default App;
