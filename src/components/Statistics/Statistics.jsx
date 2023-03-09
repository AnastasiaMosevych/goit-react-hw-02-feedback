import { Title } from "components/Common/Title/Title";
import { Container, StatisticsList, ListItem } from "components/Statistics/Statistics.styled";
import { Component } from "react";

export class Statistics extends Component {
    countTotalFeedback = (good, neutral, bad) => {
       return good + neutral + bad;
    }

    countPositiveFeedbackPercentage = (good, neutral, bad) => {
        return Math.floor((good / this.countTotalFeedback(good, neutral, bad)) * 100);
    }

    render() {
        const { AppState } = this.props;
        return <Container>
        <Title text="Statistics"></Title>
        <StatisticsList>
            <ListItem>Good: {AppState.good}</ListItem>
            <ListItem>Neutral: {AppState.neutral}</ListItem>
            <ListItem>Bad: {AppState.bad}</ListItem>
                <ListItem>Total: {this.countTotalFeedback(AppState.good, AppState.neutral, AppState.bad)}</ListItem>
                <ListItem>Positive Feedback: {this.countPositiveFeedbackPercentage(AppState.good, AppState.neutral, AppState.bad)}%</ListItem>
        </StatisticsList>
    </Container> 
   }
}