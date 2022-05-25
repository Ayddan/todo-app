import React from 'react';

class Input extends React.Component {
    constructor(props){
        super(props)
        this.inputText = React.createRef()
    }

    sendText = (e) =>{
        e.preventDefault()
        this.props.response(this.inputText.current.value)
        this.inputText.current.value = ''
    }

    render() {
        return <form className="todo-form">
            <button className="list-dot" aria-label="Send" title="Send" onClick={(e) => this.sendText(e)}></button>
            <label for="taskInput">Enter your task</label>
            <input className="todo-input" type="text" name="taskInput" ref={this.inputText}/>
        </form>
    }
}
export default Input;