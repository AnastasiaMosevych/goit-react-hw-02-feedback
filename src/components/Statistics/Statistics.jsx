import { Container, StatisticsList, ListItem } from "components/Statistics/Statistics.styled";
import { Component } from "react";
import PropTypes from 'prop-types';

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

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}