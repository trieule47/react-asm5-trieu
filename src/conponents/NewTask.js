import React, { Component } from 'react'
import '../TodoList.css';

export default class NewTask extends Component {

  render() {
    return (
      <div class="box">
        <h2>NewTask</h2>
        <div class="input">
          <h3>Name</h3>
          <input type="text" />
        </div>
        <div class="input">
          <h3>deadline</h3>
          <input type="date" />
        </div>
        <form>
          <input type='radio' id="hight" name="priority" value="hight" />
          <label for="hight">Hight</label><br></br>
          <input type='radio' id="medium" name="priority" value="hight" />
          <label for="medium">Medium</label><br></br>
          <input type='radio' id="low" name="priority" value="hight" />
          <label for="low">Low</label><br></br>
        </form>
        <button class="btnAdd">Add</button>
      </div>
    )
  }
}
