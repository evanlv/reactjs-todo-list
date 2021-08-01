import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Form from "./Components/Form";

const App = () => {
  return (
    <div className="App">
      <h1 className="text-center mt-3">Todo-list</h1>
      <Form />
    </div>
  );
};

export default App;
