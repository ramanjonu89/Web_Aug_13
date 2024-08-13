import React, { useEffect, useRef } from "react";
import BLOGBAR from "../assets/Rectangle 1084BLOGBAR.svg";
import BLOG1 from "../assets/Rectangle 1070BLOG1.svg";
import BLOG2 from "../assets/Rectangle 1070BLOG2.svg";
import BLOG3 from "../assets/Rectangle 1070BLOG3.svg";
import BLOG4 from "../assets/Rectangle 1070BLOG4.svg";
import BLOG5 from "../assets/Rectangle 1070BLOG5.svg";
import BLOG6 from "../assets/Rectangle 1070BLOG6.svg";
import "./BlogPageCSS.css";

const BlogPage = () => {
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

  return (
    <div className="blogpage-container" id="blog" ref={blogPageRef}>
      <div className="blogpage-heading">
        <h1 className="heading-left">BLOG</h1>
        <h1 className="stroke heading-right">YARD</h1>
      </div>
      
      <div
        className="blogpage-blog-one-container card"
        ref={(el) => (cardRefs.current[0] = el)}
      >
        <div className="blogpage-blog-image-container">
          <img src={BLOG1} alt="blog-one" />
        </div>
        <div className="blogpage-blog-text-container">
          <div className="blog-card-title">
            <h1 className="stroke">01 </h1>
            <h1>Blog Title</h1>
          </div>
          <h6>DECEMBER 27, 2022</h6>
          <img src={BLOGBAR} alt="barimg" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      <div
        className="blogpage-blog-two-container card"
        ref={(el) => (cardRefs.current[1] = el)}
      >
        <div className="blogpage-blog-text-container">
          <div className="blog-card-title">
            <h1 className="stroke">02 </h1>
            <h1>Blog Title</h1>
          </div>
          <h6>DECEMBER 27, 2022</h6>
          <img src={BLOGBAR} alt="barimg" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="blogpage-blog-image-container">
          <img src={BLOG2} alt="blog-two" />
        </div>
      </div>

      <div
        className="blogpage-blog-one-container card"
        ref={(el) => (cardRefs.current[2] = el)}
      >
        <div className="blogpage-blog-image-container">
          <img src={BLOG3} alt="blog-one" />
        </div>
        <div className="blogpage-blog-text-container">
          <div className="blog-card-title">
            <h1 className="stroke">03 </h1>
            <h1>Blog Title</h1>
          </div>
          <h6>DECEMBER 27, 2022</h6>
          <img src={BLOGBAR} alt="barimg" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      <div
        className="blogpage-blog-two-container card"
        ref={(el) => (cardRefs.current[3] = el)}
      >
        <div className="blogpage-blog-text-container">
          <div className="blog-card-title">
            <h1 className="stroke">04 </h1>
            <h1>Blog Title</h1>
          </div>
          <h6>DECEMBER 27, 2022</h6>
          <img src={BLOGBAR} alt="barimg" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="blogpage-blog-image-container">
          <img src={BLOG4} alt="blog-two" />
        </div>
      </div>

      <div
        className="blogpage-blog-one-container card"
        ref={(el) => (cardRefs.current[4] = el)}
      >
        <div className="blogpage-blog-image-container">
          <img src={BLOG5} alt="blog-one" />
        </div>
        <div className="blogpage-blog-text-container">
          <div className="blog-card-title">
            <h1 className="stroke">05 </h1>
            <h1>Blog Title</h1>
          </div>
          <h6>DECEMBER 27, 2022</h6>
          <img src={BLOGBAR} alt="barimg" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      <div
        className="blogpage-blog-two-container card"
        ref={(el) => (cardRefs.current[5] = el)}
      >
        <div className="blogpage-blog-text-container">
          <div className="blog-card-title">
            <h1 className="stroke">06 </h1>
            <h1>Blog Title</h1>
          </div>
          <h6>DECEMBER 27, 2022</h6>
          <img src={BLOGBAR} alt="barimg" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="blogpage-blog-image-container">
          <img src={BLOG6} alt="blog-two" />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
