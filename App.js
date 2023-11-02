import './App.css';
import React from 'react'
class App extends React.Component {

    constructor() {
        super();
        this.state={
            name:'Rahul'
        }
    }
    componentDidMount() 
    {
        console.warn("render")
    }
    render() {
        console.warn("render")
        
        return (
            <div className="App">
                <h1>Component Did Mount{this.state.name}</h1>
                <button onClick={()=> {this.state({name:'Singh'})}}>Update Name</button>
            </div>
        );
    }
}

export default App;