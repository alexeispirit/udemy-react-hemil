import { useState } from "react";

function useList(initialState) {
  const [list, setList] = useState(initialState);

  return {
    list,
    removeItem(name) {
      const filteredList = list.filter(item => item.name !== name);
      setList(filteredList);
    },
    saveItem(index, newValue) {
      const copyList = [...list];
      copyList[index].name = newValue;
      setList(copyList);
    }
  };
}

export default useList;
