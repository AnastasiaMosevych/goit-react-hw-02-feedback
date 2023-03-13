import { Button } from "components/Common/Button/Button";
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <>
        {options.map(option => (
            <Button key={option.name} handleClicks={onLeaveFeedback} text={option.text} name={option.name}></Button>
        ))}
    </>
}

FeedbackOptions.propTypes = {
    options: Object.keys(this.state),
    onLeaveFeedback: PropTypes.func.isRequired,

}
 