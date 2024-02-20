const User = ({name}) => {
    return(
        <div className="user-card">
            <h1>Functional Component</h1>
            <h2>Name : {name}</h2>
            <h3>Location : Lucknow</h3>
            <h4>Contact : @vishamanofficial</h4>
        </div>
    )
};

export default User;