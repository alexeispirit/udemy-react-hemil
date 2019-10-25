import React from "react";
import "./Item.css";

function Item({
  item,
  index,
  editable,
  clickHandle,
  dblClickHandle,
  keyPressHandle
}) {
  return (
    <div className="item-list">
      {editable ? (
        <input
          type="text"
          defaultValue={item.name}
          onKeyPress={e => keyPressHandle(e, index)}
        />
      ) : (
        <h3 onDoubleClick={dblClickHandle}>{item.name}</h3>
      )}
      <h3>{item.calories}</h3>
      <button className="remove-button" name={item.name} onClick={clickHandle}>
        Remove
      </button>
    </div>
  );
}

export default Item;
