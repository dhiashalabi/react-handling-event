import React from "react";

export default class App extends React.Component {
    constructor() {
        super();
    }

    myFunction() {
        alert("Hello From My Click")
    }

    render() {
        return (
            <div>
                <img onMouseOver={() => { console.log('Hovered!') }} src="https://www.fillmurray.com/200/100" alt=""/>
                <br />
                <br />
                <button onClick={this.myFunction}>Click Me</button>
            </div>
        );
    }
}
