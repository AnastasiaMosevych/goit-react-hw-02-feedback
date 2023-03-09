import { Button } from "components/Common/Button/Button";
import { Title } from "components/Common/Title/Title";
import { Container } from "components/Feedback/Feedback.styled";

export const Feedback = ({updateGood, updateNeutral, updateBad}) => {
    return <Container>
        <Title text="Please leave feedback"></Title>
        <Button handleClicks={updateGood} text="Good"></Button>
        <Button handleClicks={updateNeutral} text="Neutral"></Button>
        <Button handleClicks={updateBad} text="Bad"></Button>
    </Container>
}   
  