import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props)

        // creating state inside class based component
        // it contains all state variable
        this.state = {
            count:0,
            // count2:1,
        };

    }
    render() {
        return (
            <div className="user-card">
                <h1>Class Based Component</h1>
                <h2>Name : {this.props.name}</h2>
                <h3>Location : Lucknow</h3>
                <h4>Contact : @vishamanofficial</h4>
                <h5>Count : {this.state.count}</h5>
                {/* <h5>Count2 : {this.state.count2}</h5> */}
            </div>
        );
    }
}

export default UserClass;