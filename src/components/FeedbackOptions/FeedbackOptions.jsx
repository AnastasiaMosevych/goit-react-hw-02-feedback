import { Button } from "components/Common/Button/Button";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <>
        {options.map(option => (
            <Button key={option.name} handleClicks={onLeaveFeedback} text={option.text} name={option.name}></Button>
        ))}
    </>
}
 