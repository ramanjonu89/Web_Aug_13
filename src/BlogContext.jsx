// BlogContext.js
import React, { createContext, useState } from 'react';

// Create a Context
export const BlogContext = createContext();

// Create a Provider Component
export const BlogProvider = ({ children }) => {
  const [blogid,setblogId] = useState();
  const[isblogpage,setIsblogpage]=useState(false);



  return (
    <BlogContext.Provider value={{ blogid,setblogId,isblogpage,setIsblogpage}}>
      {children}
    </BlogContext.Provider>
  );
};
