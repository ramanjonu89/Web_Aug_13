import React, { useEffect, useRef, useState, useContext } from "react";
import BLOGBAR from "../assets/Rectangle 1084BLOGBAR.svg";
import BLOG1 from "../assets/Rectangle 1070BLOG1.svg";
import BLOG2 from "../assets/Rectangle 1070BLOG2.svg";
import BLOG3 from "../assets/Rectangle 1070BLOG3.svg";
import BLOG4 from "../assets/Rectangle 1070BLOG4.svg";
import BLOG5 from "../assets/Rectangle 1070BLOG5.svg";
import BLOG6 from "../assets/Rectangle 1070BLOG6.svg";

import "./BlogPageCSS.css";
import PortfolioPage from "./PortfolioPage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../BlogContext";

const BlogPage = () => {
  const {  setblogId,setIsblogpage } = useContext(BlogContext);

  const navigate = useNavigate();
  const blogPageRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (blogPageRef.current) {
      observer.observe(blogPageRef.current);
    }

    cardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (blogPageRef.current) {
        observer.unobserve(blogPageRef.current);
      }

      cardRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const [blogs, setBlogs] = useState([]);  //state to set data from google sheet


  // fecthed data from google sheet 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://sheetdb.io/api/v1/rsix5ycm9i42k`
        );   // use .env file for this api endpoint

        const rows = response.data;
        setBlogs(rows);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  // function runs when blog title clciked 
  const handleBlog = (id) => {
    setIsblogpage(true); // show blogs internal page
    setblogId(id);     // setting id of page which is to be shown
    const targetSection = document.getElementById('bloginternal');   // getting id of internal blogs page

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });  //smoothly navigating to respective page
    }
  };

  return (
    <div className="blogpage-container" id="blog" ref={blogPageRef}>
      <div className="blogpage-heading">
        <h1 className="heading-left">BLOG</h1>
        <h1 className="stroke heading-right">YARD</h1>
      </div>

      {/* mapping over the data i.e coming from google sheet  */}
      {blogs.map((blog, index) => {
        // Determine image based on blog index or any logic you prefer
        const blogImage = [BLOG1, BLOG2, BLOG3, BLOG4, BLOG5, BLOG6][index % 6];

        return (
          <div
            className={`blogpage-blog-${index % 2 === 0 ? 'one' : 'two'}-container card in-view`}
            ref={(el) => (cardRefs.current[index] = el)}
            key={blog.id} // Unique key for each card
          >
            <div className="blogpage-blog-image-container">
              <img src={blogImage} alt={`blog-${index}`} />
            </div>
            <div className="blogpage-blog-text-container">
              <div className="blog-card-title">
                <h1 className="stroke">{String(index + 1).padStart(2, '0')}</h1>
                <div onClick={() => handleBlog(blog.id)}>
                  <h1 style={{ cursor:"pointer"}}>{blog.Title}</h1>
                </div>
              </div>
              <h6>DECEMBER 27, 2022</h6>
              <img src={BLOGBAR} alt="barimg" />
              <p>{blog.Description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
