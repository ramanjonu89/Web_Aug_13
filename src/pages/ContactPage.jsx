import React, { useState, useEffect } from "react";
import earthVideo from "../assets/black_global_Video.mp4";
import mailImage from "../assets/mail.png";
import "./ContactPageCSS.css";
import SocialButtons from "./SocialMediabtnPage";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [videoEnded, setVideoEnded] = useState(false);
  const [animateSocialButtons, setAnimateSocialButtons] = useState(false);

  useEffect(() => {
    if (videoEnded) {
      setAnimateSocialButtons(true);
    }
  }, [videoEnded]);

  useEffect(() => {
    if (videoEnded) {
      // Add animation classes to the heading elements
      const headingH1 = document.querySelector(".heading-conatact h1");
      const headingStroke = document.querySelector(
        ".heading-conatact h1.stroke"
      );

      if (headingH1 && headingStroke) {
        headingH1.classList.add("animate");
        headingStroke.classList.add("animate");
      }
    }
  }, [videoEnded]);

  useEffect(() => {
    if (videoEnded) {
      // Add animation classes to the contact-info, contact-container, and contact-map elements
      const contactInfo = document.querySelector(".contact-info");
      const contactContainer = document.querySelector(".contact-container");
      const contactMap = document.querySelector(".contact-map");

      if (contactInfo && contactContainer && contactMap) {
        contactInfo.classList.add("animate");
        contactContainer.classList.add("animate");
        contactMap.classList.add("animate");
      }
    }
  }, [videoEnded]);

  useEffect(() => {
    if (!videoEnded) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [videoEnded]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(
      "https://script.google.com/macros/s/AKfycbx0RJHdo_gqHBKgLSgYVyN1kdTHfpze3GJfFfACjxBiYvW0_n_FCi37Q7U7g_H8sYFT/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    console.log("Form submitted");

    // Reset form
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <div className="contact-page" id="contact">
      {!videoEnded && (
        <div className="video-container">
          <video
            width="100%"
            height="100%"
            autoPlay
            muted
            playsInline
            onEnded={() => setVideoEnded(true)}
          >
            <source src={earthVideo} type="video/mp4" />
          </video>
        </div>
      )}

      {videoEnded && (
        <>
          <div className="heading-conatact">
            <h1>CONTACT</h1>
            <h1 className="stroke">US</h1>
          </div>

          <div className="contact-wrapper">
            <div className="contact-info">
              <div>
                <div className="location-loader-shape-3"></div>
                <p className="contact-info-location-text">
                  22 Sin Ming Lane,#06-76 Midview City,Singapore573969.
                </p>
              </div>
              <div>
                <div className="icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    viewBox="0 0 32 32"
                    height="32"
                    fill="none"
                    className="svg-icon"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke="#fff"
                      fillRule="evenodd"
                      d="m24.8868 19.1288c-1.0274-.1308-2.036-.3815-3.0052-.7467-.7878-.29-1.6724-.1034-2.276.48-.797.8075-2.0493.9936-2.9664.3258-1.4484-1.055-2.7233-2.3295-3.7783-3.7776-.6681-.9168-.4819-2.1691.3255-2.9659.5728-.6019.7584-1.4748.4802-2.2577-.3987-.98875-.6792-2.02109-.8358-3.07557-.2043-1.03534-1.1138-1.7807-2.1694-1.77778h-3.18289c-.60654-.00074-1.18614.25037-1.60035.69334-.40152.44503-.59539 1.03943-.53345 1.63555.344 3.31056 1.47164 6.49166 3.28961 9.27986 1.64878 2.5904 3.84608 4.7872 6.43688 6.4356 2.7927 1.797 5.9636 2.9227 9.2644 3.289h.1778c.5409.0036 1.0626-.2 1.4581-.569.444-.406.6957-.9806.6935-1.5822v-3.1821c.0429-1.0763-.7171-2.0185-1.7782-2.2046z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p>+65-88061007</p>
                {/* <p>0-xxxx-xxxx</p> */}
              </div>
              <div>
                <div className="mail-image">
                  <img src={mailImage} alt="Email-image" />
                </div>
                <p>webdaddy.info@gmail.com</p>
              </div>
            </div>
            <div className="contact-container">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder=" "
                    />
                    <label>First Name</label>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder=" "
                    />
                    <label>Last Name</label>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder=" "
                    />
                    <label>Email</label>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder=" "
                    ></textarea>
                    <label>Message</label>
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>

            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6968796086676!2d103.8308470744719!3d1.3584992615490217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1725f6ca4f35%3A0xec3df2f14f962668!2sVOFFICE%20SERVICES%20PTE%20LTD!5e0!3m2!1sen!2sin!4v1722107620666!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                // loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div
              className={`social-buttons-container ${
                animateSocialButtons ? "animate" : ""
              }`}
            >
              <SocialButtons />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactPage;

// import React, { useState, useEffect } from "react";
// import earthVideo from "../assets/black_global_Video.mp4";
// import mailImage from "../assets/mail.png";
// import "./ContactPageCSS.css";
// import SocialButtons from "./SocialMediabtnPage";

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     message: "",
//   });
//   const [videoEnded, setVideoEnded] = useState(false);

//   useEffect(() => {
//     if (!videoEnded) {
//       document.body.classList.add("no-scroll");
//     } else {
//       document.body.classList.remove("no-scroll");
//     }

//     return () => {
//       document.body.classList.remove("no-scroll");
//     };
//   }, [videoEnded]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await fetch(
//       "https://script.google.com/macros/s/AKfycbx0RJHdo_gqHBKgLSgYVyN1kdTHfpze3GJfFfACjxBiYvW0_n_FCi37Q7U7g_H8sYFT/exec",
//       {
//         method: "POST",
//         mode: "no-cors",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       }
//     );

//     console.log("Form submitted");

//     // Reset form
//     setFormData({ firstName: "", lastName: "", email: "", message: "" });
//   };

//   return (
//     <div className="contact-page" id="contact">
//       {!videoEnded && (
//         <div className="video-container">
//           <video
//             width="100%"
//             height="100%"
//             autoPlay
//             muted
//             playsInline
//             onEnded={() => setVideoEnded(true)}
//           >
//             <source src={earthVideo} type="video/mp4" />
//           </video>
//         </div>
//       )}

//       {videoEnded && (
//         <>
//           <div className="heading-conatact">
//             <h1>CONTACT</h1>
//             <h1 className="stroke">US</h1>
//           </div>

//           <div className="contact-wrapper">
//             <div className="contact-info">
//               <div>
//                 <div className="location-loader-shape-3"></div>
//                 <p className="contact-info-location-text">
//                   22 Sin Ming Lane,#06-76 Midview City,Singapore573969.
//                 </p>
//               </div>
//               <div>
//                 <div className="icon-container">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="32"
//                     viewBox="0 0 32 32"
//                     height="32"
//                     fill="none"
//                     className="svg-icon"
//                   >
//                     <path
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       stroke="#fff"
//                       fillRule="evenodd"
//                       d="m24.8868 19.1288c-1.0274-.1308-2.036-.3815-3.0052-.7467-.7878-.29-1.6724-.1034-2.276.48-.797.8075-2.0493.9936-2.9664.3258-1.4484-1.055-2.7233-2.3295-3.7783-3.7776-.6681-.9168-.4819-2.1691.3255-2.9659.5728-.6019.7584-1.4748.4802-2.2577-.3987-.98875-.6792-2.02109-.8358-3.07557-.2043-1.03534-1.1138-1.7807-2.1694-1.77778h-3.18289c-.60654-.00074-1.18614.25037-1.60035.69334-.40152.44503-.59539 1.03943-.53345 1.63555.344 3.31056 1.47164 6.49166 3.28961 9.27986 1.64878 2.5904 3.84608 4.7872 6.43688 6.4356 2.7927 1.797 5.9636 2.9227 9.2644 3.289h.1778c.5409.0036 1.0626-.2 1.4581-.569.444-.406.6957-.9806.6935-1.5822v-3.1821c.0429-1.0763-.7171-2.0185-1.7782-2.2046z"
//                       clipRule="evenodd"
//                     ></path>
//                   </svg>
//                 </div>
//                 <p>+65-88061007</p>
//                 {/* <p>0-xxxx-xxxx</p> */}
//               </div>
//               <div>
//                 <div className="mail-image">
//                   <img src={mailImage} alt="Email-image" />
//                 </div>
//                 <p>webdaddy.info@gmail.com</p>
//               </div>
//             </div>
//             <div className="contact-container">
//               <div className="contact-form">
//                 <form onSubmit={handleSubmit}>
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       required
//                       placeholder=" "
//                     />
//                     <label>First Name</label>
//                   </div>
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       required
//                       placeholder=" "
//                     />
//                     <label>Last Name</label>
//                   </div>
//                   <div className="form-group">
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       placeholder=" "
//                     />
//                     <label>Email</label>
//                   </div>
//                   <div className="form-group">
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       placeholder=" "
//                     ></textarea>
//                     <label>Message</label>
//                   </div>
//                   <button type="submit">Submit</button>
//                 </form>
//               </div>
//             </div>

//             <div className="contact-map">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6968796086676!2d103.8308470744719!3d1.3584992615490217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1725f6ca4f35%3A0xec3df2f14f962668!2sVOFFICE%20SERVICES%20PTE%20LTD!5e0!3m2!1sen!2sin!4v1722107620666!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>

//             <div className="social-buttons-container">
//               <SocialButtons />
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default ContactPage;
