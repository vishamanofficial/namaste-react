import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props)

    }
    render() {
        return (
            <div className="user-card">
                <h1>Class Based Component</h1>
                <h2>Name : {this.props.name}</h2>
                <h3>Location : Lucknow</h3>
                <h4>Contact : @vishamanofficial</h4>
            </div>
        );
    }
}

export default UserClass;