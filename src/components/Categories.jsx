import { useState } from "react";

export const Categories = ({ items }) => {
  const [activeCategories, setActiveCategories] = useState(0);
  const onSelectItem = (i) => {
    setActiveCategories(i);
  };

  return (
    <div className="categories">
      <ul>
        {/*<li>Все</li>*/}
        {items.map((name, i) => (
          <li
            className={activeCategories === i ? "active" : ""}
            onClick={() => onSelectItem(i)}
            key={`${name}_${i}`}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};
