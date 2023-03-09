import { Feedback } from "components/Feedback/Feedback.jsx";
import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { Container } from "./App.styled";
import React from "react";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  updateGood = () => {
    this.setState((prevState) => ({good: prevState.good + 1}))
  }
  updateNeutral = () => {
    this.setState((prevState) => ({neutral: prevState.neutral + 1}))
  }
  updateBad = () => {
    this.setState((prevState) => ({ bad: prevState.bad + 1 }))
}

  render() {
    return (
    <Container>
        <Feedback updateGood={this.updateGood} updateNeutral={this.updateNeutral} updateBad={this.updateBad}></Feedback>
        <Statistics AppState={this.state}></Statistics>
    </Container>
  );
  }
};
