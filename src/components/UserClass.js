import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(props);
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-component">
        <h1>Name: {name}</h1>
        <h2>Learning React</h2>
        <h3>Contact: ursanilsimha</h3>
        <h4>Location: {location}</h4>
        <h4>Count:{count}</h4>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
      </div>
    );
  }
}

export default UserClass;
