import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

function App() {
  return (
    <>
      {/* Title */}
      <h1>This is list</h1>
      {/* Add task */}
      <AddTask />
      {/* Task list  */}
      <TaskList />
    </>
  );
}

export default App;
