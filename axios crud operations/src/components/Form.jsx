import React, { useState,useEffect } from "react";
import { addPost, updateData } from "../api/PostApi";

function Form({ data, setData,updatedData,setUpdatedData }) {
  const [addNewData, setAddNewData] = useState({
    title: "",
    body: "",
  });


  const addPosts = async () => {

    const action = e.nativeEvent.submitter.value;
    if(action === "Add"){
        addPost();
    }
    else if(action === "Edit"){
        updatePostData();
    }

    try {
      const newPost = {
        key: data.length + 1,
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

  const updatePostData = async() =>{
    const res = await updateData(updateData.id,addPost);
    console.log(res)

    setData((prev)=>{
        console.log(prev);
    })
  }

  let isEmpty = Object.keys(updatedData).length === 0;

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
          value={isEmpty ? "Add" : "Edit"}
        >
          {isEmpty ? "Add" : "Edit"}
        </button>
      </div>
    </>
  );
}
export default Form;
