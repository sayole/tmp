import React, {useState} from 'react';
import './App.css';

function practice() {
    return (
        <div className="container">
            <h1>Hello World</h1>
            <FuncComp initNumber={2}></FuncComp>
            <ClassComp initNumber={2}></ClassComp>
        </div>
    );
}

function FuncComp(props) {
    let [numberState,setNumberState] = useState(props.initNumber);
    // let numberState = useState(props.initNumber);
    // let number = numberState[0];
    // // let setNumber = numberState[1];
    // console.log('numberState',numberState);
    return (
        <div className={"container"}>
            <h2>function style  component</h2>
            <p>Number : {numberState}</p>
            <input type={"button"} value={"random"} onClick={
                function(){
                    setNumberState(Math.random());
                }
            }/>
        </div>
    );
}

class ClassComp extends React.Component{
    state = {number:this.props.initNumber}

    render(){
        return (
            <div className={"container"}>
                <h2>class style component</h2>
                <p>Number : {this.props.initNumber}</p>
                <p>Number : {this.state.number}</p>
                <input type={"button"} value={"random"} onClick={
                    function(){
                        this.setState({number:Math.random()})
                    }.bind(this)
                }/>
            </div>
        )
    }
}

export default practice;
