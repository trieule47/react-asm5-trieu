import React, { Component } from 'react'
import '../TodoList.css';
export default class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [{ name: 'eat Beakfast', deadline: 'now', priority: 'hight' }],
            name: '',
            deadline: '',
            priority: ''
        }
    }

    handleNameChange = (e) => {
        console.log(e.target.value);
        this.setState({ name: e.target.value },
            console.log(this.state.name));
    }

    handleDeadlineChange = (e) => {
        console.log(e.target.value);
        this.setState({ deadline: e.target.value },
            () => console.log("finish" + this.state.deadline));
    }

    handleChecked = (e) => {
        this.setState({ priority: e.target.value },
            () => console.log("priority " + this.state.priority));
    }

    addNewTask = () => {
        console.log(this.state.name + " :" + this.state.deadline + " : " + this.state.priority);
        const item = {
            name: this.state.name,
            deadline: this.state.deadline,
            priority: this.state.priority
        }
        this.setState({ items: [...this.state.items, item] },
            () => { console.log(this.state.items) })
    }

    renderTaskForm() {
        return (
            <div class="box">
                <h2>NewTask</h2>
                <div class="input">
                    <h3>Name</h3>
                    <input type="text" onChange={this.handleNameChange} />
                </div>
                <div class="input">
                    <h3>Deadline</h3>
                    <input type="date" onChange={this.handleDeadlineChange} />
                </div>
                <div onChange={this.handleChecked}>
                    <h3>Priority</h3>
                    <input type='radio' id="hight" name="priority" value="hight" />
                    <label for="hight">Hight</label><br></br>
                    <input type='radio' id="medium" name="priority" value="medium" />
                    <label for="medium">Medium</label><br></br>
                    <input type='radio' id="low" name="priority" value="low" />
                    <label for="low">Low</label><br></br>
                </div>
                <button class="btnAdd" onClick={this.addNewTask}>Add</button>
            </div>
        )
    }

    renderTaskList() {
        return (
            <div class="box">
                <h2>Task List</h2>
                <div>
                    {this.state.items.map((e, index) => {
                        return (
                            <div key={e.name}>
                                <input type="radio" />
                                {e.priority}-{e.name}-{e.deadline}
                                <button>delete</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div class="container">
                {this.renderTaskForm()}
                {this.renderTaskList()}
            </div>
        )
    }
}
