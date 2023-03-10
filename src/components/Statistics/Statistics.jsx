import { Container, StatisticsList, ListItem } from "components/Statistics/Statistics.styled";
import { Component } from "react";


export class Statistics extends Component {
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        return <Container>  
            <StatisticsList>
            <ListItem>Good: {good}</ListItem>
            <ListItem>Neutral: {neutral}</ListItem>
            <ListItem>Bad: {bad}</ListItem>
                <ListItem>Total: {total}</ListItem>
                <ListItem>Positive Feedback: {positivePercentage}%</ListItem>
        </StatisticsList>
    </Container> 
   }
}