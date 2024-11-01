import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import axios from "axios";
export const FullBlog = () => {

    const [blogPost, setBlogPost] = useState({});

    const location = useLocation();
    const data = location.state;

    const getBlogById = async () => {

        try{
            
            const respons = await axios.get(`http://localhost:8080/blogpost/getBlogById/${data}`);
            setBlogPost(respons.data);
            console.log(respons.data);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect( () => {
        getBlogById();
    }, []);

    return(
        <div className="flex justify-center items-center flex-col h-screen">
            <div className="bg-white w-80 h-90 text-black p-10 rounded">
                <h1 className="mb-8 font-bold">{blogPost.title}</h1>
                <p>{blogPost.text}</p>
            </div>
        </div>
    )

}