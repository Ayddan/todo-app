import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import TaskList from './components/TaskList';

function App() {
  const [taskList,setTaskList] = useState([])
  const [taskCount,setTaskCount] = useState(0)

  const submitText = (text) => {
    const data = {
      text: text,
      done: false
    }
    setTaskList([...taskList, data])
    setTaskCount(taskCount + 1)
  }

  const deleteTask = (key) => {
    if(!taskList[key].done){
      setTaskCount(taskCount - 1)
    }
    setTaskList(taskList.filter(item => taskList.indexOf(item) !== key))
  }

  const checkTask = (key) => {
    taskList[key].done = true
    setTaskList([...taskList])
  }

  return (
    <div className="App">
      <div className="todo-list-wrapper">
        <div className="todo-head">
          <h1>todo</h1>
          <button className="toggle-theme" aria-label="change theme color" title="change theme color"></button>
        </div>
        <Input response={submitText}/>
        <TaskList taskList={taskList} taskCount={taskCount} checkTask={checkTask} deleteTask={deleteTask}/>
      </div>
    </div>
  );
}

export default App;
