import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({text}) => {
  const [isOpen, setIsOpen] = useState(Array(text.length).fill(false));

  const toggleQuestion = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <>
    {text.map((texts, index) => {
        const { id, title, info } = texts;
        return (
          <article className='question' key={id}>
            <header className='question-header' onClick={() => toggleQuestion(index)}>
              <h4>{title}</h4>
              {isOpen[index] ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </header>
            {isOpen[index] && <p>{info}</p>}
          </article>
        );
      })}
    </>
  )
};

export default Question;
