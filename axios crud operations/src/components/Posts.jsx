import React from "react";
import { useEffect,useState } from "react";
import { deletePost } from "../api/PostApi";
import { getPosts } from '../api/PostApi';
import Form from "./Form";

function Posts() {
  const [data, setData] = useState([]);
  const [updatedData, setUpdatedData] = useState();

  const getPostData = async () => {
    const res = await getPosts();
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
    deletePost(id);
  }, []);

  const id = 0;
  const handleDelete = async(id)=>{
    try {
      const res = await deletePost(id);
      if(res.status === 200){
        const newUpdatedPosts = data.filter(post => post.id !== id);
        setData(newUpdatedPosts);
      }
    } catch (error) {
      
    }
   
  }
    

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        React Axios
      </h1>
      <Form data={data} setData={setData} updatedData={updatedData} setUpdatedData={setUpdatedData}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {data.map((post, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-5">
            <h4 className="text-sm text-gray-500 mb-1">Post Key: {post.id}</h4>
            <h3 className="text-xl font-semibold text-gray-800">
              {post.title}
            </h3>
            <p className="text-gray-700 mt-2">{post.body}</p>
            <button 
              onClick={()=>setUpdatedData(post)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit
            </button>{" "}
            <button 
              onClick={()=>handleDelete(post.id)} 
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
