import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props)

        // creating state inside class based component
        // it contains all state variable
        // this state variable is big object
        this.state = {
            userInfo: {
                name: "dummy",
                userName: "vishamanofficial",
            },
        };


    }

    //used to make api call
    // componentDidMount(){    
    // }

    async componentDidMount(){ 
        const data = await fetch("https://api.github.com/users/vishamanofficial"); 
        const json = await data.json();

        this.setState({
            userInfo: json,
        })
        console.log(json);
    }


    render() {
        console.log("render called");
        return (
            
            <div className="user-card">
                <img src={this.state.userInfo.avatar_url}></img>
                <h2>Name : {this.state.userInfo.name}</h2>
                <h3>User Name : @{this.state.userInfo.login}</h3>
                <h3>GitHub : {this.state.userInfo.html_url}</h3>
                
                {/* <h5>Count : {this.state.count}</h5>
                <button onClick={ ()=>{
                    //updating state variable
                    this.setState({
                        count: this.state.count+1,
                        count2: this.state.count2+1,
                    });
                }}>Count Increase</button>
                <h5>Count2 : {this.state.count2}</h5> */}
                
            </div>
            
        );
        
    }
}

export default UserClass;