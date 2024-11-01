import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Home = () => {
    const [blogPostData, setBlogPostData] = useState([]);
    let navigate = useNavigate(); 

    const routeChange = (_id) => { 
        let path = "/fullBlog"; 
        navigate(path, { state: _id });
    };

    const getBlogPostData = async () => {
        try {
            const response = await axios.get("http://localhost:8080/blogpost/getAll");
            const updatedData = response.data.map(data => ({
                ...data,
                image: convertBytesToURL(data.image) 
            }));
            setBlogPostData(updatedData);

        } catch (error) {
            console.log(error);
        }
    };


    const convertBytesToURL = (bytes) => {
        if (!bytes) return ""; 
        const blob = new Blob([new Uint8Array(bytes)], { type: 'image/jpeg' });
        return URL.createObjectURL(blob);
    };

    const getImage = (id) => {
        try{
            //const response = axios.get(`http://localhost:8080/blogpost/image/${id}`);
            return `http://localhost:8080/blogpost/image/${id}`;
        }
        catch (error){
            console.log(error);
        }
    }
    
    useEffect(() => {
        getBlogPostData();
    }, []);

    return (
        <div className="flex justify-center items-center flex-row flex-wrap gap-5 m-4">
            {
                blogPostData.map((data, index) => (
                    <div key={index}>
                        <div className="card bg-white w-96 shadow-xl h-96 sm:w-160 md:w-64 lg:w-[32rem]">
                            <figure className="px-10 pt-10">
                            <img
                                src={getImage(data.id)}
                                alt="Blog post"
                                className="rounded-xl" 
                            />
                            </figure>
                            <div className="card-body items-center text-center w-full">
                                <h2 className="card-title">{data.title}</h2>
                                <p className="text-black w-full max-h-20 overflow-y-auto">{data.text}</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary" onClick={() => {
                                        routeChange(data.id);
                                    }}>
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};
