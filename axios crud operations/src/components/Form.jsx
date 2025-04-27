// import React, { useState } from 'react';

// function Form({ data, setData }) {
    
//     const [addData, setAddData] = useState({
//         title: "",
//         body: "",
//     });

//     const handleNewData = () => {
//        console.log({ data, newEntry: addData });
//        setData([...data, addData]); // Example of adding new data
//        setAddData({ title: "", body: "" }); // Reset form
//     };

//     return (
//         <>
//             <input 
//                 type="text" 
//                 value={addData.title} 
//                 onChange={(e) => setAddData({ ...addData, title: e.target.value })} 
//                 placeholder='title'
//             />
//             <input 
//                 type="text" 
//                 value={addData.body} 
//                 onChange={(e) => setAddData({ ...addData, body: e.target.value })} 
//                 placeholder='body' 
//             />
//             <button onClick={handleNewData}>Add</button>
//         </>
//     );
// }

// export default Form;
import React from 'react';
import {useState} from 'react'
import {postData} from '../api/PostApi'

function Form({data,setData}) {


    const[addNewData,setaddNewData] = useState({
        title:"",
        body:""
    });

    const handleClick = async() =>{
        if(!addNewData.title || !addNewData.body) return alert("Please fill both the fields")
        setData([...data,addNewData]);
        await postData(addNewData);
        await console.log(...data);
        setaddNewData({title:"",body:""})
    }

    return (
        <>
                <div className='p-4'>
                        <input type="text" placeholder='Title' value={addNewData.title} onChange={(e)=>setaddNewData({...addNewData,title:e.target.value})} />
                        <input type="text" placeholder='Body'value={addNewData.body} onChange={(e)=>setaddNewData({...addNewData,body:e.target.value})}/>
                        <button onClick={()=>handleClick()}>Add</button>
                </div>
        </>
    );
}

export default Form;