// import React, { useEffect, useState } from "react"
// import axios from "axios"

// export const CreateBlogPost = () => {

//     const[formValue,setFormValue] = useState({
//         title:"",
//         text: "",
//         image:undefined
//     });

//     const[noImage,setNoImage] = useState({
//         title:"",
//         text: "",
//     });

//     const saveBlogPostInDB = async () => {
//         try {
//             const formData = new FormData();
//             formData.append("title", formValue.title);
//             formData.append("text", formValue.text);
//             formData.append("image", formValue.image);

//             const response = await axios.post("http://localhost:8080/blogpost/saveWithImage", formData, {
//                 headers: {
//                     "Content-Type": "multipart/form-data"
//                 }
//             });
//             console.log(response);
//             setFormValue({
//                 title: "",
//                 text: "",
//                 image: undefined
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     const saveBlogPostInDBWithoutImage = async () => {
//         try {
//             const formData = new FormData();
//             formData.append("title", formValue.title);
//             formData.append("text", formValue.text);
//             formData.append("image",null);
//             setNoImage({
//                 title: formValue.title,
//                 text: formValue.text
//             })
//             const response = await axios.post("http://localhost:8080/blogpost/save", noImage);
//             console.log(response);
//             setFormValue({
//                 title: "",
//                 text: "",
//                 image: undefined
//             });
//             // setNoImage({
//             //     title: "",
//             //     text: "",
//             // })
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const saveDataToDB = () =>{
//         console.log(formValue.image);
//         if(formValue.image === undefined){
//             saveBlogPostInDBWithoutImage();
//         }else{
//             saveBlogPostInDB();
//         }
//     }

//     return(
//         <div style={{backgroundColor: "bg-green-500", height: "97.5vh", display: "flex", justifyContent:"center", alignItems:"center"}}>
//             <div style={{backgroundColor: "bg-white", boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px", borderRadius:"15px", height:"30rem", width:"30rem", display:"flex", justifyContent:"center", alignItems:"center", padding:"1rem", flexDirection:"column", gap:"1rem"}}>
//                 <div style={{backgroundColor:"bg-white", position:"relative", bottom:"2rem"}}>
//                     <h1 style={{fontSize:"4rem", fontFamily:"cursive "}}>Write a Post</h1>
//                 </div>
//                 <div style={{width:"100%"}}>
//                     <label htmlFor="titleValue">Title:</label>
//                 </div>
//                 <input id="titleValue" value={formValue.title} onChange={(e) => setFormValue({ ...formValue, title: e.target.value })} placeholder=" Write a title:" style={{width:"100%",outline:"none",height:"2rem", borderRadius:"10px", border:"0.5px solid lightgrey"}} type="text" />
//                 <div style={{width:"100%"}}>
//                     <label htmlFor="textareaValue">Subject:</label>
//                 </div>
//                 <textarea id="textareaValue" value={formValue.text} onChange={(e) => setFormValue({ ...formValue, text: e.target.value })} placeholder=" Write a message..." style={{width:"100%", outline:"none", borderRadius:"10px", border:"0.5px solid lightgrey"}} name="blog_content"></textarea>
//                 <div style={{width:"100%"}}>
//                     <label htmlFor="imgValue">Select image:</label>
//                 </div>
//                 <input id="imgValue" onChange={(e) => setFormValue({ ...formValue, image: e.target.files[0] })} placeholder=" Write a title:" style={{width:"100%",outline:"none",height:"2rem", borderRadius:"10px", border:"0.5px solid lightgrey"}} type="file" accept="image/*"/>
//                 {/* <input id="imgValue" onChange={(e) => onImageChange(e)} placeholder=" Write a title:" style={{width:"100%",outline:"none",height:"2rem", borderRadius:"10px", border:"0.5px solid lightgrey"}} type="file" accept="image/*"/> */}
//                 <button onClick={() => {saveDataToDB()}} style={{width:"50%", borderRadius:"10px", backgroundColor:"rgb(99, 0, 253)",color:"white", padding:"5px"}}>Submit</button>
//             </div>
//         </div>
//     )
// }

import React, { useEffect, useState } from "react"
import axios from "axios"

export const CreateBlogPost = () => {

    const[formValue,setFormValue] = useState({
        title:"",
        text: "",
        image:undefined
    });

    const[noImage,setNoImage] = useState({
        title:"",
        text: "",
    });

    const saveBlogPostInDB = async () => {
        try {
            const formData = new FormData();
            formData.append("title", formValue.title);
            formData.append("text", formValue.text);
            formData.append("image", formValue.image);

            const response = await axios.post("http://localhost:8080/blogpost/saveWithImage", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log(response);
            setFormValue({
                title: "",
                text: "",
                image: undefined
            });
        } catch (error) {
            console.log(error);
        }
    };
    const saveBlogPostInDBWithoutImage = async () => {
        try {
            setNoImage({
                title: formValue.title,
                text: formValue.text
            })
            const response = await axios.post("http://localhost:8080/blogpost/save", {
                title: formValue.title,
                text: formValue.text,
                image: null
            });

            setFormValue({
                title: "",
                text: "",
                image: undefined
            });
        } catch (error) {
            console.log(error);
        }
    };

    const saveDataToDB = () =>{
        if(formValue.image === undefined){
            saveBlogPostInDBWithoutImage();
        }else{
            saveBlogPostInDB();
        }
    }

    return(
        // <div style={{backgroundColor: "bg-green-500", height: "97.5vh", display: "flex", justifyContent:"center", alignItems:"center"}}>
        //     <div style={{backgroundColor: "bg-white", boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px", borderRadius:"15px", height:"30rem", width:"30rem", display:"flex", justifyContent:"center", alignItems:"center", padding:"1rem", flexDirection:"column", gap:"1rem"}}>
        //         <div style={{backgroundColor:"bg-white", position:"relative", bottom:"2rem"}}>
        //             <h1 style={{fontSize:"4rem", fontFamily:"cursive "}}>Write a Post</h1>
        //         </div>
        //         <div style={{width:"100%"}}>
        //             <label htmlFor="titleValue">Title:</label>
        //         </div>
        //         <input id="titleValue" value={formValue.title} onChange={(e) => setFormValue({ ...formValue, title: e.target.value })} placeholder=" Write a title:" style={{width:"100%",outline:"none",height:"2rem", borderRadius:"10px", border:"0.5px solid lightgrey"}} type="text" />
        //         <div style={{width:"100%"}}>
        //             <label htmlFor="textareaValue">Subject:</label>
        //         </div>
        //         <textarea id="textareaValue" value={formValue.text} onChange={(e) => setFormValue({ ...formValue, text: e.target.value })} placeholder=" Write a message..." style={{width:"100%", outline:"none", borderRadius:"10px", border:"0.5px solid lightgrey"}} name="blog_content"></textarea>
        //         <div style={{width:"100%"}}>
        //             <label htmlFor="imgValue">Select image:</label>
        //         </div>
        //         <input id="imgValue" onChange={(e) => setFormValue({ ...formValue, image: e.target.files[0] })} placeholder=" Write a title:" style={{width:"100%",outline:"none",height:"2rem", borderRadius:"10px", border:"0.5px solid lightgrey"}} type="file" accept="image/*"/>
        //         {/* <input id="imgValue" onChange={(e) => onImageChange(e)} placeholder=" Write a title:" style={{width:"100%",outline:"none",height:"2rem", borderRadius:"10px", border:"0.5px solid lightgrey"}} type="file" accept="image/*"/> */}
        //         <button onClick={() => {saveDataToDB()}} style={{width:"50%", borderRadius:"10px", backgroundColor:"rgb(99, 0, 253)",color:"white", padding:"5px"}}>Submit</button>
        //     </div>
        // </div>

<div className="bg-white-500 h-[94vh] flex justify-center items-center">
    <div className="bg-white shadow-lg rounded-lg h-auto w-96 flex flex-col justify-center items-center p-4 gap-4">
        <h1 className="text-4xl font-cursive mb-4">Write a Post</h1>
        
        <div className="w-full">
            <label htmlFor="titleValue">Title:</label>
            <input
                id="titleValue"
                value={formValue.title}
                onChange={(e) => setFormValue({ ...formValue, title: e.target.value })}
                placeholder="Write a title:"
                className="w-full outline-none h-10 rounded-md border border-lightgrey p-2"
                type="text"
            />
        </div>
        
        <div className="w-full">
            <label htmlFor="textareaValue">Subject:</label>
            <textarea
                id="textareaValue"
                value={formValue.text}
                onChange={(e) => setFormValue({ ...formValue, text: e.target.value })}
                placeholder="Write a message..."
                className="w-full h-32 outline-none rounded-md border border-lightgrey p-2 resize-y"
                name="blog_content"
            />
        </div>

        <div className="w-full">
            <label htmlFor="imgValue" className="block mb-1">Select image:</label>
            <div className="relative">
                <input
                id="imgValue"
                onChange={(e) => setFormValue({ ...formValue, image: e.target.files[0] })}
                className="w-full h-8 outline-none rounded-md border border-lightgrey p-0"
                type="file"
                accept="image/*"
            />

            </div>
        </div>



        
        <button
            onClick={() => { saveDataToDB(); }}
            className="w-1/2 rounded-md bg-purple-600 text-white p-2"
        >
            Submit
        </button>
    </div>
</div>


    )
}