import Item from "./Item";

const Form = () => {
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
        <Item />
        <Item />
        <Item />
      </ul>
    </div>
  );
};
export default Form;
