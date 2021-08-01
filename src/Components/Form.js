import { useState } from "react";
import { v4 as uuid } from "uuid";

import Item from "./Item";

const Form = () => {
  const [dataArr, setDataArr] = useState([
    { txt: "Household", id: uuid() },
    { txt: "Walk the dog", id: uuid() },
  ]);

  const deleteTask = (id) => {
    const filteredState = dataArr.filter((item) => {
      return item.id !== id;
    });
    setDataArr(filteredState);
  };

  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
      <form className="mb-3">
        <label htmlFor="todo" className="form-label mt-3">
          Task
        </label>
        <input type="text" className="form-control" id="todo " />
        <button className="mt-2 btn-primary d-block">Send</button>
      </form>

      <h2>Task-list</h2>
      <ul className="list-group">
        {dataArr.map((item, index) => {
          return (
            <Item
              txt={item.txt}
              key={item.id}
              id={item.id}
              deleteFn={deleteTask}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default Form;
