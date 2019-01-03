import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    attendees: [],
    name: ""
  };
  render() {
    return (
      <>
        <input
          type="text"
          onChange={event =>
            this.setState({
              name: event.target.value
            })
          }
          value={this.state.name}
        />
        <button
          onClick={() => {
            this.setState({
              name: "",
              attendees: [...this.state.attendees, this.state.name]
            });
          }}
        >
          Attend
        </button>
        <p>Attending the Redux party: {this.state.attendees.join(", ")}</p>
      </>
    );
  }
}

export default App;
