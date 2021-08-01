const Item = (props) => {
  const { txt, id, deleteFn } = props;

  return (
    <li className=" border d-flex justify-content-between align-items-center p-2 m-2">
      <div className="p-3">{txt}</div>
      <button className="btn btn-danger p-2 h-50" onClick={() => deleteFn(id)}>
        Delete
      </button>
    </li>
  );
};

export default Item;
