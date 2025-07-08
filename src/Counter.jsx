import { useState } from 'react';

// export const Counter = () => {
//   let count =1;

//   return (
//         <button onClick={() => ++count}>
//         count is {count}
//         </button>
//   );
// }

export const Counter = () => {
  const [count, setCount] = useState(0);
  const setCounterHandler = () => {
    // setCount(count + 1)
    setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
  }
  // const newCount = count + 1;

  return (
        <button onClick={setCounterHandler}>
        count is {count}
        </button>
  );
}