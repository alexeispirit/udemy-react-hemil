import React, { useState } from "react";

import "./DraggableList.css";

const initList = [1, 2, 3, 4, 5, 6];

function DraggableList() {
  const [list, setList] = useState(initList);
  const [draggedItem, setDraggedIten] = useState(null);

  function onDragStartHandle(e, index) {
    setDraggedIten(list[index]);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  }

  function onDragOverHandle(index) {
    const drageedOverItem = list[index];

    if (drageedOverItem === draggedItem) {
      return;
    }

    const items = list.filter(item => item !== draggedItem);

    items.splice(index, 0, draggedItem);

    setList(items);
  }

  return (
    <div>
      <h3>Drag and Drop Project</h3>
      <ul>
        {list.map((item, idx) => (
          <li
            key={idx}
            onDragOver={() => onDragOverHandle(idx)}
            className="item"
          >
            <div draggable onDragStart={e => onDragStartHandle(e, idx)}>
              {item}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DraggableList;
