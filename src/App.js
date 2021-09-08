import logo from './logo.svg';
import './App.css';
import React from 'react';
import data from './db';
import Line from './line';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      display: false
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleGenerate = this.handleGenerate.bind(this)
  }

  handleAdd(event){
    const obj = new Object()
    obj.x=this._x.value
    obj.y=this._y.value
    data.push(obj)
    console.log(data)
  }

  handleClear(event){
    this._x.value = ""
    this._y.value = ""
  }

  handleDelete(event) {
    data.pop()
  }

  handleGenerate(event){
    this.setState(prev => {
      return{
        display : !prev.display
      }
    })
  }

  render(){
    return (
      <div>
        <h1 className="main">Line Graph Creator using React Js</h1>
        <hr/>
        <h2 className="title">Enter the value for x axis:</h2>
        <input type="text" ref={value => this._x=value} className="input"/>
        <h2 className="title">Enter the value for y axis:</h2>
        <input type="text" ref={value => this._y=value} className="input"/>
        <br/>
        <button className="btn" onClick={this.handleAdd}>Add</button>
        <button className="btn" onClick={this.handleClear}>Clear</button>
        <button className="btn" onClick={this.handleDelete}>Delete</button>
        <button className="btn" onClick={this.handleGenerate}>Generate</button>
        <hr/>
        {this.state.display ? <Line /> : <h2>Click on the Generate button to create the Line Graph.</h2>}
      </div>
    )
  }
}

export default App;
