import React from 'react';

class TaskList extends React.Component {
    constructor(props){
        super(props);
        this.taskList = this.props.taskList;
    }

    deleteTask = (key) => {
        this.props.deleteTask(key)
    }

    checkTask = (key) => {
        this.props.checkTask(key)
    } 

    sortList = (e) => {
        this.props.sortList(e.target.getAttribute('data-value'));
    }

    render() {
        return <div className="todo-task-list-wrapper">
            <ul className="todo-task-list">
                    {this.props.taskList ? this.props.taskList.map(task => {
                        if(task.visible){
                            return (<li className={`todo-list-task-element ${task.done ? "check" : ""}`} key={task.key}>
                                        <button className={`list-dot ${task.done ? "check" : ""}`} aria-label="Check" title="Check" onClick={() => this.checkTask(this.props.taskList.indexOf(task))}></button>
                                        <p className="task-text">{task.text}</p>
                                        <button className="list-delete" aria-label="Delete" title="Delete" onClick={() => this.deleteTask(this.props.taskList.indexOf(task))}></button>
                                    </li>) 
                        }
                    }): ''}
            </ul>
            <div className="todo-list-tools">
                <span className="count-list">{this.props.taskCount} items left</span>
                <ul className="list-filter-wrapper">
                    <li>
                        <button className="list-filter-element" aria-label="Delete" title="Delete" data-value="all" onClick={(e)=>{this.sortList(e)}}>All</button>
                    </li>
                    <li>
                        <button className="list-filter-element" aria-label="Delete" title="Delete" data-value="active" onClick={(e)=>{this.sortList(e)}}>Active</button>
                    </li>
                    <li>
                        <button className="list-filter-element" aria-label="Delete" title="Delete" data-value="completed" onClick={(e)=>{this.sortList(e)}}>Completed</button>
                    </li>
                </ul>
                <button className="clear-completed-button" aria-label="Delete" title="Delete">Clear Completed</button>
            </div>
        </div>
    }
}

export default TaskList;