import React from 'react';
import ReactDOM from 'react-dom';

// arrow function, same as 
//const App = function() {    
const App = () => {
    const a = 5
    const b = 3
    console.log("helo into cönsöle t:func in comp");
    return (    
    <div>
        <p>helo wörl, {a} * {b} = {a*b}</p>
        <Hello /><Hello /><Hello />
        <Dasher name="dash this" />
        <Dasher name={a} />
        <Dasher name="{a}" />
        <br />
        <p>öö {Date()}</p>
    </div>
    )
}

const Hello = (props) => {
    return (
        <div>helloComponent</div>
    )
}
const Dasher = (props) => {
    return (
        <div>-{props.name}-</div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

