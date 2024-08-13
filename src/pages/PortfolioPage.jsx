import React, { useEffect, useRef } from "react";
import portfolioimgaes1 from "../assets/Rectangle 1071 portfolioimgaes1.svg";
import portfolioimgaes2 from "../assets/Rectangle 1070portfolioimgaes2.svg";
import portfolioimgaes3 from "../assets/Rectangle 1069portfolioimgaes3.svg";
import portfolioimgaes4 from "../assets/Rectangle 1068portfolioimgaes4.svg";
import portfolioimgaes5 from "../assets/Rectangle 1067portfolioimgaes5.svg";
import portfolioimgaes6 from "../assets/Rectangle 1076portfolioimgaes6.svg";
import arrowimage from "../assets/Arrow.svg";
import "./PortfolioPageCSS.css";

const PortfolioPage = () => {
  const headingRef1 = useRef(null);
  const strokeRef1 = useRef(null);
  const headingRef2 = useRef(null);
  const strokeRef2 = useRef(null);

  useEffect(() => {
    const createObserver = (headingRef, strokeRef) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            headingRef.current.classList.add("animate-left");
            strokeRef.current.classList.add("animate-right");
          }
        },
        { threshold: 0.1 }
      );

      if (headingRef.current && strokeRef.current) {
        observer.observe(headingRef.current);
        observer.observe(strokeRef.current);
      }

      return () => {
        if (headingRef.current) observer.unobserve(headingRef.current);
        if (strokeRef.current) observer.unobserve(strokeRef.current);
      };
    };

    const unobserve1 = createObserver(headingRef1, strokeRef1);
    const unobserve2 = createObserver(headingRef2, strokeRef2);

    return () => {
      unobserve1();
      unobserve2();
    };
  }, []);

  return (
    <div className="portfoliopage-container" id="portfolio">
      <div>
        <div className="portfoliopage-heading">
          <h1 ref={headingRef1}>LATEST</h1>
          <h1 ref={strokeRef1} className="stroke">
            PROJECTS
          </h1>
        </div>

        <div className="lp-container-one">
          <h1 className="lp-number">01/</h1>
          <div className="lp-container-content">
            <p>Saas Landing Page</p>
            <h1>Taskio - Task Management</h1>
          </div>
          <div className="lp-container-image">
            <img
              src={portfolioimgaes6}
              alt="image"
              className="lp-image-style"
            />
          </div>
        </div>

        <div className="lp-container-one">
          <h1 className="lp-number">02/</h1>
          <div className="lp-container-content">
            <p>Saas Landing Page</p>
            <h1>Taskio - Task Management</h1>
          </div>
          <div className="lp-container-image">
            <img
              src={portfolioimgaes6}
              alt="image"
              className="lp-image-style"
            />
          </div>
        </div>

        <div className="lp-container-one">
          <h1 className="lp-number">03/</h1>
          <div className="lp-container-content">
            <p>Saas Landing Page</p>
            <h1>Taskio - Task Management</h1>
          </div>
          <div className="lp-container-image">
            <img
              src={portfolioimgaes6}
              alt="image"
              className="lp-image-style"
            />
          </div>
        </div>

        <div className="lp-container-one">
          <h1 className="lp-number">04</h1>
          <div className="lp-container-content">
            <p>Saas Landing Page</p>
            <h1>Taskio - Task Management</h1>
          </div>
          <div className="lp-container-image">
            <img
              src={portfolioimgaes6}
              alt="image"
              className="lp-image-style"
            />
          </div>
        </div>

        <div className="lp-container-one">
          <h1 className="lp-number">05/</h1>
          <div className="lp-container-content">
            <p>Saas Landing Page</p>
            <h1>Taskio - Task Management</h1>
          </div>
          <div className="lp-container-image">
            <img
              src={portfolioimgaes6}
              alt="image"
              className="lp-image-style"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="portfoliopage-heading">
          <h1 ref={headingRef2}>PORT</h1>
          <h1 ref={strokeRef2} className="stroke">
            FOLIO
          </h1>
        </div>

        <div className="portfoliopage-project-container portfoliopage-project-container-one">
          <div className="portfoliopage-project-image-container">
            <img src={portfolioimgaes1} alt="projectimage" />
          </div>
          <div className="portfoliopage-project-text-container">
            <h4>Taskio - Task Management</h4>
            <p>Saas Landing Page</p>
            <img src={arrowimage} alt="arrow" />
          </div>
        </div>

        <div className="portfoliopage-project-container portfoliopage-project-container-two">
          <div className="portfoliopage-project-text-container">
            <h4>Taskio - Task Management</h4>
            <p>Saas Landing Page</p>
            <img src={arrowimage} alt="arrow" className="arrow-reverse" />
          </div>
          <div className="portfoliopage-project-image-container">
            <img src={portfolioimgaes2} alt="projectimage" />
          </div>
        </div>

        <div className="portfoliopage-project-container portfoliopage-project-container-one">
          <div className="portfoliopage-project-image-container">
            <img src={portfolioimgaes3} alt="projectimage" />
          </div>
          <div className="portfoliopage-project-text-container">
            <h4>Taskio - Task Management</h4>
            <p>Saas Landing Page</p>
            <img src={arrowimage} alt="arrow" />
          </div>
        </div>

        <div className="portfoliopage-project-container portfoliopage-project-container-two">
          <div className="portfoliopage-project-text-container">
            <h4>Taskio - Task Management</h4>
            <p>Saas Landing Page</p>
            <img src={arrowimage} alt="arrow" className="arrow-reverse" />
          </div>
          <div className="portfoliopage-project-image-container">
            <img src={portfolioimgaes4} alt="projectimage" />
          </div>
        </div>

        <div className="portfoliopage-project-container portfoliopage-project-container-one">
          <div className="portfoliopage-project-image-container">
            <img src={portfolioimgaes5} alt="projectimage" />
          </div>
          <div className="portfoliopage-project-text-container">
            <h4>Taskio - Task Management</h4>
            <p>Saas Landing Page</p>
            <img src={arrowimage} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;

// import React from "react";
// import portfolioimgaes1 from "../assets/Rectangle 1071 portfolioimgaes1.svg";
// import portfolioimgaes2 from "../assets/Rectangle 1070portfolioimgaes2.svg";
// import portfolioimgaes3 from "../assets/Rectangle 1069portfolioimgaes3.svg";
// import portfolioimgaes4 from "../assets/Rectangle 1068portfolioimgaes4.svg";
// import portfolioimgaes5 from "../assets/Rectangle 1067portfolioimgaes5.svg";
// import portfolioimgaes6 from "../assets/Rectangle 1076portfolioimgaes6.svg";
// import arrowimage from "../assets/Arrow.svg";
// import "./PortfolioPageCSS.css";

// const PortfolioPage = () => {
//   return (
//     <div className="portfoliopage-container" id="portfolio">
//       <div>
//         <div className="portfoliopage-heading">
//           <h1>LATEST</h1>
//           <h1 className="stroke"> PROJECTS</h1>
//         </div>

//         <div className="lp-container-one">
//           <h1 className="lp-number">01/</h1>
//           <div className="lp-container-content">
//             <p>Saas Landing Page</p>
//             <h1>Taskio - Task Management</h1>
//           </div>
//           <div className="lp-container-image">
//             <img
//               src={portfolioimgaes6}
//               alt="image"
//               className="lp-image-style"
//             />
//           </div>
//         </div>

//         <div className="lp-container-one">
//           <h1 className="lp-number">02/</h1>
//           <div className="lp-container-content">
//             <p>Saas Landing Page</p>
//             <h1>Taskio - Task Management</h1>
//           </div>
//           <div className="lp-container-image">
//             <img
//               src={portfolioimgaes6}
//               alt="image"
//               className="lp-image-style"
//             />
//           </div>
//         </div>

//         <div className="lp-container-one">
//           <h1 className="lp-number">03/</h1>
//           <div className="lp-container-content">
//             <p>Saas Landing Page</p>
//             <h1>Taskio - Task Management</h1>
//           </div>
//           <div className="lp-container-image">
//             <img
//               src={portfolioimgaes6}
//               alt="image"
//               className="lp-image-style"
//             />
//           </div>
//         </div>

//         <div className="lp-container-one">
//           <h1 className="lp-number">04</h1>
//           <div className="lp-container-content">
//             <p>Saas Landing Page</p>
//             <h1>Taskio - Task Management</h1>
//           </div>
//           <div className="lp-container-image">
//             <img
//               src={portfolioimgaes6}
//               alt="image"
//               className="lp-image-style"
//             />
//           </div>
//         </div>

//         <div className="lp-container-one">
//           <h1 className="lp-number">05/</h1>
//           <div className="lp-container-content">
//             <p>Saas Landing Page</p>
//             <h1>Taskio - Task Management</h1>
//           </div>
//           <div className="lp-container-image">
//             <img
//               src={portfolioimgaes6}
//               alt="image"
//               className="lp-image-style"
//             />
//           </div>
//         </div>
//       </div>

//       <div>
//         <div className="portfoliopage-heading">
//           <h1>PORT</h1>
//           <h1 className="stroke">FOLIO</h1>
//         </div>

//         <div className="portfoliopage-project-container portfoliopage-project-container-one">
//           <div className="portfoliopage-project-image-container">
//             <img src={portfolioimgaes1} alt="projectimage" />
//           </div>
//           <div className="portfoliopage-project-text-container">
//             <h4>Taskio - Task Management</h4>
//             <p>Saas Landing Page</p>
//             <img src={arrowimage} alt="arrow" />
//           </div>
//         </div>

//         <div className="portfoliopage-project-container portfoliopage-project-container-two">
//           <div className="portfoliopage-project-text-container">
//             <h4>Taskio - Task Management</h4>
//             <p>Saas Landing Page</p>
//             <img src={arrowimage} alt="arrow" className="arrow-reverse" />
//           </div>
//           <div className="portfoliopage-project-image-container">
//             <img src={portfolioimgaes2} alt="projectimage" />
//           </div>
//         </div>

//         <div className="portfoliopage-project-container portfoliopage-project-container-one">
//           <div className="portfoliopage-project-image-container">
//             <img src={portfolioimgaes3} alt="projectimage" />
//           </div>
//           <div className="portfoliopage-project-text-container">
//             <h4>Taskio - Task Management</h4>
//             <p>Saas Landing Page</p>
//             <img src={arrowimage} alt="arrow" />
//           </div>
//         </div>

//         <div className="portfoliopage-project-container portfoliopage-project-container-two">
//           <div className="portfoliopage-project-text-container">
//             <h4>Taskio - Task Management</h4>
//             <p>Saas Landing Page</p>
//             <img src={arrowimage} alt="arrow" className="arrow-reverse" />
//           </div>
//           <div className="portfoliopage-project-image-container">
//             <img src={portfolioimgaes4} alt="projectimage" />
//           </div>
//         </div>

//         <div className="portfoliopage-project-container portfoliopage-project-container-one">
//           <div className="portfoliopage-project-image-container">
//             <img src={portfolioimgaes5} alt="projectimage" />
//           </div>
//           <div className="portfoliopage-project-text-container">
//             <h4>Taskio - Task Management</h4>
//             <p>Saas Landing Page</p>
//             <img src={arrowimage} alt="arrow" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PortfolioPage;
