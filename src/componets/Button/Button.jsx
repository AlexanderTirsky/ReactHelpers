import {  } from 'react';
import cls from "./Button.module.css";



// const inlineStyle = {
//   color: 'lightsalmon',
//   backgroundColor: '#ccc'
// }

const isPrimary = true;

export const Button = ({ onClick, children }) => {
  // const { onClick, children } = props;
  console.log(onClick, children);
  
  return (
    // <button className={isPrimary ? cls.primary : cls.btn}>Кнопка</button>
    <button 
    className={`${cls.btn} ${isPrimary ? cls.primary : ""}`} 
    onClick={onClick}>{children}
    </button>
  );
};
