// Accordion.js
import React, { useState } from "react";

const AccordionItem = ({ index, title, content, isOpen, onClick, number }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => onClick(index)}>
        <h1>{number}</h1>
        <h3>{title}</h3>
        <h5>{isOpen ? "-" : "+"}</h5>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index, number) => (
        <AccordionItem
          key={index}
          index={index}
          number={item.number}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Accordion;
