import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BlogContext } from "../BlogContext";

function BlogInternalPage() {
    const [blogdata, setBlogData] = useState({});
    const { blogid, isblogpage } = useContext(BlogContext);


    
    useEffect(() => {
        const fetchData = async () => {
            if (!blogid) return; // Exit if blogid is not available

            try {
                const response = await axios.get('https://sheetdb.io/api/v1/rsix5ycm9i42k');
                const blogs = response.data;
                if (blogid) {
                    // Find the blog data based on the id
                    const blog = blogs.find(blog => blog.id === blogid);
                    setBlogData(blog); // Set the blog data to state
                }
            } catch (error) {
                console.error("Error fetching blog data", error);
            }
        };

        fetchData();
    }, [blogid]);

    // Return null if blogid is not available
    if (!blogid) {
        return null;
    }

    return (
        <>
            {isblogpage && (
                <div style={{
                    width: "100%", 
                    padding: "100px", 
                    backgroundColor: "#333", 
                    color: "white", 
                    height: "100vh", 
                    overflowY: "scroll", 
                    overflowX: "hidden",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 1000
                }}>
                    <h1>{blogdata.Title}</h1>
                    <p>{blogdata.Description}</p>
                </div>
            )}
        </>
    );
}

export default BlogInternalPage;
