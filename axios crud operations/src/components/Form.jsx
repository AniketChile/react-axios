import React, { useState,useEffect } from "react";
import { addPost } from "../api/PostApi";

function Form({ data, setData,updatedData,setUpdatedData }) {
  const [addNewData, setAddNewData] = useState({
    title: "",
    body: "",
  });

  const addPosts = async () => {
    try {
      const newPost = {
        key: data.length + 1, // 👈 Set key here, not while typing!
        title: addNewData.title,
        body: addNewData.body,
      };

      await addPost(newPost);
      setData([...data, newPost]);
      console.log("Data after adding:", [...data, newPost]);
      setAddNewData({ title: "", body: "" }); 
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  useEffect(() => {
    updatedData && setAddNewData({
        title: updatedData.title || "",
        body: updatedData.body || "",
    })
  }, [updatedData]);

  return (
    <>
      <div className="p-2">
        <input
          className="bg-slate-400 border border-black p-4 m-2 rounded text-black text-lg"
          type="text"
          value={addNewData.title}
          onChange={(e) => setAddNewData({ ...addNewData, title: e.target.value })}
          placeholder="Title"
        />
        <input
          className="bg-slate-400 border border-black p-4 m-2 rounded text-black text-lg"
          type="text"
          value={addNewData.body}
          onChange={(e) => setAddNewData({ ...addNewData, body: e.target.value })}
          placeholder="Body"
        />
        <button
          className="bg-slate-400 border border-black p-4 m-2 rounded"
          onClick={addPosts}
        >
          Add
        </button>
      </div>
    </>
  );
}
export default Form;
