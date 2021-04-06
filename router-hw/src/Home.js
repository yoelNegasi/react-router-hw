import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      footBall: [],
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3001/home").then((res) => {
      console.log(res);
      this.setState({
        footBall: res.data,
      });
    });
  }
  render() {
    let element = this.state.footBall.map((el) => {
      return (
        <div className="home">
          <h1>{el.Player}</h1>
          <h1>{el.Club}</h1>
          <h1>{el.Number}</h1>
          <br />
        </div>
      );
    });
    return <div>{element}</div>;
  }
}

export default Home;
