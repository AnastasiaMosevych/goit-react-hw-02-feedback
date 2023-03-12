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
    options: PropTypes.arrayOf((
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }))),
    onLeaveFeedback: PropTypes.func.isRequired,

}
 