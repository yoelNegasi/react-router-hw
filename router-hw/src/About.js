import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/about").then((res) => {
      console.log(res);
      this.setState({
        people: res.data,
      });
    });
  }

  render() {
    let element = this.state.people.map((el) => {
      return (
        <div className="people">
          <h2>{el.Name}</h2>
          <h2>{el.Age}</h2>
          <h2>{el.job}</h2>
          <br />
        </div>
      );
    });
    return <div>{element}</div>;
  }
}

export default About;
