import {  } from 'react';

const items = [
  {
    task: "Выучить React",
    icon: "🍏",
    isComplited: true,
  },
    {
    task: "Закрепить JavaScripts",
    icon: "🍏",
    isComplited: true,
  },
    {
    task: "Не забивать на англиский",
    icon: "🍏",
    isComplited: false,
  },
]

export const List = () => {
  
  
  
  return (
    <div>
      {
        items.map((item, index) => {
          return (
            <section key={index} className={item.isComplited ? "complited" : ""}>
              <span>{item.icon}</span>
              <h4>{item.task}</h4>
            </section>
          )
        })
      }
    </div>
  );
};