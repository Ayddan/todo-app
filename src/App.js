import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import TaskList from './components/TaskList';

function App() {
  const [taskList,setTaskList] = useState([])
  const [taskCount,setTaskCount] = useState(0)

  const submitText = (text) => {
    if(text.length > 1){
      const data = {
        text: text,
        done: false,
        visible: true
      }
      setTaskList([...taskList, data])
      setTaskCount(taskCount + 1)
    }
  }

  const deleteTask = (key) => {
    if(!taskList[key].done){
      setTaskCount(taskCount - 1)
    }
    setTaskList(taskList.filter(item => taskList.indexOf(item) !== key))
  }

  const checkTask = (key) => {
    taskList[key].done = taskList[key].done ? false : true
    setTaskList([...taskList])
    if(taskList[key].done){
      setTaskCount(taskCount - 1)
    }else{
      setTaskCount(taskCount + 1)
    }
  }

  const sortList = (sortType) => {
    switch(sortType){
      case 'all':
        taskList.map(task => (task.visible = true))
        setTaskList([...taskList])
        break
      case 'active':
        taskList.map(task => (
          task.visible = task.done ? false : true
        ))
        setTaskList([...taskList])
        break
      case 'completed':
        taskList.map(task => (
          task.visible = task.done ? true : false
        ))
        setTaskList([...taskList])
        break
        default:
          taskList.map(task => (task.visible = true))
          setTaskList([...taskList])
        break
    }
  }

  return (
    <div className="App">
      <div className="todo-list-wrapper">
        <div className="todo-head">
          <h1>todo</h1>
          <button className="toggle-theme" aria-label="change theme color" title="change theme color"></button>
        </div>
        <Input response={submitText}/>
        <TaskList taskList={taskList} taskCount={taskCount} checkTask={checkTask} deleteTask={deleteTask} sortList={sortList}/>
      </div>
    </div>
  );
}

export default App;
