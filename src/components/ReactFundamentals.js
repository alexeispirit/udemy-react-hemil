import React, { useState } from "react";

import Item from "../components/Item";
import useList from "../hooks/useList";

const initialState = [
  { name: "tomato", calories: 20 },
  { name: "rice", calories: 30 },
  { name: "candy", calories: 100 }
];

function ReactFundamentals() {
  // const [list, setList] = useState(initialState);
  const items = useList(initialState);
  const [editable, setEditable] = useState(false);

  // const removeUnhealthyHandle = e => {
  //   const filteredList = list.filter(item => item.calories <= 50);
  //   setList(filteredList);
  // };

  const removeItemHandle = e => {
    // const filteredList = list.filter(item => item.name !== e.target.name);
    // setList(filteredList);
    items.removeItem(e.target.name);
  };

  const makeEditableHandle = e => {
    setEditable(true);
  };

  const saveItemsHandle = (e, index) => {
    if (e.key === "Enter") {
      // const copyList = [...list];
      // copyList[index].name = e.target.value;
      // setList(copyList);
      items.saveItem(index, e.target.value);
      setEditable(!editable);
    }
  };

  return (
    <>
      <h2>Grocery List</h2>
      {items.list.map((v, k) => (
        <Item
          item={v}
          index={k}
          key={`${k}${v.name}${v.calorie}`}
          clickHandle={removeItemHandle}
          dblClickHandle={makeEditableHandle}
          keyPressHandle={saveItemsHandle}
          editable={editable}
        />
      ))}
      {/* 
          <button className="remove-button" onClick={removeUnhealthyHandle}>
            Remove unhealthy
          </button>
        */}
    </>
  );
}

export default ReactFundamentals;
