import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { Container } from "./App.styled";
import { Section } from "components/Common/Section";
import { Notification } from "./FeedbackOptions/Notification";
import React from "react";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (event) => {
    if (event.target.dataset.name === "good") {
      this.setState((prevState) => ({good: prevState.good + 1}))
    }
    if (event.target.dataset.name === "neutral") {
      this.setState((prevState) => ({neutral: prevState.neutral + 1}))
    }
    if (event.target.dataset.name === "bad") {
      this.setState((prevState) => ({ bad: prevState.bad + 1 }))
    }
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() !== 0) {
      return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
    } else {
      return 0;
      }
  }
  
  render() {
    const total = this.countTotalFeedback();
    let statisticsContent;
    if (total === 0) {
      statisticsContent = <Notification message="There is no feedback"></Notification> 
    } else {
           statisticsContent = <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics>
      
    }
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={[
                { text: "Good", name: "good" },
                { text: "Neutral", name: "neutral" },
                { text: "Bad", name: "bad" },
            ]}
            onLeaveFeedback={ this.onLeaveFeedback }
          >
          </FeedbackOptions>
        </Section>
        <Section title="Statistics">
            {statisticsContent}      
        </Section>
    </Container>
  );
  }
};
